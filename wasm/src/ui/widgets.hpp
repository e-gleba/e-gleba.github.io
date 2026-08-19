/// @file widgets.hpp
/// @brief Small shared ImGui helpers used by all sections.

#pragma once

#include <imgui.h>

#include <cstdint>
#include <span>
#include <string_view>

namespace ui::widgets {

/// Colored label that opens `url` in a new browser tab when clicked.
/// Stock SDL_OpenURL - no custom JS glue.
void hyperlink(std::string_view label, std::string_view url);

/// Sidebar navigation row with a terminal-style `>` marker on hover and
/// when selected. Returns true when clicked.
bool nav_item(std::string_view label, bool selected);

/// FontAwesome icon glyph (PUA codepoint) in the given color.
void icon(std::uint32_t codepoint, const ImVec4& color);

/// Icon-only theme switcher (FontAwesome sun/moon, large padded square).
/// Returns true when clicked.
bool theme_toggle();

/// Side length of the theme_toggle button - layout code uses this to pin
/// the button to a corner.
[[nodiscard]] float theme_toggle_size() noexcept;

/// Flowing row of accent-colored tags, wraps at the content edge.
void tag_list(std::span<const std::string_view> tags);

/// Large accent title (`~/name`) + separator; starts a section body.
void header(std::string_view title);

/// Wrapped body paragraph followed by vertical spacing.
void paragraph(std::string_view text);

} // namespace ui::widgets
