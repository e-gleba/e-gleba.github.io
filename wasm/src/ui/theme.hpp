/// @file theme.hpp
/// @brief Dark/light palettes + one-time ImGui style setup.
///
/// Accents come from the Astro site (pink #FF6B9D, orange #FF8C42, purple
/// #C792EA over #0B0E14); the light palette keeps the same hues darkened
/// for contrast on white. The active palette follows the device theme
/// (SDL_GetSystemTheme + SDL_EVENT_SYSTEM_THEME_CHANGED) and can also be
/// flipped manually with toggle() - no JS glue anywhere.
///
/// Geometry (padding, spacing, rounding) is set ONCE by setup_geometry(),
/// before the global ScaleAllSizes at startup. apply() is colors-only, so
/// a theme switch can never reset scaled sizes and shift the layout.

#pragma once

#include <imgui.h>

#include <cstdint>

namespace ui::theme {

enum class mode : std::uint8_t { light, dark };

// -- dark (site accents) -----------------------------------------------------
inline constexpr ImVec4 primary_dark{1.0F, 0.42F, 0.62F, 1.0F};   // #FF6B9D
inline constexpr ImVec4 secondary_dark{1.0F, 0.55F, 0.26F, 1.0F};  // #FF8C42
inline constexpr ImVec4 link_dark{0.78F, 0.57F, 0.92F, 1.0F};      // #C792EA
inline constexpr ImVec4 background_dark{0.043F, 0.055F, 0.078F,
                                        1.0F};                     // #0B0E14
inline constexpr ImVec4 surface_dark{0.09F, 0.10F, 0.13F, 1.0F};
inline constexpr ImVec4 text_dark{0.92F, 0.93F, 0.95F, 1.0F};
inline constexpr ImVec4 text_dim_dark{0.55F, 0.58F, 0.64F, 1.0F};

// -- light (same hues, darkened for contrast) --------------------------------
inline constexpr ImVec4 primary_light{0.75F, 0.20F, 0.40F, 1.0F};
inline constexpr ImVec4 secondary_light{0.78F, 0.36F, 0.08F, 1.0F};
inline constexpr ImVec4 link_light{0.50F, 0.30F, 0.70F, 1.0F};
inline constexpr ImVec4 background_light{0.96F, 0.96F, 0.97F, 1.0F};
inline constexpr ImVec4 surface_light{0.84F, 0.85F, 0.88F, 1.0F};
inline constexpr ImVec4 text_light{0.12F, 0.12F, 0.15F, 1.0F};
inline constexpr ImVec4 text_dim_light{0.42F, 0.44F, 0.50F, 1.0F};

// Active palette + mode. Reassigned by apply(); read-only for the rest of
// the UI.
inline mode active_mode = mode::light;
inline ImVec4 primary = primary_light;
inline ImVec4 secondary = secondary_light;
inline ImVec4 link = link_light;
inline ImVec4 background = background_light;
inline ImVec4 surface = surface_light;
inline ImVec4 text = text_light;
inline ImVec4 text_dim = text_dim_light;

[[nodiscard]] constexpr ImVec4 with_alpha(ImVec4 color, float alpha)
{
    return ImVec4{color.x, color.y, color.z, alpha};
}

/// One-time style geometry: rounding, borders, padding, spacing. Call once
/// at startup, BEFORE ScaleAllSizes - anything set here gets scaled, and
/// apply() below never touches it again.
inline void setup_geometry() noexcept
{
    ImGuiStyle& style = ImGui::GetStyle();
    style.WindowRounding = 8.0F;
    style.ChildRounding = 8.0F;
    style.FrameRounding = 6.0F;
    style.WindowBorderSize = 0.0F;
    style.ChildBorderSize = 1.0F;
    style.WindowPadding = ImVec2{16.0F, 16.0F};
    style.ItemSpacing = ImVec2{10.0F, 8.0F};
}

/// Applies the given mode. Called once after ImGui::CreateContext, on
/// SDL_EVENT_SYSTEM_THEME_CHANGED, and on manual toggle. Colors only -
/// sizes persist.
inline void apply(mode m) noexcept
{
    active_mode = m;
    if (m == mode::dark) {
        ImGui::StyleColorsDark();
        primary = primary_dark;
        secondary = secondary_dark;
        link = link_dark;
        background = background_dark;
        surface = surface_dark;
        text = text_dark;
        text_dim = text_dim_dark;
    } else {
        ImGui::StyleColorsLight();
        primary = primary_light;
        secondary = secondary_light;
        link = link_light;
        background = background_light;
        surface = surface_light;
        text = text_light;
        text_dim = text_dim_light;
    }

    auto* colors = ImGui::GetStyle().Colors;
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

/// Flips light <-> dark (manual override; the next device theme change
/// re-applies the device preference).
inline void toggle() noexcept
{
    apply(active_mode == mode::dark ? mode::dark : mode::light);
}

} // namespace ui::theme
