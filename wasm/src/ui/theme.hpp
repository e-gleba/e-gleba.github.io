/// @file theme.hpp
/// @brief Warm "seaside sunset" palettes + one-time ImGui style setup.
///
/// Sunset (light, default): sunlit stone, terracotta, gold, sea teal -
/// warm Mediterranean feel. Dusk (dark): the same hues over warm espresso,
/// never cold blue-black. The active palette follows the device theme
/// (SDL_GetSystemTheme + SDL_EVENT_SYSTEM_THEME_CHANGED) - no JS glue.

#pragma once

#include <imgui.h>

#include <cstdint>

namespace ui::theme {

enum class mode : std::uint8_t { sunset, dusk };

// -- sunset (light) ----------------------------------------------------------
inline constexpr ImVec4 primary_sunset{0.776F, 0.353F, 0.200F,
                                       1.0F}; // terracotta #C65A33
inline constexpr ImVec4 secondary_sunset{0.659F, 0.455F, 0.059F,
                                         1.0F}; // gold #A8740F
inline constexpr ImVec4 link_sunset{0.122F, 0.478F, 0.431F,
                                    1.0F}; // sea teal #1F7A6E
inline constexpr ImVec4 background_sunset{0.984F, 0.953F, 0.894F,
                                          1.0F}; // sunlit stone #FBF3E4
inline constexpr ImVec4 surface_sunset{0.941F, 0.890F, 0.784F, 1.0F};
inline constexpr ImVec4 text_sunset{0.231F, 0.184F, 0.145F, 1.0F};
inline constexpr ImVec4 text_dim_sunset{0.549F, 0.478F, 0.388F, 1.0F};

// -- dusk (dark) -------------------------------------------------------------
inline constexpr ImVec4 primary_dusk{0.941F, 0.541F, 0.361F, 1.0F};  // coral
inline constexpr ImVec4 secondary_dusk{0.910F, 0.706F, 0.353F, 1.0F}; // gold
inline constexpr ImVec4 link_dusk{0.353F, 0.710F, 0.659F, 1.0F};      // teal
inline constexpr ImVec4 background_dusk{0.118F, 0.086F, 0.063F, 1.0F};
inline constexpr ImVec4 surface_dusk{0.200F, 0.149F, 0.102F, 1.0F};
inline constexpr ImVec4 text_dusk{0.957F, 0.914F, 0.847F, 1.0F};
inline constexpr ImVec4 text_dim_dusk{0.690F, 0.608F, 0.494F, 1.0F};

// Active palette. Reassigned by apply() on device theme change; read-only
// for the rest of the UI.
inline ImVec4 primary = primary_sunset;
inline ImVec4 secondary = secondary_sunset;
inline ImVec4 link = link_sunset;
inline ImVec4 background = background_sunset;
inline ImVec4 surface = surface_sunset;
inline ImVec4 text = text_sunset;
inline ImVec4 text_dim = text_dim_sunset;

[[nodiscard]] constexpr ImVec4 with_alpha(ImVec4 color, float alpha)
{
    return ImVec4{color.x, color.y, color.z, alpha};
}

/// Applies the given mode. Called once after ImGui::CreateContext and again
/// on SDL_EVENT_SYSTEM_THEME_CHANGED. Touches colors only - sizes persist.
inline void apply(mode m) noexcept
{
    if (m == mode::dusk) {
        ImGui::StyleColorsDark();
        primary = primary_dusk;
        secondary = secondary_dusk;
        link = link_dusk;
        background = background_dusk;
        surface = surface_dusk;
        text = text_dusk;
        text_dim = text_dim_dusk;
    } else {
        ImGui::StyleColorsLight();
        primary = primary_sunset;
        secondary = secondary_sunset;
        link = link_sunset;
        background = background_sunset;
        surface = surface_sunset;
        text = text_sunset;
        text_dim = text_dim_sunset;
    }

    ImGuiStyle& style = ImGui::GetStyle();
    style.WindowRounding = 8.0F;
    style.ChildRounding = 8.0F;
    style.FrameRounding = 6.0F;
    style.WindowBorderSize = 0.0F;
    style.ChildBorderSize = 1.0F;
    style.WindowPadding = ImVec2{16.0F, 16.0F};
    style.ItemSpacing = ImVec2{10.0F, 8.0F};

    auto* colors = style.Colors;
    colors[ImGuiCol_WindowBg] = background;
    colors[ImGuiCol_ChildBg] = background;
    colors[ImGuiCol_Border] = surface;
    colors[ImGuiCol_Text] = text;
    colors[ImGuiCol_TextDisabled] = text_dim;
    colors[ImGuiCol_Separator] = surface;
    // Selectable rows report through the Header* slots.
    colors[ImGuiCol_Header] = with_alpha(primary, 0.25F);
    colors[ImGuiCol_HeaderHovered] = with_alpha(secondary, 0.35F);
    colors[ImGuiCol_HeaderActive] = with_alpha(secondary, 0.55F);
}

} // namespace ui::theme
