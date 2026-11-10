/// @file skills_section.hpp
/// @brief "Skills" - grouped tag clouds.

#pragma once

#include "ui/section.hpp"

namespace ui {

class skills_section final : public section {
public:
    [[nodiscard]] std::string_view name() const noexcept override
    {
        return "Skills";
    }

    void render() const override;
};

} // namespace ui
