import styled, { css } from "styled-components";
import { ButtonProps } from "types";

const BtnNormal = css<ButtonProps>`
  ${({ theme, btnStatus = "default", btnStyle }) =>
    (btnStyle === "normal" || !btnStyle) &&
    `
    background: ${theme.button[btnStatus].bg};

    p {
      color: ${theme.button[btnStatus].text};
    }
  `}
`;

const BtnOutline = css<ButtonProps>`
  ${({ theme, btnStatus = "default", btnStyle }) =>
    btnStyle === "outline" &&
    `
    background: transparent;
    border-color: ${theme.button[btnStatus].border};
    p {
      color: ${theme.button[btnStatus].bg};
    }
  `}
`;

const BtnLink = css<ButtonProps>`
  ${({ theme, btnStatus = "default", btnStyle }) =>
    btnStyle === "link" &&
    `
    background: transparent;
    color: ${theme.button[btnStatus].border};
    border-color: transparent;
  `}
`;

const StyledButton = styled.button<ButtonProps>`
  height: 64px;
  border-radius: 50px;
  min-width: 168px;
  padding: 14px 30px;
  cursor: pointer;
  border: 1px solid transparent;

  ${BtnNormal}
  ${BtnOutline}
  ${BtnLink}
`;

export { StyledButton };
