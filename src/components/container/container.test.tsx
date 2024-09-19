import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Container } from "@/components/container";

describe("Container Component", () => {

    beforeEach(() => {
        cleanup();
    })
    
    it("shohuld render children correctly", () => {
        render(
            <Container>
                <h1>title</h1>
                <p>content</p>
            </Container>
        );

        const headerElement = screen.getByRole("heading", { name: "title" });
        const paragraph = screen.getByText("content");

        expect(headerElement).toBeInTheDocument();
        expect(paragraph).toBeInTheDocument();
    });

    it("shoud have the correct classes", () => {
        render(
            <Container>
                <h1>title</h1>
                <p>content</p>
            </Container>
        );

        const containerElement = screen.getByTestId("container");
        expect(containerElement).toHaveClass("max-w-screen-xl");
        expect(containerElement).toHaveClass("mx-auto");
        expect(containerElement).toHaveClass("px-3");
    })
})