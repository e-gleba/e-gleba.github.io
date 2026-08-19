# WebAssembly deploy target - SDL3 + OpenGL (WebGL2) + Dear ImGui portfolio.
#
# Configured with the Emscripten toolchain (see the `emscripten` preset in
# CMakePresets.json). Output: `portfolio.{html,js,wasm}` - a fully static
# site, deployable to any web server as-is.

add_executable(
    portfolio
    main.cpp
    app/application.cpp
    ui/widgets.cpp
    ui/about_section.cpp
    ui/experience_section.cpp
    ui/projects_section.cpp
    ui/skills_section.cpp
    ui/contact_section.cpp
    ui/portfolio_ui.cpp)

set_target_properties(portfolio PROPERTIES SUFFIX ".html")

target_compile_features(portfolio PRIVATE cxx_std_23)

# Includes are written relative to this dir ("app/...", "ui/...", "data/...").
target_include_directories(portfolio PRIVATE "${CMAKE_CURRENT_LIST_DIR}")

target_compile_options(portfolio PRIVATE -Wall -Wextra -Wpedantic)

target_link_libraries(
    portfolio
    PRIVATE SDL3::SDL3
            imgui::sdl3_opengl3
            implot::implot)

target_link_options(
    portfolio
    PRIVATE "SHELL:--shell-file ${CMAKE_CURRENT_LIST_DIR}/shell.html"
            -sUSE_WEBGL2=1
            -sMIN_WEBGL_VERSION=2
            -sMAX_WEBGL_VERSION=2
            -sFULL_ES3=1
            -sALLOW_MEMORY_GROWTH=1
            # extra runtime checks in debug builds, zero release cost
            "$<$<CONFIG:Debug>:-sASSERTIONS=2>"
            "$<$<CONFIG:Debug>:-sGL_ASSERTIONS=1>")

# Icon fonts ship inside the wasm FS: <file on host>@<path in wasm FS>.
if(EMSCRIPTEN)
    target_link_options(
        portfolio
        PRIVATE
            "SHELL:--embed-file ${fontawesome_SOURCE_DIR}/webfonts/fa-solid-900.ttf@/fonts/fa-solid-900.ttf"
            "SHELL:--embed-file ${fontawesome_SOURCE_DIR}/webfonts/fa-brands-400.ttf@/fonts/fa-brands-400.ttf"
    )
endif()
