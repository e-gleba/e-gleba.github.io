/// @file portfolio_ui.hpp
/// @brief Top-level layout: sidebar navigation + active section content.

#pragma once

#include <cstddef>

namespace ui {

/// Draws the whole page: identity block and section navigation in the left
/// sidebar, the active section's body on the right, a vim-key hint status
/// bar at the bottom. Sections are reached exclusively through the
/// ui::section interface.
class portfolio_ui final {
public:
    /// Draws one frame inside the current ImGui context.
    void render();

    // Keyboard navigation (vim-style). Out-of-range indices are ignored.
    void select_next() noexcept;
    void select_prev() noexcept;
    void select(std::size_t index) noexcept;
    void select_first() noexcept;
    void select_last() noexcept;

private:
    std::size_t active_section_ = 0;
};

} // namespace ui
