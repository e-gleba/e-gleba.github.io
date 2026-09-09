# SDL3: windowing, events, OpenGL context creation only.
# Static-only - Emscripten has no dynamic linking.

cpmaddpackage(
    NAME
    SDL3
    GITHUB_REPOSITORY
    libsdl-org/SDL
    VERSION
    3.4.4
    GIT_TAG
    release-3.4.4
    GIT_SHALLOW
    ON
    GIT_PROGRESS
    ON
    EXCLUDE_FROM_ALL
    TRUE
    SYSTEM
    TRUE
    OPTIONS
    # ---- library type ----
    "SDL_STATIC ON"
    "SDL_SHARED OFF"
    # ---- core subsystems ----
    "SDL_AUDIO OFF"
    "SDL_VIDEO ON"
    "SDL_GPU OFF"
    "SDL_RENDER OFF"
    "SDL_CAMERA OFF"
    "SDL_JOYSTICK OFF"
    "SDL_HAPTIC OFF"
    "SDL_HIDAPI OFF"
    "SDL_POWER OFF"
    "SDL_SENSOR OFF"
    # ---- context APIs ----
    "SDL_OPENGL ON"
    "SDL_OPENGLES ON"
    # ---- tests / examples / install ----
    "SDL_TESTS OFF"
    "SDL_TEST_LIBRARY OFF"
    "SDL_EXAMPLES OFF"
    "SDL_INSTALL OFF"
    "SDL_INSTALL_TESTS OFF"
    "SDL_DISABLE_INSTALL_DOCS ON")

# Normalise to the standard imported target name expected by downstreams.
if(NOT TARGET SDL3::SDL3)
    if(TARGET SDL3-static)
        add_library(SDL3::SDL3 ALIAS SDL3-static)
    elseif(TARGET SDL3-shared)
        add_library(SDL3::SDL3 ALIAS SDL3-shared)
    else()
        message(
            FATAL_ERROR
                "SDL3 was fetched but no linkable target exists. "
                "Expected one of: SDL3::SDL3, SDL3-shared, SDL3-static.")
    endif()
endif()
