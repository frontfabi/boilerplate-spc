import "@testing-library/jest-dom/extend-expect";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithTheme } from "utils/renderWithTemplate";

import { Button } from ".";

describe("<Button />", () => {
  it("should mount", () => {
    renderWithTheme(<Button onClick={jest.fn()}>Lorem ipsum</Button>);

    const button = screen.getByRole("button");
    const buttonContent = screen.getByText("Lorem ipsum");

    expect(button).toBeInTheDocument();
    expect(buttonContent).toBeInTheDocument();
  });

  it("should have a CSS property", () => {
    renderWithTheme(<Button onClick={jest.fn()}>Lorem ipsum</Button>);

    const button = screen.getByRole("button");
    const btnStyles = getComputedStyle(button);

    expect(btnStyles.backgroundColor).toBe("rgb(20, 70, 149)");
  });

  it("should have clicked", () => {
    const handleClick = jest.fn();
    renderWithTheme(<Button onClick={handleClick}>Lorem ipsum</Button>);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handleClick).toBeCalled();
  });
});
