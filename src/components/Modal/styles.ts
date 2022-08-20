import { BsX } from 'react-icons/bs';
import styled from "styled-components";

export const StyledModal = styled.div`
  ${({ theme }) => `
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${theme.color.darkGray['2B2F38']}80;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 99;
  `}
`

export const ModalWindow = styled.div`
  ${({ theme }) => `
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.color.white['FFFFFF']};
    width: 616px;
    min-height: 120px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.16);
    border-radius: 10px;
  `}
`

export const ModalHeader = styled.div`
  ${({ theme }) => `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    padding: 48px;
    padding-bottom: 0;
  `}
`

export const ModalFooter = styled.div`
  ${({ theme }) => `
    align-items: center;
    background: ${theme.color.white['FFFFFF']};
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    left: 0;
    position: relative;
    width: calc(100% - 96px);
    padding: 48px;
    padding-top: 0;
    border-radius: 10px;
    gap: 24px;
  `}
`
export const ModalContent = styled.div`
  padding: 0 48px;
  padding-bottom: 24px;
`
export const ModalClose = styled(BsX)`
  ${({ theme }) => `
    width: 24px;
    height: 24px;
    color: ${theme.color.neutral['8094BC']};
    cursor: pointer;
  `}
`
