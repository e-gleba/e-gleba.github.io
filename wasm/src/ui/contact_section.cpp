#include "ui/contact_section.hpp"

#include "data/portfolio.hpp"
#include "ui/theme.hpp"
#include "ui/widgets.hpp"

#include <imgui.h>

namespace ui {

void contact_section::render() const
{
    widgets::header(name());
    widgets::paragraph(portfolio::contact_text);
    ImGui::Spacing();

    // Emphasized link rows: larger icon + label, and a fixed-width icon
    // column so the labels align across brand/solid glyph widths.
    constexpr float link_scale = 1.3F;
    ImGui::SetWindowFontScale(link_scale);

    const float label_x = ImGui::GetCursorPosX() + ImGui::GetFontSize() * 1.6F;

    for (const portfolio::external_link& link : portfolio::contact_links) {
        widgets::icon(link.icon, theme::link);
        ImGui::SameLine(label_x);
        widgets::hyperlink(link.label, link.url);
        ImGui::Spacing();
    }

    ImGui::SetWindowFontScale(1.0F);
}

} // namespace ui
