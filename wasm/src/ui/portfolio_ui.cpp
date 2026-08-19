#include "ui/portfolio_ui.hpp"

#include "data/portfolio.hpp"
#include "ui/about_section.hpp"
#include "ui/contact_section.hpp"
#include "ui/experience_section.hpp"
#include "ui/projects_section.hpp"
#include "ui/section.hpp"
#include "ui/skills_section.hpp"
#include "ui/theme.hpp"

#include <imgui.h>

#include <array>

namespace ui {

namespace {

// Stateless sections with static storage: constant-initialized (constexpr
// default constructors), no ownership, no init-order concerns. To add a
// section: new file pair + one entry here.
const about_section about{};
const experience_section experience{};
const projects_section projects{};
const skills_section skills{};
const contact_section contact{};

const std::array<const section*, 5> sections{&about, &experience, &projects,
                                             &skills, &contact};

} // namespace

void portfolio_ui::render()
{
    const ImGuiViewport* viewport = ImGui::GetMainViewport();
    ImGui::SetNextWindowPos(viewport->WorkPos);
    ImGui::SetNextWindowSize(viewport->WorkSize);

    constexpr ImGuiWindowFlags window_flags =
        ImGuiWindowFlags_NoDecoration | ImGuiWindowFlags_NoMove
        | ImGuiWindowFlags_NoBringToFrontOnFocus
        | ImGuiWindowFlags_NoSavedSettings;

    if (!ImGui::Begin("portfolio", nullptr, window_flags)) {
        ImGui::End();
        return;
    }

    // -- sidebar: identity, navigation, stats -------------------------------
    constexpr float sidebar_width = 240.0F;
    if (ImGui::BeginChild("sidebar", ImVec2{sidebar_width, 0.0F},
                          ImGuiChildFlags_Border)) {
        ImGui::SetWindowFontScale(1.2F);
        ImGui::TextColored(theme::pink, "%s", portfolio::owner_name.data());
        ImGui::SetWindowFontScale(1.0F);
        ImGui::TextDisabled("%s", portfolio::tagline.data());
        ImGui::TextDisabled("%s, %s", portfolio::location.data(),
                            portfolio::company.data());

        ImGui::Spacing();
        ImGui::Separator();
        ImGui::Spacing();

        for (std::size_t i = 0; i < sections.size(); ++i) {
            const bool selected = (i == active_section_);
            if (selected) {
                ImGui::PushStyleColor(ImGuiCol_Text, theme::orange);
            }
            if (ImGui::Selectable(sections[i]->name().data(), selected)) {
                active_section_ = i;
            }
            if (selected) {
                ImGui::PopStyleColor();
            }
        }

        ImGui::Spacing();
        ImGui::Separator();
        ImGui::Spacing();

        for (const portfolio::stat& s : portfolio::stats) {
            ImGui::TextColored(theme::orange, "%s", s.value.data());
            ImGui::SameLine();
            ImGui::TextDisabled("%s", s.label.data());
        }
    }
    ImGui::EndChild();

    ImGui::SameLine();

    // -- content: active section --------------------------------------------
    if (ImGui::BeginChild("content")) {
        sections[active_section_]->render();
    }
    ImGui::EndChild();

    ImGui::End();
}

} // namespace ui
