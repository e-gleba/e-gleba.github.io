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

    // One aligned row per link: a fixed-width icon column keeps the labels
    // lined up across brand/solid glyph widths. No local font scaling -
    // everything follows the global UI scale.
    const float label_x = ImGui::GetCursorPosX() + ImGui::GetFontSize() * 1.6F;

    for (const portfolio::external_link& link : portfolio::contact_links) {
        widgets::icon(link.icon, theme::link);
        ImGui::SameLine(label_x);
        widgets::hyperlink(link.label, link.url);
        ImGui::Spacing();
    }
}

} // namespace ui
