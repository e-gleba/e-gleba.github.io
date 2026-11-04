/// @file contact_section.hpp
/// @brief "Contact" - intro line + outbound links.

#pragma once

#include "ui/section.hpp"

namespace ui {

class contact_section final : public section {
public:
    [[nodiscard]] std::string_view name() const noexcept override
    {
        return "Contact";
    }

    void render() const override;
};

} // namespace ui
