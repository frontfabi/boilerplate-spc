import "@testing-library/jest-dom/extend-expect";
import { screen } from "@testing-library/react";
import * as React from "react";
import { renderWithTheme } from "utils/renderWithTemplate";

import { NamedAvatar } from ".";

describe("<NamedAvatar />", () => {
  it("should mount", () => {
    renderWithTheme(<NamedAvatar name="Lorem ipsum" />);

    const namedavatar = screen.getByText("LI");

    expect(namedavatar).toBeInTheDocument();
  });
});
