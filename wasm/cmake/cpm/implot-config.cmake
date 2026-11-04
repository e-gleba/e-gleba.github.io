cpmaddpackage(
    NAME
    implot
    VERSION
    1.0
    GITHUB_REPOSITORY
    epezent/implot
    GIT_TAG
    v1.0
    GIT_SHALLOW
    ON
    EXCLUDE_FROM_ALL
    ON
    SYSTEM
    ON
    DOWNLOAD_ONLY
    TRUE)

# Idempotent: find_package(implot) may be reached from several directory
# scopes, but the library below may only be defined once.
include_guard(GLOBAL)

# implot ships no build system of its own, so the library is defined here
# (demo translation unit excluded - not linked anywhere).
add_library(implot STATIC EXCLUDE_FROM_ALL
            ${implot_SOURCE_DIR}/implot.cpp
            ${implot_SOURCE_DIR}/implot_items.cpp)
add_library(implot::implot ALIAS implot)
target_include_directories(
    implot SYSTEM
    PUBLIC $<BUILD_INTERFACE:${implot_SOURCE_DIR}>)
target_compile_features(implot PUBLIC cxx_std_23)

# PUBLIC: implot.h includes imgui.h, consumers need both include dirs.
target_link_libraries(implot PUBLIC imgui::imgui)
