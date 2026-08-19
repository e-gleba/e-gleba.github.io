#include "ui/widgets.hpp"

#include "ui/theme.hpp"

#include <SDL3/SDL_misc.h>

#include <imgui.h>

#include <array>

namespace ui::widgets {

namespace {

// FontAwesome solid glyphs for the theme toggle.
inline constexpr std::uint32_t icon_sun = 0xF185;
inline constexpr std::uint32_t icon_moon = 0xF186;

/// Encodes a Private Use Area codepoint (U+E000-U+F2FF - exactly 3 UTF-8
/// bytes) into a null-terminated string.
[[nodiscard]] std::array<char, 4> encode_pua(std::uint32_t codepoint) noexcept
{
    return std::array<char, 4>{
        static_cast<char>(0xE0U | (codepoint >> 12U)),
        static_cast<char>(0x80U | ((codepoint >> 6U) & 0x3FU)),
        static_cast<char>(0x80U | (codepoint & 0x3FU)),
        '\0'};
}

} // namespace

// All string_views passed here point at string literals from
// data/portfolio.hpp, so data() is always null-terminated and safe to hand
// to ImGui's const char* API.

void hyperlink(std::string_view label, std::string_view url)
{
    ImGui::PushStyleColor(ImGuiCol_Text, theme::link);
    const bool clicked = ImGui::Selectable(label.data());
    ImGui::PopStyleColor();

    if (ImGui::IsItemHovered()) {
        ImGui::SetMouseCursor(ImGuiMouseCursor_Hand);
        ImGui::SetTooltip("%s", url.data());
    }
    if (clicked) {
        SDL_OpenURL(url.data()); // new tab on Emscripten
    }
}

bool nav_item(std::string_view label, bool selected)
{
    // Indent the row to leave room for the `>` marker.
    constexpr float marker_indent = 16.0F;
    ImGui::SetCursorPosX(ImGui::GetCursorPosX() + marker_indent);
    const ImVec2 pos = ImGui::GetCursorScreenPos();

    const bool clicked = ImGui::Selectable(label.data(), selected);

    if (selected || ImGui::IsItemHovered()) {
        ImGui::GetWindowDrawList()->AddText(
            ImGui::GetFont(), ImGui::GetFontSize(),
            ImVec2{pos.x - marker_indent + 2.0F, pos.y},
            ImGui::GetColorU32(theme::secondary), ">");
    }
    return clicked;
}

void icon(std::uint32_t codepoint, const ImVec4& color)
{
    const auto utf8 = encode_pua(codepoint);
    ImGui::TextColored(color, "%s", utf8.data());
}

bool theme_toggle()
{
    const auto utf8 = encode_pua(theme::active_mode == theme::mode::light
                                     ? icon_sun
                                     : icon_moon);
    const bool clicked = ImGui::SmallButton(utf8.data());
    if (ImGui::IsItemHovered()) {
        ImGui::SetTooltip("toggle theme");
    }
    return clicked;
}

void tag_list(std::span<const std::string_view> tags)
{
    const float right_edge =
        ImGui::GetCursorPosX() + ImGui::GetContentRegionAvail().x;
    const float spacing = ImGui::GetStyle().ItemSpacing.x;

    bool first = true;
    for (const std::string_view tag : tags) {
        if (!first) {
            const float item_width = ImGui::CalcTextSize(tag.data()).x;
            if (ImGui::GetCursorPosX() + spacing + item_width <= right_edge) {
                ImGui::SameLine();
            }
        }
        first = false;
        ImGui::TextColored(theme::secondary, "%s", tag.data());
    }
}

void header(std::string_view title)
{
    ImGui::SetWindowFontScale(1.5F);
    ImGui::TextDisabled("~/");
    ImGui::SameLine(0.0F, 0.0F);
    ImGui::TextColored(theme::primary, "%s", title.data());
    ImGui::SetWindowFontScale(1.0F);
    ImGui::Separator();
    ImGui::Spacing();
}

void paragraph(std::string_view text)
{
    ImGui::PushTextWrapPos(0.0F); // 0 = wrap at the window edge
    ImGui::TextUnformatted(text.data(), text.data() + text.size());
    ImGui::PopTextWrapPos();
    ImGui::Spacing();
}

} // namespace ui::widgets
