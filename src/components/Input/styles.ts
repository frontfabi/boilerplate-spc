import styled from "styled-components"
import { FieldStatusType } from 'types';

export const StyledInput = styled.input<{status: FieldStatusType}>`
  ${({ theme, status }) => `
    position: relative;
    width: calc(100% - 68px);
    height: calc(100% - 28px);
    margin: 14px 24px;
    margin-right: 0;
    border: none;
    color: ${theme.font.color[status]};

    ::placeholder {
      color: ${theme.font.color[status]};
      opacity: .65;
    }

  `}
  :focus {
    outline: transparent;
  }
`

export const Wrapper = styled.div<{status: FieldStatusType, disabled?: boolean}>`
  ${({ theme, status }) => `
    height: 62px;
    max-height: 62px;
    width: 100%;
    color: ${theme.font.color[status]};    
  `}
`

export const InputField = styled.div<{status: FieldStatusType, disabled?: boolean}>`
  ${({ theme, status, disabled }) => `
    background: white;
    border-radius: 4px;
    border: 1px solid ${theme.font.color[status]};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 100%;

    svg {
      width: 24px;
      height: 24px;
    }
  `}
`
