/// @file main.cpp
/// @brief Entry points - SDL3 callback model, browser-driven.
///
/// All state lives in app::application; SDL owns the instance between
/// callbacks through the `void* appstate` pointer. Under Emscripten the
/// browser drives SDL_AppIterate from requestAnimationFrame and maps the tab
/// close button to SDL_EVENT_QUIT, so the event loop stays in control of the
/// thread.

// Must be defined before <SDL3/SDL_main.h> so SDL routes `main` through the
// SDL_App* callbacks below. Required on Emscripten.
#define SDL_MAIN_USE_CALLBACKS

#include "app/application.hpp"

#include <SDL3/SDL.h>
#include <SDL3/SDL_main.h>

#include <memory>

/// One-time init. The state is published to SDL only after full success -
/// SDL zero-initializes *appstate and may still call SDL_AppQuit after a
/// failed init, so partial ownership never escapes.
SDL_AppResult SDL_AppInit(void** appstate, int /*argc*/, char** /*argv*/)
{
    auto app = std::make_unique<app::application>();
    if (!app->init()) {
        return SDL_APP_FAILURE; // destructor runs here, handles partial init
    }
    *appstate = app.release();
    return SDL_APP_CONTINUE;
}

/// One frame. Implicitly vsynced (rAF) and paused in background tabs.
SDL_AppResult SDL_AppIterate(void* appstate)
{
    static_cast<app::application*>(appstate)->iterate();
    return SDL_APP_CONTINUE;
}

SDL_AppResult SDL_AppEvent(void* appstate, SDL_Event* event)
{
    return static_cast<app::application*>(appstate)->handle_event(event);
}

/// Also invoked after a failed SDL_AppInit (with nullptr state in that case,
/// since ownership was never handed over).
void SDL_AppQuit(void* appstate, SDL_AppResult /*result*/)
{
    const std::unique_ptr<app::application> app(
        static_cast<app::application*>(appstate));
}
