# FontAwesome Free - icon font only (webfonts/*.ttf). No build system, no
# targets: the TTFs are embedded into the wasm FS at link time (see
# src/CMakeLists.txt --embed-file flags) and merged into the default ImGui
# font in app/application.cpp.
cpmaddpackage(
    NAME
    fontawesome
    VERSION
    6.5.2
    GITHUB_REPOSITORY
    FortAwesome/Font-Awesome
    GIT_TAG
    6.5.2
    GIT_SHALLOW
    ON
    EXCLUDE_FROM_ALL
    ON
    DOWNLOAD_ONLY
    TRUE)
