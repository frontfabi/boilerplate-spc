import "@testing-library/jest-dom/extend-expect";
import { screen } from "@testing-library/react";
import * as React from "react";
import { renderWithTheme } from "utils/renderWithTemplate";

import { Input } from ".";

describe("<Input />", () => {
  it("should mount", () => {
    renderWithTheme(<Input>Lorem ipsum</Input>);

    const input = screen.getByTestId("InputContent");
    const inputContent = screen.getByText("Lorem ipsum");

    expect(input).toBeInTheDocument();
    expect(inputContent).toBeInTheDocument();
  });
});
