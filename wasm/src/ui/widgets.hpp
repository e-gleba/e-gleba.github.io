/// @file widgets.hpp
/// @brief Small shared ImGui helpers used by all sections.

#pragma once

#include <imgui.h>

#include <cstdint>
#include <span>
#include <string_view>

namespace ui::widgets {

/// Colored label that opens `url` in a new browser tab when clicked. On
/// hover the label eases right while a `>` arrow fades in at its left edge.
/// Stock SDL_OpenURL - no custom JS glue.
void hyperlink(std::string_view label, std::string_view url);

/// Sidebar navigation row. On hover (and when selected) the label eases
/// right, over a few frames, while a terminal-style `>` arrow fades in at
/// the row's left edge. Returns true when clicked.
bool nav_item(std::string_view label, bool selected);

/// FontAwesome icon glyph (PUA codepoint) in the given color.
void icon(std::uint32_t codepoint, const ImVec4& color);

/// Icon-only ghost theme switcher: just the FontAwesome sun/moon glyph at
/// rest - hover adds a subtle rounded wash and an accent tint. Returns true
/// when clicked.
bool theme_toggle();

/// Side length of the theme_toggle click target - layout code uses this to
/// pin it to a corner.
[[nodiscard]] float theme_toggle_size() noexcept;

/// Flowing row of accent-colored tags, wraps at the content edge.
void tag_list(std::span<const std::string_view> tags);

/// Large accent title (`~/name`) + separator; starts a section body.
void header(std::string_view title);

/// Wrapped body paragraph followed by vertical spacing.
void paragraph(std::string_view text);

} // namespace ui::widgets
