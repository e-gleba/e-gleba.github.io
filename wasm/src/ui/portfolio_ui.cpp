#include "ui/portfolio_ui.hpp"

#include "data/portfolio.hpp"
#include "ui/about_section.hpp"
#include "ui/contact_section.hpp"
#include "ui/experience_section.hpp"
#include "ui/projects_section.hpp"
#include "ui/section.hpp"
#include "ui/skills_section.hpp"
#include "ui/theme.hpp"
#include "ui/widgets.hpp"

#include <imgui.h>

#include <array>
#include <cstdio>

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

/// Below this window width the sidebar collapses into a compact top block
/// (phone screens).
constexpr float wide_layout_min_width = 640.0F;
constexpr float sidebar_width = 240.0F;

} // namespace

void portfolio_ui::select_next() noexcept
{
    active_section_ = (active_section_ + 1) % sections.size();
}

void portfolio_ui::select_prev() noexcept
{
    active_section_ = (active_section_ + sections.size() - 1) % sections.size();
}

void portfolio_ui::select(std::size_t index) noexcept
{
    if (index < sections.size()) {
        active_section_ = index;
    }
}

void portfolio_ui::select_first() noexcept
{
    active_section_ = 0;
}

void portfolio_ui::select_last() noexcept
{
    active_section_ = sections.size() - 1;
}

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

    // -- header row: theme toggle pinned to the right corner ----------------
    ImGui::SetCursorPosX(ImGui::GetWindowWidth()
                         - ImGui::GetFrameHeight()
                         - ImGui::GetStyle().WindowPadding.x);
    if (widgets::theme_toggle()) {
        theme::toggle();
    }

    const float status_height = ImGui::GetFrameHeightWithSpacing();
    const bool wide = ImGui::GetWindowWidth() >= wide_layout_min_width;

    if (wide) {
        // -- sidebar: identity, navigation, stats ---------------------------
        const float body_height =
            ImGui::GetContentRegionAvail().y - status_height;
        if (ImGui::BeginChild("sidebar", ImVec2{sidebar_width, body_height},
                              ImGuiChildFlags_Borders)) {
            ImGui::SetWindowFontScale(1.2F);
            ImGui::TextColored(theme::primary, "%s",
                               portfolio::owner_name.data());
            ImGui::SetWindowFontScale(1.0F);
            ImGui::TextDisabled("%s", portfolio::tagline.data());
            ImGui::TextDisabled("%s, %s", portfolio::location.data(),
                                portfolio::company.data());

            ImGui::Spacing();
            ImGui::Separator();
            ImGui::Spacing();

            for (std::size_t i = 0; i < sections.size(); ++i) {
                if (widgets::nav_item(sections[i]->name(),
                                      i == active_section_)) {
                    active_section_ = i;
                }
            }

            ImGui::Spacing();
            ImGui::Separator();
            ImGui::Spacing();

            for (const portfolio::stat& s : portfolio::stats) {
                ImGui::TextColored(theme::secondary, "%s", s.value.data());
                ImGui::SameLine();
                ImGui::TextDisabled("%s", s.label.data());
            }
        }
        ImGui::EndChild();

        ImGui::SameLine();

        if (ImGui::BeginChild("content", ImVec2{0.0F, body_height})) {
            sections[active_section_]->render();
        }
        ImGui::EndChild();
    } else {
        // -- compact: identity line, wrapping nav row, full-width content ---
        ImGui::TextColored(theme::primary, "%s", portfolio::owner_name.data());
        ImGui::SameLine();
        ImGui::TextDisabled("%s", portfolio::tagline.data());

        const float right_edge =
            ImGui::GetCursorPosX() + ImGui::GetContentRegionAvail().x;
        const float spacing = ImGui::GetStyle().ItemSpacing.x;
        bool first = true;
        for (std::size_t i = 0; i < sections.size(); ++i) {
            if (!first) {
                const float item_width =
                    ImGui::CalcTextSize(sections[i]->name().data()).x;
                if (ImGui::GetCursorPosX() + spacing + item_width
                    <= right_edge) {
                    ImGui::SameLine();
                }
            }
            first = false;

            const bool selected = (i == active_section_);
            if (selected) {
                ImGui::PushStyleColor(ImGuiCol_Button,
                                      theme::with_alpha(theme::secondary,
                                                        0.45F));
            }
            if (ImGui::SmallButton(sections[i]->name().data())) {
                active_section_ = i;
            }
            if (selected) {
                ImGui::PopStyleColor();
            }
        }

        ImGui::Separator();

        const float content_height =
            ImGui::GetContentRegionAvail().y - status_height;
        if (ImGui::BeginChild("content", ImVec2{0.0F, content_height})) {
            sections[active_section_]->render();
        }
        ImGui::EndChild();
    }

    // -- status bar: key hints + position -----------------------------------
    ImGui::Separator();
    ImGui::TextDisabled("tab/arrows/j/k sections · 1-5 jump · g/G first/last");

    std::array<char, 16> position{};
    std::snprintf(position.data(), position.size(), "%zu/%zu",
                  active_section_ + 1, sections.size());
    ImGui::SameLine(ImGui::GetWindowWidth()
                    - ImGui::CalcTextSize(position.data()).x
                    - ImGui::GetStyle().WindowPadding.x);
    ImGui::TextDisabled("%s", position.data());

    ImGui::End();
}

} // namespace ui
