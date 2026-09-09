/// @file section.hpp
/// @brief Standard interface between the layout and the content modules.

#pragma once

#include <string_view>

namespace ui {

/// Every portfolio section is a stateless immediate-mode renderer addressed
/// by name. portfolio_ui talks to sections only through this base - concrete
/// types never leak across module boundaries, so sections can be added,
/// removed, or reordered without touching the layout code.
class section {
public:
    virtual ~section() = default;

    /// Sidebar label.
    [[nodiscard]] virtual std::string_view name() const noexcept = 0;

    /// Draws the section body (called inside the content child window).
    virtual void render() const = 0;
};

} // namespace ui
