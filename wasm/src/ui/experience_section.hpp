/// @file experience_section.hpp
/// @brief "Experience" - timeline of roles with tag lists.

#pragma once

#include "ui/section.hpp"

namespace ui {

class experience_section final : public section {
public:
    [[nodiscard]] std::string_view name() const noexcept override
    {
        return "Experience";
    }

    void render() const override;
};

} // namespace ui
