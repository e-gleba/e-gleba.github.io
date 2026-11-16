#include "ui/about_section.hpp"

#include "data/portfolio.hpp"
#include "ui/theme.hpp"
#include "ui/widgets.hpp"

#include <imgui.h>

namespace ui {

void about_section::render() const
{
    widgets::header(name());

    widgets::paragraph(portfolio::about_p1);
    widgets::paragraph(portfolio::about_p2);
    widgets::paragraph(portfolio::about_p3);

    ImGui::Spacing();
    ImGui::TextColored(theme::link, "Philosophy");
    widgets::paragraph(portfolio::about_philosophy);

    ImGui::TextColored(theme::link, "Impact");
    for (const std::string_view item : portfolio::about_impact) {
        ImGui::BulletText("%s", item.data());
    }
}

} // namespace ui
