/// @file theme.hpp
/// @brief Compile-time palette + one-time ImGui style setup.
///
/// Colors are lifted from the Astro site: accent pink/orange/purple from
/// src/data/site.ts, page background from the emscripten shell (#0b0e14).

#pragma once

#include <imgui.h>

namespace ui::theme {

inline constexpr ImVec4 pink{1.0F, 0.42F, 0.62F, 1.0F};   // #FF6B9D
inline constexpr ImVec4 orange{1.0F, 0.55F, 0.26F, 1.0F};  // #FF8C42
inline constexpr ImVec4 purple{0.78F, 0.57F, 0.92F, 1.0F}; // #C792EA
inline constexpr ImVec4 background{0.043F, 0.055F, 0.078F,
                                   1.0F};                  // #0B0E14
inline constexpr ImVec4 surface{0.09F, 0.10F, 0.13F, 1.0F};
inline constexpr ImVec4 text{0.92F, 0.93F, 0.95F, 1.0F};
inline constexpr ImVec4 text_dim{0.55F, 0.58F, 0.64F, 1.0F};

[[nodiscard]] constexpr ImVec4 with_alpha(ImVec4 color, float alpha)
{
    return ImVec4{color.x, color.y, color.z, alpha};
}

/// One-time style setup, called right after ImGui::CreateContext.
inline void apply() noexcept
{
    ImGui::StyleColorsDark();

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
