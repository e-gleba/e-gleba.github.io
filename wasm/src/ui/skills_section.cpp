#include "ui/skills_section.hpp"

#include "data/portfolio.hpp"
#include "ui/theme.hpp"
#include "ui/widgets.hpp"

#include <imgui.h>

#include <span>

namespace ui {

namespace {

/// Flowing row of icon + label pairs, wrapping at the content edge. Local
/// to this section - the only consumer of icon-tagged skill items.
void skill_tags(std::span<const portfolio::skill_item> items)
{
    const float right_edge =
        ImGui::GetCursorPosX() + ImGui::GetContentRegionAvail().x;
    const float spacing = ImGui::GetStyle().ItemSpacing.x;
    const float icon_gap = spacing * 0.5F;

    bool first = true;
    for (const portfolio::skill_item& item : items) {
        if (!first) {
            // Pair width: icon advance (~font size) + gap + label.
            const float pair_width =
                ImGui::GetFontSize() + icon_gap
                + ImGui::CalcTextSize(item.label.data()).x;
            if (ImGui::GetCursorPosX() + spacing + pair_width <= right_edge) {
                ImGui::SameLine();
            }
        }
        first = false;
        widgets::icon(item.icon, theme::secondary);
        ImGui::SameLine(0.0F, icon_gap);
        ImGui::TextColored(theme::secondary, "%s", item.label.data());
    }
}

} // namespace

void skills_section::render() const
{
    widgets::header(name());

    for (const portfolio::skill_category& category :
         portfolio::skill_categories) {
        ImGui::TextColored(theme::link, "%s", category.name.data());
        skill_tags(category.items);
        ImGui::Spacing();
        ImGui::Spacing();
    }
}

} // namespace ui
