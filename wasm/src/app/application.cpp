/// @file application.cpp
/// @brief Window/GL/ImGui setup and the per-frame pump.
///
/// No user GL code: the ImGui OpenGL3 backend renders everything, the app
/// only clears the background. GL 1.x core entry points (glViewport,
/// glClearColor, glClear) have real prototypes in <SDL3/SDL_opengl.h> on both
/// desktop and Emscripten, so no loader library is linked.

#include "app/application.hpp"

#include "ui/theme.hpp"

#include <SDL3/SDL_opengl.h>

#include <imgui.h>
#include <imgui_impl_opengl3.h>
#include <imgui_impl_sdl3.h>

#include <string_view>

namespace app {

namespace {

namespace config {

inline constexpr std::string_view app_name = "Evgeniy Gleba - portfolio";
inline constexpr std::string_view app_version = "1.0.0";
inline constexpr std::string_view app_id = "ru.egleba.wasm_portfolio";

inline constexpr std::int32_t window_width = 1280;
inline constexpr std::int32_t window_height = 720;

} // namespace config

#if defined(__EMSCRIPTEN__)
inline constexpr std::string_view glsl_version = "#version 300 es";
#else
inline constexpr std::string_view glsl_version = "#version 330 core";
#endif

[[nodiscard]] bool init_imgui(SDL_Window* window,
                              SDL_GLContext context) noexcept
{
    IMGUI_CHECKVERSION();
    if (ImGui::CreateContext() == nullptr) {
        SDL_LogError(SDL_LOG_CATEGORY_RENDER, "ImGui::CreateContext failed");
        return false;
    }
    ui::theme::apply();

    // Stock font is tiny on hi-DPI canvases - scale the whole UI instead of
    // shipping a TTF (keeps the bundle asset-free).
    ImGui::GetStyle().ScaleAllSizes(1.25F);
    ImGui::GetIO().FontGlobalScale = 1.25F;

    if (!ImGui_ImplSDL3_InitForOpenGL(window, context)) {
        SDL_LogError(SDL_LOG_CATEGORY_RENDER,
                     "ImGui_ImplSDL3_InitForOpenGL failed");
        return false;
    }
    if (!ImGui_ImplOpenGL3_Init(glsl_version.data())) {
        SDL_LogError(SDL_LOG_CATEGORY_RENDER, "ImGui_ImplOpenGL3_Init failed");
        return false;
    }
    return true;
}

} // namespace

application::~application()
{
    // Idempotent teardown, valid for partially-initialized states (init
    // failure path) and the normal SDL_AppQuit path alike.
    if (imgui_initialized_) {
        ImGui_ImplOpenGL3_Shutdown();
        ImGui_ImplSDL3_Shutdown();
        ImGui::DestroyContext();
    }
    if (gl_context_ != nullptr) {
        SDL_GL_DestroyContext(gl_context_);
    }
    if (window_ != nullptr) {
        SDL_DestroyWindow(window_);
    }
    SDL_Quit();
}

bool application::init() noexcept
{
    SDL_SetAppMetadata(config::app_name.data(), config::app_version.data(),
                       config::app_id.data());

    if (!SDL_Init(SDL_INIT_VIDEO)) {
        SDL_LogCritical(SDL_LOG_CATEGORY_APPLICATION, "SDL_Init failed: %s",
                        SDL_GetError());
        return false;
    }

#if defined(__EMSCRIPTEN__)
    SDL_GL_SetAttribute(SDL_GL_CONTEXT_PROFILE_MASK, SDL_GL_CONTEXT_PROFILE_ES);
    SDL_GL_SetAttribute(SDL_GL_CONTEXT_MINOR_VERSION, 0);
#else
    SDL_GL_SetAttribute(SDL_GL_CONTEXT_PROFILE_MASK,
                        SDL_GL_CONTEXT_PROFILE_CORE);
    SDL_GL_SetAttribute(SDL_GL_CONTEXT_MINOR_VERSION, 3);
    SDL_GL_SetAttribute(SDL_GL_CONTEXT_FLAGS,
                        SDL_GL_CONTEXT_FORWARD_COMPATIBLE_FLAG); // macOS
#endif
    SDL_GL_SetAttribute(SDL_GL_CONTEXT_MAJOR_VERSION, 3);
    SDL_GL_SetAttribute(SDL_GL_DOUBLEBUFFER, 1);
    SDL_GL_SetAttribute(SDL_GL_DEPTH_SIZE, 0);  // UI only: no depth
    SDL_GL_SetAttribute(SDL_GL_STENCIL_SIZE, 0);

    window_ = SDL_CreateWindow(config::app_name.data(), config::window_width,
                               config::window_height,
                               SDL_WINDOW_OPENGL | SDL_WINDOW_RESIZABLE
                                   | SDL_WINDOW_HIGH_PIXEL_DENSITY);
    if (window_ == nullptr) {
        SDL_LogCritical(SDL_LOG_CATEGORY_VIDEO, "SDL_CreateWindow failed: %s",
                        SDL_GetError());
        return false;
    }

    gl_context_ = SDL_GL_CreateContext(window_);
    if (gl_context_ == nullptr) {
        SDL_LogCritical(SDL_LOG_CATEGORY_VIDEO,
                        "SDL_GL_CreateContext failed: %s", SDL_GetError());
        return false;
    }

    if (!SDL_GL_MakeCurrent(window_, gl_context_)) {
        SDL_LogCritical(SDL_LOG_CATEGORY_VIDEO, "SDL_GL_MakeCurrent failed: %s",
                        SDL_GetError());
        return false;
    }

    // Vsync where possible; the browser always vsyncs via rAF anyway.
    if (!SDL_GL_SetSwapInterval(1)) {
        SDL_LogWarn(SDL_LOG_CATEGORY_VIDEO, "vsync unavailable: %s",
                    SDL_GetError());
    }

    if (!init_imgui(window_, gl_context_)) {
        return false;
    }
    imgui_initialized_ = true;
    return true;
}

void application::iterate() noexcept
{
    // std::int32_t matches int on every supported target (SDL uses int*).
    std::int32_t width = 0;
    std::int32_t height = 0;
    SDL_GetWindowSizeInPixels(window_, &width, &height); // high-DPI aware
    if (width <= 0 || height <= 0) {
        return; // minimized or zero-size framebuffer: nothing to draw
    }

    glViewport(0, 0, width, height);
    glClearColor(ui::theme::background.x, ui::theme::background.y,
                 ui::theme::background.z, ui::theme::background.w);
    glClear(GL_COLOR_BUFFER_BIT);

    ImGui_ImplOpenGL3_NewFrame();
    ImGui_ImplSDL3_NewFrame();
    ImGui::NewFrame();

    ui_.render();

    ImGui::Render();
    ImGui_ImplOpenGL3_RenderDrawData(ImGui::GetDrawData());
    SDL_GL_SwapWindow(window_);

    ++frame_count_;
}

SDL_AppResult application::handle_event(SDL_Event* event) noexcept
{
    ImGui_ImplSDL3_ProcessEvent(event);

    if (event->type == SDL_EVENT_QUIT) {
        return SDL_APP_SUCCESS; // browser tab closed / window close button
    }
    return SDL_APP_CONTINUE;
}

} // namespace app
