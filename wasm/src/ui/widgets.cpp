#include "ui/widgets.hpp"

#include "ui/theme.hpp"

#include <SDL3/SDL_misc.h>

#include <imgui.h>

#include <cmath>

namespace ui::widgets {

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

bool theme_toggle()
{
    const float size = ImGui::GetFrameHeight();
    const ImVec2 pos = ImGui::GetCursorScreenPos();

    ImGui::InvisibleButton("##theme_toggle", ImVec2{size, size});
    const bool clicked = ImGui::IsItemClicked();
    const bool hovered = ImGui::IsItemHovered();

    ImDrawList* draw_list = ImGui::GetWindowDrawList();
    const ImU32 color =
        ImGui::GetColorU32(hovered ? theme::secondary : theme::text_dim);
    const ImVec2 center{pos.x + size * 0.5F, pos.y + size * 0.5F};
    const float radius = size * 0.28F;

    if (theme::active_mode == theme::mode::sunset) {
        // sun: ring + 8 rays
        draw_list->AddCircle(center, radius, color, 0, 1.5F);
        for (std::int32_t i = 0; i < 8; ++i) {
            const float angle =
                6.2831853F * static_cast<float>(i) / 8.0F;
            const float dir_x = std::cos(angle);
            const float dir_y = std::sin(angle);
            draw_list->AddLine(
                ImVec2{center.x + dir_x * radius * 1.4F,
                       center.y + dir_y * radius * 1.4F},
                ImVec2{center.x + dir_x * radius * 1.9F,
                       center.y + dir_y * radius * 1.9F},
                color, 1.5F);
        }
    } else {
        // moon: filled disc with an offset background-colored cutout
        draw_list->AddCircleFilled(center, radius, color);
        draw_list->AddCircleFilled(
            ImVec2{center.x + radius * 0.45F, center.y - radius * 0.25F},
            radius * 0.8F, ImGui::GetColorU32(theme::background));
    }

    if (hovered) {
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
