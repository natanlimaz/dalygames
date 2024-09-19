import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Header } from "@/components/header";

describe("Header component", () => {

    beforeEach(() => {
        cleanup();
    })

    it("should render the header with the logo", () => {
        render(<Header />);

        const logoImage = screen.getByRole("img", { name: "Logo do site dalygames"});
        expect(logoImage).toBeInTheDocument();
    });

    it("should render navigation links", () => {
        render(<Header />);

        const gamesLink = screen.getByRole("link", { name: "Games" });
        const profileLink = screen.getByRole("link", { name: "Perfil" });
        const gamepadIconLink = screen.getByTestId("gamepad-icon");

        expect(gamesLink).toBeInTheDocument();
        expect(profileLink).toBeInTheDocument();
        expect(gamepadIconLink).toBeInTheDocument();
    });

    it("should naviagate to the correct page when clicking on a link", () => {
        render(<Header />);

        const gamesLink = screen.getByRole("link", { name: "Games" });
        fireEvent.click(gamesLink);
        expect(gamesLink).toHaveAttribute("href", "/");

        const profileLink = screen.getByRole("link", { name: "Perfil" });
        fireEvent.click(profileLink);
        expect(profileLink).toHaveAttribute("href", "/profile");

        const gamepadIconLink = screen.getByTestId("gamepad-icon");
        expect(gamepadIconLink).toHaveAttribute("href", "/profile");
    });

})