#include "ui/widgets.hpp"

#include "ui/theme.hpp"

#include <SDL3/SDL_misc.h>

#include <imgui.h>

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

/// Per-row state for the nav_item fold animation, keyed by the row's ImGui
/// ID. Static storage: nav rows are few and live for the whole run, and the
/// wasm build is single-threaded.
struct nav_fold {
    float t = 0.0F;   // eased open amount, [0,1]
    bool hot = false; // hovered as of the previous frame
};

[[nodiscard]] std::unordered_map<ImGuiID, nav_fold>& nav_folds()
{
    static std::unordered_map<ImGuiID, nav_fold> states;
    return states;
}

} // namespace

// All string_views passed here point at string literals from
// data/portfolio.hpp, so data() is always null-terminated and safe to hand
// to ImGui's const char* API.

void hyperlink(std::string_view label, std::string_view url)
{
    ImGui::PushStyleColor(ImGuiCol_Text, theme::link);
    const bool clicked = ImGui::Selectable(label.data());
    ImGui::PopStyleColor();

    if (ImGui::IsItemHovered()) {
        ImGui::SetMouseCursor(ImGuiMouseCursor_Hand);
        ImGui::SetTooltip("%s", url.data());
    }
    if (clicked) {
        SDL_OpenURL(url.data()); // new tab on Emscripten
    }
}

bool nav_item(std::string_view label, bool selected)
{
    // At rest the row keeps a gutter for the `>` marker. On hover (and when
    // selected) the row folds open: the label eases `fold_shift` px to the
    // right while the marker fades in and slides left into the gutter.
    constexpr float marker_indent = 16.0F;
    constexpr float fold_shift = 6.0F;
    constexpr float marker_slide = 5.0F;
    constexpr float fold_speed = 14.0F; // 1/s - higher = snappier

    nav_fold& fold = nav_folds()[ImGui::GetID(label.data())];

    // Exponential ease toward the target - frame-rate independent. The
    // offset must be known before the row is drawn, so the hover state is
    // read from the previous frame (one frame of lag is invisible).
    const float target = (fold.hot || selected) ? 1.0F : 0.0F;
    fold.t += (target - fold.t)
              * (1.0F - std::exp(-fold_speed * ImGui::GetIO().DeltaTime));
    if (target == 0.0F && fold.t < 0.001F) {
        fold.t = 0.0F; // settle exactly; skips the marker draw below
    }

    const ImVec2 gutter = ImGui::GetCursorScreenPos();
    ImGui::SetCursorPosX(ImGui::GetCursorPosX() + marker_indent
                         + fold.t * fold_shift);

    const bool clicked = ImGui::Selectable(label.data(), selected);
    fold.hot = ImGui::IsItemHovered();

    if (fold.t > 0.0F) {
        const float marker_x =
            gutter.x + 2.0F + (1.0F - fold.t) * marker_slide;
        ImGui::GetWindowDrawList()->AddText(
            ImGui::GetFont(), ImGui::GetFontSize(),
            ImVec2{marker_x, gutter.y},
            ImGui::GetColorU32(theme::with_alpha(theme::secondary, fold.t)),
            ">");
    }
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
