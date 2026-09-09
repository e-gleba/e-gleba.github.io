/// @file portfolio_ui.hpp
/// @brief Top-level UI: adaptive layout (sidebar / compact nav) hosting the
/// content sections.
///
/// Sections are reached through the ui::section interface only - this class
/// knows nothing about their concrete types beyond construction.

#pragma once

#include <cstddef>

namespace ui {

class portfolio_ui final {
  public:
    portfolio_ui() = default;
    ~portfolio_ui() = default;

    portfolio_ui(const portfolio_ui&) = delete;
    portfolio_ui& operator=(const portfolio_ui&) = delete;
    portfolio_ui(portfolio_ui&&) = delete;
    portfolio_ui& operator=(portfolio_ui&&) = delete;

    /// Renders one frame (called once per main-loop iteration).
    void render();

    /// Keyboard navigation between sections (vim-style j/k and arrows).
    void select_next() noexcept;
    void select_prev() noexcept;
    void select(std::size_t index) noexcept;

  private:
    std::size_t active_section_ = 0;
};

} // namespace ui
