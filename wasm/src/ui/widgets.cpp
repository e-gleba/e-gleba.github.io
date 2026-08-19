#include "ui/widgets.hpp"

#include "ui/theme.hpp"

#include <SDL3/SDL_misc.h>

#include <imgui.h>

#include <algorithm>
#include <array>
#include <cfloat>
#include <cmath>
#include <unordered_map>

namespace ui::widgets {

namespace {

// FontAwesome solid glyphs for the theme toggle.
inline constexpr std::uint32_t icon_sun = 0xF185;
inline constexpr std::uint32_t icon_moon = 0xF186;

// Toggle glyph is drawn 2.5x the base font size; the invisible click target
// adds a margin around the glyph.
constexpr float toggle_icon_scale = 2.5F;
constexpr float toggle_hit_margin = 1.4F;

/// Encodes a Private Use Area codepoint (U+E000-U+F2FF - exactly 3 UTF-8
/// bytes) into a null-terminated string.
[[nodiscard]] std::array<char, 4> encode_pua(std::uint32_t codepoint) noexcept
{
    return std::array<char, 4>{
        static_cast<char>(0xE0U | (codepoint >> 12U)),
        static_cast<char>(0x80U | ((codepoint >> 6U) & 0x3FU)),
        static_cast<char>(0x80U | (codepoint & 0x3FU)),
        '\0'};
}

// -- fold-open hover animation (nav rows, links) ----------------------------

// Geometry/timing shared by every folding row.
constexpr float fold_shift = 14.0F; // label travel on fold-open (arrow slot)
constexpr float fold_speed = 14.0F; // 1/s - higher = snappier

/// Per-row animation state, keyed by the row's ImGui ID. Static storage:
/// rows are few and live for the whole run; the wasm build is
/// single-threaded.
struct fold_state {
    float t = 0.0F;   // eased open amount, [0,1]
    bool hot = false; // hovered as of the previous frame
};

[[nodiscard]] std::unordered_map<ImGuiID, fold_state>& fold_states()
{
    static std::unordered_map<ImGuiID, fold_state> states;
    return states;
}

/// Advances the row's animation and eases the cursor right for a folding
/// row. Returns the eased amount for fold_end(). Hover is read from the
/// previous frame because the offset must be known before the row is
/// drawn - one frame of lag is invisible.
[[nodiscard]] float fold_begin(std::string_view label, bool selected)
{
    fold_state& fold = fold_states()[ImGui::GetID(label.data())];

    // Exponential ease toward the target - frame-rate independent.
    const float target = (fold.hot || selected) ? 1.0F : 0.0F;
    fold.t += (target - fold.t)
              * (1.0F - std::exp(-fold_speed * ImGui::GetIO().DeltaTime));
    if (target == 0.0F && fold.t < 0.001F) {
        fold.t = 0.0F; // settle exactly; skips the arrow draw
    }

    ImGui::SetCursorPosX(ImGui::GetCursorPosX() + fold.t * fold_shift);
    return fold.t;
}

/// Fades the `>` arrow in at the row's RESTING left edge (the label eased
/// right past it) and records the row's hover state for the next frame.
/// Nothing is ever drawn left of the row, so the arrow can neither slide
/// under a left neighbor nor be clipped by a parent gutter. Call right
/// after the row widget.
void fold_end(std::string_view label, float t, bool hovered)
{
    fold_states()[ImGui::GetID(label.data())].hot = hovered;

    if (t <= 0.0F) {
        return;
    }
    const ImVec2 row = ImGui::GetItemRectMin();
    // The fade leads the shift, so the arrow is mostly transparent while
    // the label is still passing through its slot.
    const float alpha = std::min(1.0F, t * 2.0F);
    ImGui::GetWindowDrawList()->AddText(
        ImGui::GetFont(), ImGui::GetFontSize(),
        ImVec2{row.x - t * fold_shift, row.y},
        ImGui::GetColorU32(theme::with_alpha(theme::secondary, alpha)), ">");
}

} // namespace

// All string_views passed here point at string literals from
// data/portfolio.hpp, so data() is always null-terminated and safe to hand
// to ImGui's const char* API.

void hyperlink(std::string_view label, std::string_view url)
{
    const float t = fold_begin(label, false);

    ImGui::PushStyleColor(ImGuiCol_Text, theme::link);
    const bool clicked = ImGui::Selectable(label.data());
    ImGui::PopStyleColor();

    const bool hovered = ImGui::IsItemHovered();
    fold_end(label, t, hovered);

    if (hovered) {
        ImGui::SetMouseCursor(ImGuiMouseCursor_Hand);
        ImGui::SetTooltip("%s", url.data());
    }
    if (clicked) {
        SDL_OpenURL(url.data()); // new tab on Emscripten
    }
}

bool nav_item(std::string_view label, bool selected)
{
    const float t = fold_begin(label, selected);
    const bool clicked = ImGui::Selectable(label.data(), selected);
    fold_end(label, t, ImGui::IsItemHovered());
    return clicked;
}

void icon(std::uint32_t codepoint, const ImVec4& color)
{
    const auto utf8 = encode_pua(codepoint);
    ImGui::TextColored(color, "%s", utf8.data());
}

float theme_toggle_size() noexcept
{
    // Clickable square: the glyph plus a comfortable margin on every side.
    return ImGui::GetFontSize() * toggle_icon_scale * toggle_hit_margin;
}

bool theme_toggle()
{
    const auto utf8 = encode_pua(theme::active_mode == theme::mode::light
                                     ? icon_sun
                                     : icon_moon);
    const float side = theme_toggle_size();

    // Icon-only ghost button: an invisible button provides the click/hover
    // target. At rest only the glyph is visible; hover adds a subtle
    // rounded wash and tints the glyph with the accent color.
    const bool clicked =
        ImGui::InvisibleButton("##theme_toggle", ImVec2{side, side});
    const bool hovered = ImGui::IsItemHovered();

    ImDrawList* draw_list = ImGui::GetWindowDrawList();
    const ImVec2 rect_min = ImGui::GetItemRectMin();
    const ImVec2 rect_max = ImGui::GetItemRectMax();

    if (hovered) {
        draw_list->AddRectFilled(
            rect_min, rect_max,
            ImGui::GetColorU32(theme::with_alpha(theme::surface, 0.6F)),
            ImGui::GetStyle().FrameRounding);
    }

    ImGui::SetWindowFontScale(toggle_icon_scale);
    ImFont* font = ImGui::GetFont();
    const float font_size = ImGui::GetFontSize();
    const ImVec2 glyph =
        font->CalcTextSizeA(font_size, FLT_MAX, 0.0F, utf8.data());

    // Icon glyphs sit on the text baseline, so their ink rides high in the
    // em box - drop the centered box slightly to optically center the icon.
    constexpr float glyph_drop = 0.10F; // fraction of the glyph line height

    // Rest: dim. Hover: accent. Held: primary.
    const ImVec4 tint = ImGui::IsItemActive() ? theme::primary
                        : hovered             ? theme::secondary
                                              : theme::text_dim;
    draw_list->AddText(
        font, font_size,
        ImVec2{rect_min.x + (rect_max.x - rect_min.x - glyph.x) * 0.5F,
               rect_min.y + (rect_max.y - rect_min.y - glyph.y) * 0.5F
                   + font_size * glyph_drop},
        ImGui::GetColorU32(tint), utf8.data());
    ImGui::SetWindowFontScale(1.0F);

    if (hovered) {
        ImGui::SetMouseCursor(ImGuiMouseCursor_Hand);
        ImGui::SetTooltip("toggle theme");
    }
    return clicked;
}

void tag_list(std::span<const std::string_view> tags)
{
    const float right_edge =
        ImGui::GetCursorPosX() + ImGui::GetContentRegionAvail().x;
    const float spacing = ImGui::GetStyle().ItemSpacing.x;

    bool first = true;
    for (const std::string_view tag : tags) {
        if (!first) {
            const float item_width = ImGui::CalcTextSize(tag.data()).x;
            if (ImGui::GetCursorPosX() + spacing + item_width <= right_edge) {
                ImGui::SameLine();
            }
        }
        first = false;
        ImGui::TextColored(theme::secondary, "%s", tag.data());
    }
}

void header(std::string_view title)
{
    ImGui::SetWindowFontScale(1.5F);
    ImGui::TextDisabled("~/");
    ImGui::SameLine(0.0F, 0.0F);
    ImGui::TextColored(theme::primary, "%s", title.data());
    ImGui::SetWindowFontScale(1.0F);
    ImGui::Separator();
    ImGui::Spacing();
}

void paragraph(std::string_view text)
{
    ImGui::PushTextWrapPos(0.0F); // 0 = wrap at the window edge
    ImGui::TextUnformatted(text.data(), text.data() + text.size());
    ImGui::PopTextWrapPos();
    ImGui::Spacing();
}

} // namespace ui::widgets
