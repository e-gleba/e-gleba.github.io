#include "ui/experience_section.hpp"

#include "data/portfolio.hpp"
#include "ui/theme.hpp"
#include "ui/widgets.hpp"

#include <imgui.h>

namespace ui {

void experience_section::render() const
{
    widgets::header(name());

    for (const portfolio::experience_entry& entry : portfolio::experience) {
        ImGui::TextColored(theme::pink, "%s", entry.title.data());
        ImGui::SameLine();
        ImGui::TextDisabled("%s", entry.period.data());

        ImGui::TextColored(theme::purple, "%s", entry.company.data());
        widgets::paragraph(entry.description);
        widgets::tag_list(entry.tags);

        if (!entry.link_url.empty()) {
            widgets::hyperlink(entry.link_label, entry.link_url);
        }

        ImGui::Spacing();
        ImGui::Separator();
        ImGui::Spacing();
    }
}

} // namespace ui
