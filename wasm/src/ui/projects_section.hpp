/// @file projects_section.hpp
/// @brief "Projects" - open-source repos with links and star counts.

#pragma once

#include "ui/section.hpp"

namespace ui {

class projects_section final : public section {
public:
    [[nodiscard]] std::string_view name() const noexcept override
    {
        return "Projects";
    }

    void render() const override;
};

} // namespace ui
