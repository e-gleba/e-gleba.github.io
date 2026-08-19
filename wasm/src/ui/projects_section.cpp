#include "ui/projects_section.hpp"

#include "data/portfolio.hpp"
#include "ui/theme.hpp"
#include "ui/widgets.hpp"

#include <imgui.h>

namespace ui {

void projects_section::render() const
{
    widgets::header(name());

    for (const portfolio::project_entry& project : portfolio::projects) {
        widgets::hyperlink(project.name, project.url);
        ImGui::SameLine();
        ImGui::TextDisabled("%s - %d stars, %d forks", project.language.data(),
                            project.stars, project.forks);
        widgets::paragraph(project.description);
        ImGui::Spacing();
    }
}

} // namespace ui
