#include "ui/widgets.hpp"

#include "ui/theme.hpp"

#include <SDL3/SDL_misc.h>

#include <imgui.h>

namespace ui::widgets {

// All string_views passed here point at string literals from
// data/portfolio.hpp, so data() is always null-terminated and safe to hand
// to ImGui's const char* API.

void hyperlink(std::string_view label, std::string_view url)
{
    ImGui::PushStyleColor(ImGuiCol_Text, theme::purple);
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
        ImGui::TextColored(theme::orange, "%s", tag.data());
    }
}

void header(std::string_view title)
{
    ImGui::SetWindowFontScale(1.5F);
    ImGui::TextColored(theme::pink, "%s", title.data());
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
