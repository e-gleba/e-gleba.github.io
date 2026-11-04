/// @file about_section.hpp
/// @brief "About" - bio paragraphs, philosophy, impact list.

#pragma once

#include "ui/section.hpp"

namespace ui {

class about_section final : public section {
public:
    [[nodiscard]] std::string_view name() const noexcept override
    {
        return "About";
    }

    void render() const override;
};

} // namespace ui
