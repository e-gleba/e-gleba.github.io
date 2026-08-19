cmake_minimum_required(VERSION 3.31)

project(
    wasm_portfolio
    VERSION 1.0.0
    DESCRIPTION "Evgeniy Gleba - portfolio. C++23 + Dear ImGui on WebAssembly"
    HOMEPAGE_URL "https://github.com/e-gleba/e-gleba.github.io"
    LANGUAGES C CXX)

# CMAKE_CURRENT_LIST_DIR so the file stays correct if consumed as a
# subdirectory of a larger build (Professional CMake §8.3).
list(APPEND CMAKE_PREFIX_PATH "${CMAKE_CURRENT_LIST_DIR}/cmake")

# Cross-compiling restricts find_package() to CMAKE_FIND_ROOT_PATH /
# CMAKE_SYSROOT - our local cmake/ dir must be added explicitly.
if(CMAKE_CROSSCOMPILING)
    list(APPEND CMAKE_FIND_ROOT_PATH "${CMAKE_CURRENT_LIST_DIR}/cmake")
endif()

# cpm bootstrap first: it extends CMAKE_PREFIX_PATH with cmake/cpm, where the
# per-package <name>-config.cmake files consumed below live.
find_package(cpm CONFIG REQUIRED)

find_package(sdl3 CONFIG REQUIRED) # before imgui: backend links SDL3::SDL3
find_package(imgui CONFIG REQUIRED)

add_subdirectory(src)
