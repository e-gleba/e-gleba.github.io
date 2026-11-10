/// @file application.hpp
/// @brief Owns the SDL window, GL context, and Dear ImGui context.

#pragma once

#include "ui/portfolio_ui.hpp"

#include <SDL3/SDL.h>

#include <cstdint>

namespace app {

/// Application lifetime object. Constructed by SDL_AppInit, owned by SDL
/// through the appstate pointer, destroyed by SDL_AppQuit. Non-copyable,
/// non-movable: SDL holds a raw pointer to the instance.
class application final {
public:
    application() = default;
    ~application();

    application(const application&) = delete;
    application& operator=(const application&) = delete;
    application(application&&) = delete;
    application& operator=(application&&) = delete;

    /// SDL, window + GL context, Dear ImGui. Returns false on any failure;
    /// the object stays destructible in that half-initialized state.
    [[nodiscard]] bool init() noexcept;

    /// One frame: clear, UI, swap.
    void iterate() noexcept;

    /// Routes events to Dear ImGui; returns SDL_APP_SUCCESS when the page
    /// asks to close.
    [[nodiscard]] SDL_AppResult handle_event(SDL_Event* event) noexcept;

private:
    SDL_Window* window_ = nullptr;
    SDL_GLContext gl_context_ = nullptr;
    bool imgui_initialized_ = false;
    ui::portfolio_ui ui_;
    std::uint64_t frame_count_ = 0;
};

} // namespace app
