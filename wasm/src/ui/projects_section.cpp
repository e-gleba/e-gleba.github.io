#include "ui/projects_section.hpp"

#include "data/portfolio.hpp"
#include "ui/theme.hpp"
#include "ui/widgets.hpp"

#include <imgui.h>
#include <implot.h>

#include <array>

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

    // Stars chart - rendered from the same constexpr data, no duplication.
    constexpr std::size_t count = portfolio::projects.size();
    std::array<double, count> positions{};
    std::array<double, count> stars{};
    std::array<const char*, count> labels{};
    for (std::size_t i = 0; i < count; ++i) {
        positions[i] = static_cast<double>(i);
        stars[i] = static_cast<double>(portfolio::projects[i].stars);
        labels[i] = portfolio::projects[i].name.data();
    }

    ImGui::Spacing();
    ImGui::TextColored(theme::link, "Stars");
    if (ImPlot::BeginPlot("##project_stars", ImVec2{-1.0F, 200.0F})) {
        ImPlot::SetupAxes(nullptr, "stars");
        ImPlot::SetupAxisTicks(ImAxis_X1, positions.data(),
                               static_cast<int>(count), labels.data());
        ImPlot::PlotBars("##stars", positions.data(), stars.data(),
                         static_cast<int>(count), 0.6);
        ImPlot::EndPlot();
    }
}

} // namespace ui
