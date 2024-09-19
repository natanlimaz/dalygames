import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Input } from "@/components/input/index";

import { useRouter } from 'next/navigation'; 

const routerMethods = {
  push: jest.fn()
}

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => routerMethods),
}));

describe("Input component", () => {

    beforeEach(() => {
      routerMethods.push.mockClear();
      cleanup();
    })

    it("should render input component", () => {
        render(<Input />);

        const inputElement = screen.getByPlaceholderText("Procurando algum jogo?...") as HTMLInputElement;

        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveAttribute("type", "text");
    });

    it("should update input state when typing", () => {
      render(<Input />);

      const inputElement = screen.getByPlaceholderText("Procurando algum jogo?...") as HTMLInputElement;

      fireEvent.change(inputElement, { target: { value: "Game name" } });
      expect(inputElement.value).toBe("Game name");
    });

    it("should search for game by clicking icon search", () => {
        render(<Input />);

        const inputElement = screen.getByPlaceholderText("Procurando algum jogo?...") as HTMLInputElement;
        const searchButton = screen.getByRole("button");
        
        fireEvent.change(inputElement, { target: { value: "The Witcher 3"} } );
        expect(inputElement.value).toBe("The Witcher 3");
        
        fireEvent.submit(searchButton);

        const pushSpy = jest.spyOn(useRouter(), "push");
        expect(pushSpy).toHaveBeenCalledWith("/game/search/The Witcher 3");
    });

    it("should prevent form submission when input is empty", () => {
      render(<Input />);

      const searchButton = screen.getByRole("button");
      
      fireEvent.submit(searchButton);

      const pushSpy = jest.spyOn(useRouter(), "push");
      expect(pushSpy).not.toHaveBeenCalled();
    });

});