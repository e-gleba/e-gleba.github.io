#include "ui/skills_section.hpp"

#include "data/portfolio.hpp"
#include "ui/theme.hpp"
#include "ui/widgets.hpp"

#include <imgui.h>

namespace ui {

void skills_section::render() const
{
    widgets::header(name());

    for (const portfolio::skill_category& category :
         portfolio::skill_categories) {
        ImGui::TextColored(theme::purple, "%s", category.name.data());
        widgets::tag_list(category.items);
        ImGui::Spacing();
        ImGui::Spacing();
    }
}

} // namespace ui
