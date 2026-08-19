#include "ui/widgets.hpp"

#include <SDL3/SDL_misc.h>

#include <imgui.h>

#include <algorithm>
#include <cmath>
#include <cstdio>
#include <string_view>
#include <unordered_map>

#include "ui/theme.hpp"

namespace ui
{

namespace
{

// FontAwesome glyphs as UTF-8 string literals (private use area, U+F000+).
constexpr std::string_view icon_sun = "\xef\x86\x85"; // f185
constexpr std::string_view icon_moon = "\xef\x86\x86"; // f186

constexpr float toggle_icon_scale = 2.5F; // glyph size vs. base font
constexpr float toggle_hit_margin = 1.4F; // click target vs. glyph size

// Fold-open animation for nav rows: the label eases right by one arrow slot
// while a '>' fades in at the spot it vacated. Nothing is ever drawn left of
// the row's resting position - no gutter to clip, no marker travel.
constexpr float fold_shift = 14.0F; // px of label travel = one arrow slot
constexpr float fold_speed = 14.0F; // exponential ease rate, higher = snappier

struct nav_fold
{
    float t = 0.0F;
    bool hot = false; // hovered on the previous frame
};

// Animation state per nav row, keyed by ImGui ID. Static map: the map itself
// is never rehashed away, and references into it stay valid across frames.
auto nav_folds() -> std::unordered_map<ImGuiID, nav_fold>&
{
    static std::unordered_map<ImGuiID, nav_fold> folds;
    return folds;
}

// Advances the fold animation, indents the row (label shift), returns t.
// Hover is read from the previous frame: the cursor offset must be set before
// Selectable() runs, so this frame's hover state is not knowable yet - one
// frame of lag on hover-start is invisible at 60 fps.
auto fold_begin(const std::string_view label, const bool selected) -> float
{
    nav_fold& fold = nav_folds()[ImGui::GetID(label.data())];

    const float target = (fold.hot || selected) ? 1.0F : 0.0F;
    fold.t += (target - fold.t)
              * (1.0F - std::exp(-fold_speed * ImGui::GetIO().DeltaTime));

    ImGui::SetCursorPosX(ImGui::GetCursorPosX() + fold.t * fold_shift);
    return fold.t;
}

// Draws the '>' marker (faded, at the vacated slot) and records hover for
// next frame. Call right after Selectable().
void fold_end(const std::string_view label, const float t,
              const bool hovered)
{
    if (t > 0.001F)
    {
        // Fade leads the shift: the marker stays mostly transparent while the
        // label is still passing through its slot, so they never overlap.
        const float alpha = std::min(1.0F, t * 2.0F);

        // The '>' glyph is short and sits on the baseline, so centering the
        // full line height would leave its ink in the upper half of the row.
        // Center the glyph's own ink box against the row's actual center.
        ImFont* const font = ImGui::GetFont();
        const ImVec2 glyph = font->CalcTextSizeA(
            ImGui::GetFontSize(), std::numeric_limits<float>::max(), 0.0F,
            ">");
        const ImVec2 row_min = ImGui::GetItemRectMin();
        const float row_height = ImGui::GetItemRectSize().y;
        const ImVec2 pos{row_min.x - t * fold_shift,
                         row_min.y + (row_height - glyph.y) * 0.5F};
        const ImU32 color = ImGui::ColorConvertFloat4ToU32(
            theme::with_alpha(theme::secondary, alpha));
        ImGui::GetWindowDrawList()->AddText(pos, color, ">");
    }

    nav_folds()[ImGui::GetID(label.data())].hot = hovered;
}

} // namespace

void nav_item(const std::string_view label, bool& selected)
{
    const float t = fold_begin(label, selected);

    if (ImGui::Selectable(label.data(), selected))
        selected = true;

    fold_end(label, t, ImGui::IsItemHovered());
}

void hyperlink(const std::string_view label, const std::string_view url)
{
    ImGui::PushStyleColor(ImGuiCol_Text, theme::secondary);
    ImGui::Selectable(label.data(), false,
                      ImGuiSelectableFlags_DontClosePopups);
    ImGui::PopStyleColor();

    if (ImGui::IsItemHovered())
    {
        ImGui::SetMouseCursor(ImGuiMouseCursor_Hand);
        ImGui::SetTooltip("%s", url.data());
    }
    if (ImGui::IsItemClicked(ImGuiMouseButton_Left))
        SDL_OpenURL(url.data());
}

void theme_toggle()
{
    ImGui::PushID("theme_toggle");

    const std::string_view utf8 =
        theme::active_mode == theme::mode::dark ? icon_sun : icon_moon;

    ImFont* const font = ImGui::GetFont();
    const float font_size = ImGui::GetFontSize() * toggle_icon_scale;
    const ImVec2 glyph =
        font->CalcTextSizeA(font_size, std::numeric_limits<float>::max(), 0.0F,
                            utf8.data());

    // Click target is the glyph plus a margin on every side: comfortable to
    // hit while staying visually frameless.
    const ImVec2 hit_size{glyph.x * toggle_hit_margin,
                          glyph.y * toggle_hit_margin};
    const ImVec2 rect_min = ImGui::GetCursorScreenPos();

    // No visible frame: the button is a pure click/hover target, all feedback
    // is drawn by hand below.
    ImGui::InvisibleButton("##toggle", hit_size);
    const bool hovered = ImGui::IsItemHovered();
    const bool held = ImGui::IsItemActive();

    if (ImGui::IsItemClicked(ImGuiMouseButton_Left))
        theme::toggle();
    if (hovered)
    {
        ImGui::SetMouseCursor(ImGuiMouseCursor_Hand);
        ImGui::SetTooltip("switch to %s theme",
                          theme::active_mode == theme::mode::dark ? "light"
                                                                  : "dark");
    }

    ImDrawList* const draw = ImGui::GetWindowDrawList();

    // Ghost button: a soft rounded wash appears on hover, nothing at rest.
    if (hovered)
    {
        const ImVec2 rect_max{rect_min.x + hit_size.x,
                              rect_min.y + hit_size.y};
        const ImU32 wash = ImGui::ColorConvertFloat4ToU32(
            theme::with_alpha(theme::surface, 0.6F));
        draw->AddRectFilled(rect_min, rect_max, wash,
                            ImGui::GetStyle().FrameRounding);
    }

    // Icon glyphs sit on the text baseline, so their ink rides high in the
    // em box - drop the centered box slightly to optically center the icon.
    constexpr float glyph_drop = 0.10F; // fraction of the glyph line height
    const ImVec2 pos{rect_min.x + (hit_size.x - glyph.x) * 0.5F,
                     rect_min.y + (hit_size.y - glyph.y) * 0.5F
                         + font_size * glyph_drop};
    const ImVec4 tint = held      ? theme::primary
                        : hovered ? theme::secondary
                                  : theme::text_dim;
    draw->AddText(font, font_size, pos, ImGui::ColorConvertFloat4ToU32(tint),
                  utf8.data());

    ImGui::PopID();
}

} // namespace ui
