/// @file theme.hpp
/// @brief Compile-time palettes + one-time ImGui style setup.
///
/// Dark accents are lifted from the Astro site (src/data/site.ts) over the
/// shell background (#0b0e14); the light palette keeps the same hues,
/// darkened for contrast. The active palette is switched with the device
/// theme (SDL_GetSystemTheme / SDL_EVENT_SYSTEM_THEME_CHANGED) - no custom
/// JS glue.

#pragma once

#include <imgui.h>

#include <cstdint>

namespace ui::theme {

enum class mode : std::uint8_t { dark, light };

// -- dark palette (site accents) --------------------------------------------
inline constexpr ImVec4 pink_dark{1.0F, 0.42F, 0.62F, 1.0F};   // #FF6B9D
inline constexpr ImVec4 orange_dark{1.0F, 0.55F, 0.26F, 1.0F};  // #FF8C42
inline constexpr ImVec4 purple_dark{0.78F, 0.57F, 0.92F, 1.0F}; // #C792EA
inline constexpr ImVec4 background_dark{0.043F, 0.055F, 0.078F,
                                        1.0F};                  // #0B0E14
inline constexpr ImVec4 surface_dark{0.09F, 0.10F, 0.13F, 1.0F};
inline constexpr ImVec4 text_dark{0.92F, 0.93F, 0.95F, 1.0F};
inline constexpr ImVec4 text_dim_dark{0.55F, 0.58F, 0.64F, 1.0F};

// -- light palette (same hues, darkened for contrast) -----------------------
inline constexpr ImVec4 pink_light{0.75F, 0.20F, 0.40F, 1.0F};
inline constexpr ImVec4 orange_light{0.78F, 0.36F, 0.08F, 1.0F};
inline constexpr ImVec4 purple_light{0.50F, 0.30F, 0.70F, 1.0F};
inline constexpr ImVec4 background_light{0.96F, 0.96F, 0.97F, 1.0F};
inline constexpr ImVec4 surface_light{0.84F, 0.85F, 0.88F, 1.0F};
inline constexpr ImVec4 text_light{0.12F, 0.12F, 0.15F, 1.0F};
inline constexpr ImVec4 text_dim_light{0.42F, 0.44F, 0.50F, 1.0F};

// Active palette. Reassigned by apply() on device theme change; read-only
// for the rest of the UI.
inline ImVec4 pink = pink_dark;
inline ImVec4 orange = orange_dark;
inline ImVec4 purple = purple_dark;
inline ImVec4 background = background_dark;
inline ImVec4 surface = surface_dark;
inline ImVec4 text = text_dark;
inline ImVec4 text_dim = text_dim_dark;

[[nodiscard]] constexpr ImVec4 with_alpha(ImVec4 color, float alpha)
{
    return ImVec4{color.x, color.y, color.z, alpha};
}

/// Applies the given mode. Called once after ImGui::CreateContext and again
/// on SDL_EVENT_SYSTEM_THEME_CHANGED. Touches colors only - sizes persist.
inline void apply(mode m) noexcept
{
    if (m == mode::dark) {
        ImGui::StyleColorsDark();
        pink = pink_dark;
        orange = orange_dark;
        purple = purple_dark;
        background = background_dark;
        surface = surface_dark;
        text = text_dark;
        text_dim = text_dim_dark;
    } else {
        ImGui::StyleColorsLight();
        pink = pink_light;
        orange = orange_light;
        purple = purple_light;
        background = background_light;
        surface = surface_light;
        text = text_light;
        text_dim = text_dim_light;
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
    colors[ImGuiCol_Header] = with_alpha(pink, 0.25F);
    colors[ImGuiCol_HeaderHovered] = with_alpha(orange, 0.35F);
    colors[ImGuiCol_HeaderActive] = with_alpha(orange, 0.55F);
}

} // namespace ui::theme
