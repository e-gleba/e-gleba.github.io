/// @file portfolio_ui.hpp
/// @brief Top-level layout: sidebar navigation + active section content.

#pragma once

#include <cstddef>

namespace ui {

/// Draws the whole page: identity block and section navigation in the left
/// sidebar, the active section's body on the right. Sections are reached
/// exclusively through the ui::section interface.
class portfolio_ui final {
public:
    /// Draws one frame inside the current ImGui context.
    void render();

private:
    std::size_t active_section_ = 0;
};

} // namespace ui
