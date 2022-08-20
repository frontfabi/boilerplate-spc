import styled from "styled-components"

const StyledFormField = styled.label`
  position: relative;

  > * {
    &:first-child{
      margin-bottom: 8px;
    }
    &:last-child {
      margin-top: 16px;
    }
  }
`

export { StyledFormField }
