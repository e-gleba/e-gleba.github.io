/// @file portfolio.hpp
/// @brief Compile-time content model - every string on the page lives here.
///
/// Ported 1:1 from the Astro site (src/data/site.ts, src/data/i18n.ts,
/// src/data/repos.json - English locale). Editing the site means editing
/// this file; no code changes elsewhere. All data is `inline constexpr`, so
/// it lands in .rodata of the wasm binary with zero runtime setup.
///
/// Note: the stock ImGui font covers Latin-1 only, so the copy is ASCII
/// (the Astro site's en-dashes are plain hyphens here). Icons are
/// FontAwesome PUA codepoints (merged into the default font at startup).

#pragma once

#include <array>
#include <cstdint>
#include <span>
#include <string_view>

namespace portfolio {

struct external_link {
    std::string_view label;
    std::string_view url;
    std::uint32_t icon; // FontAwesome PUA codepoint
};

struct stat {
    std::string_view value;
    std::string_view label;
};

struct experience_entry {
    std::string_view period;
    std::string_view title;
    std::string_view company;
    std::string_view description;
    std::span<const std::string_view> tags;
    std::string_view link_label; // empty = no link
    std::string_view link_url;
};

struct project_entry {
    std::string_view name;
    std::string_view description;
    std::string_view language;
    std::string_view url;
    std::int32_t stars;
    std::int32_t forks;
};

struct skill_category {
    std::string_view name;
    std::span<const std::string_view> items;
};

// ---------------------------------------------------------------------------
// identity
// ---------------------------------------------------------------------------

inline constexpr std::string_view owner_name = "Evgeniy Gleba";
inline constexpr std::string_view tagline = "R&D C++ engineer";
inline constexpr std::string_view location = "Minsk";
inline constexpr std::string_view company = "Lesta Games";

inline constexpr std::array stats{
    stat{.value = "3+", .label = "years in production"},
    stat{.value = "30+", .label = "open source repos"},
    stat{.value = "5", .label = "platforms"},
};

// ---------------------------------------------------------------------------
// about
// ---------------------------------------------------------------------------

inline constexpr std::string_view about_p1 =
    "Systems engineer with 3+ years shipping cross-platform C++ in production "
    "game engines. Specialized in performance-critical systems: graphics "
    "pipelines, asset streaming, memory management.";

inline constexpr std::string_view about_p2 =
    "At Lesta Games (Engine Core, Tanks Blitz), I work on engine systems that "
    "power 10M+ active players. My code runs on Linux servers, Android/iOS "
    "devices, and Windows clients - all from a single CMake build tree.";

inline constexpr std::string_view about_p3 =
    "Reverse engineering and game preservation are my long-term passions. "
    "Published open-source tooling for asset extraction and binary analysis. "
    "30+ public repositories spanning systems programming, tooling, and "
    "experimental engines.";

inline constexpr std::string_view about_philosophy =
    "Static analysis over runtime debugging. Compile-time safety over runtime "
    "checks. Simple, boring, reliable code over clever abstractions. Every "
    "line must justify its existence in production.";

inline constexpr std::array<std::string_view, 4> about_impact{
    "Engine systems serving 10M+ players",
    "Cross-platform: Linux/Win/macOS/iOS/Android",
    "Open-source tooling with active community",
    "Sub-millisecond frame time guarantees",
};

// ---------------------------------------------------------------------------
// experience
// ---------------------------------------------------------------------------

inline constexpr std::array<std::string_view, 5> tags_lesta{
    "C++", "CMake", "SDL3", "Tracy", "Wwise"};

inline constexpr std::array<std::string_view, 5> tags_simulation{
    "Godot", "Networking", "Multi-platform", "Real-time", "Team Lead"};

inline constexpr std::array<std::string_view, 4> tags_bsu{
    "C++", "Embedded", "Hardware", "Space"};

inline constexpr std::array<std::string_view, 3> tags_certification{
    "C++20", "Generic Programming", "Performance"};

inline constexpr std::array<std::string_view, 5> tags_modding{
    "Reverse Engineering", "Project Management", "Audio Integration",
    "Monetization", "Community"};

inline constexpr std::array experience{
    experience_entry{
        .period = "2023 - now",
        .title = "C++ Engine Core Engineer",
        .company = "Lesta Games - Engine Core, Tanks Blitz",
        .description =
            "Shipping cross-platform game engine internals. CMake build "
            "systems, Tracy profiling, SDL3 integration, Wwise audio "
            "pipelines. Performance optimization for mobile and desktop.",
        .tags = tags_lesta,
        .link_label = {},
        .link_url = {},
    },
    experience_entry{
        .period = "2023 - 2025",
        .title = "Simulation Developer / Team Lead",
        .company = "Military Contract - ZRK Osa Air Defense",
        .description =
            "Led a student team building a cross-platform simulator in Godot "
            "for military training. Managed 4 developers, set milestones, "
            "reviewed code, coordinated with military stakeholders. Delivered "
            "networked multiplayer between radar, command center, and launch "
            "units with real-time coordination across heterogeneous "
            "platforms.",
        .tags = tags_simulation,
        .link_label = {},
        .link_url = {},
    },
    experience_entry{
        .period = "2021 - 2025",
        .title = "BSU RFCT - Satellite & Aerospace",
        .company = "Belarusian State University",
        .description =
            "Developed thermal sensor parsing models for CubeSat-2 satellite. "
            "Competed in rocket engineering with Moscow State University - "
            "adult league, live launches, drone development.",
        .tags = tags_bsu,
        .link_label = {},
        .link_url = {},
    },
    experience_entry{
        .period = "2023",
        .title = "Advanced C++ Certification",
        .company = "Leonid Chaika Intensive Program",
        .description =
            "Completed intensive C++ & rendering creating crossplatform "
            "engines course. Joined Lesta Games. Focus: modern standards, "
            "generic programming, performance optimization.",
        .tags = tags_certification,
        .link_label = {},
        .link_url = {},
    },
    experience_entry{
        .period = "2018 - 2020",
        .title = "Game Modding & RE / Project Manager",
        .company = "Community Projects",
        .description =
            "Reverse-engineered game binaries for full Russian localization "
            "of World Conqueror 4. Managed translation workflow, coordinated "
            "with voice actors, integrated audio assets. Built monetization "
            "strategy via Patreon and community donations. Video review by "
            "popular YouTuber - 42K+ views. Published open-source extraction "
            "toolkit.",
        .tags = tags_modding,
        .link_label = "Video review",
        .link_url = "https://www.youtube.com/watch?v=fuOPZzfWoCY",
    },
};

// ---------------------------------------------------------------------------
// projects (src/data/repos.json)
// ---------------------------------------------------------------------------

inline constexpr std::array projects{
    project_entry{
        .name = "airstrike3d-tools",
        .description =
            "Toolkit for AirStrike 3D game analysis and APK asset extraction. "
            "Reverse engineering for game preservation.",
        .language = "C",
        .url = "https://github.com/e-gleba/airstrike3d-tools",
        .stars = 17,
        .forks = 2,
    },
    project_entry{
        .name = "cxx-skeleton",
        .description =
            "Production-ready C++ project template with modern CMake and CI.",
        .language = "C++",
        .url = "https://github.com/e-gleba/cxx-skeleton",
        .stars = 7,
        .forks = 1,
    },
    project_entry{
        .name = "euengine",
        .description =
            "3D game engine built on SDL3 with hot reload. Modern C++ "
            "architecture.",
        .language = "C++",
        .url = "https://github.com/e-gleba/euengine",
        .stars = 2,
        .forks = 0,
    },
    project_entry{
        .name = "cmake_template",
        .description =
            "Production C++ template. Android NDK + Linux-to-Win "
            "cross-compile + GMD. CMake Presets, CPack, Docker.",
        .language = "C++",
        .url = "https://github.com/e-gleba/cmake_template",
        .stars = 1,
        .forks = 0,
    },
};

// ---------------------------------------------------------------------------
// skills
// ---------------------------------------------------------------------------

inline constexpr std::array<std::string_view, 4> skills_languages{
    "C++20 / C++23", "C17 / C23", "Python 3", "Bash / PowerShell"};

inline constexpr std::array<std::string_view, 7> skills_systems{
    "CMake", "Linux (ALT, Fedora)", "Git / GitHub Actions", "Docker",
    "Ansible / IaC", "Ninja", "Clang / LLVM / Xcode"};

inline constexpr std::array<std::string_view, 5> skills_engine{
    "SDL 3 (GPU, Input, Audio)", "OpenGL / GLSL", "Tracy Profiler",
    "Wwise Integration & Mgmt", "Hot Reload Systems"};

inline constexpr std::array<std::string_view, 4> skills_mobile{
    "Android SDK / NDK", "iOS / Obj-C++", "Java / Kotlin",
    "Cross-platform Native"};

inline constexpr std::array<std::string_view, 6> skills_reverse{
    "Ghidra", "Memory Analysis", "API Hooking / DLL Inject",
    "Asset Extraction", "Binary Patching", "Sierra OSINT"};

inline constexpr std::array<std::string_view, 6> skills_practices{
    "Static Analysis > Runtime", "C++ Contracts (P2900)",
    "Generic Programming", "constexpr / consteval", "STL / Boost / GSL",
    "Claude Code / AI-Assisted Eng."};

inline constexpr std::array skill_categories{
    skill_category{.name = "Languages", .items = skills_languages},
    skill_category{.name = "Systems & Tooling", .items = skills_systems},
    skill_category{.name = "Engine & Graphics", .items = skills_engine},
    skill_category{.name = "Mobile & Native", .items = skills_mobile},
    skill_category{.name = "Reverse Engineering", .items = skills_reverse},
    skill_category{.name = "Practices", .items = skills_practices},
};

// ---------------------------------------------------------------------------
// contact (icons: FontAwesome 6 PUA codepoints)
// ---------------------------------------------------------------------------

inline constexpr std::string_view contact_text =
    "Open to consulting & collaboration on C++ systems, game engine "
    "architecture, and cross-platform tooling.";

inline constexpr std::array contact_links{
    external_link{.label = "GitHub",
                  .url = "https://github.com/e-gleba",
                  .icon = 0xF09B},
    external_link{.label = "X", .url = "https://x.com/e_gleba", .icon = 0xE61B},
    external_link{
        .label = "Telegram", .url = "https://t.me/egleba", .icon = 0xF2C6},
    external_link{
        .label = "Email", .url = "mailto:i@egleba.ru", .icon = 0xF0E0},
    external_link{
        .label = "VK", .url = "https://vk.ru/e_gleba", .icon = 0xF189},
    external_link{.label = "Steam",
                  .url = "https://steamcommunity.com/id/egleba",
                  .icon = 0xF1B6},
};

} // namespace portfolio
