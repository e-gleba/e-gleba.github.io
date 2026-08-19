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

    for (const portfolio::external_link& link : portfolio::contact_links) {
        ImGui::TextColored(theme::secondary, "[%s]", link.sigil.data());
        ImGui::SameLine();
        widgets::hyperlink(link.label, link.url);
    }
}

} // namespace ui
