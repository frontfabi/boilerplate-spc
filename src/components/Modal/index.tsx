import { Button } from 'components/Button';
import { Text } from 'components/Text';
import { useState } from 'react';
import { ModalProps } from 'types';
import { ModalClose, ModalContent, ModalFooter, ModalHeader, ModalWindow, StyledModal } from './styles';

const Modal = ({
  children,
  isOpen = true,
  primaryActionButton,
  secondaryActionButton,
  title,
}: ModalProps) => {
  const [statusModal, setStatusModal] = useState(isOpen)

  const handleClose = (isActive: boolean) => {
    setStatusModal(isActive);
  }

  const handlePrimaryAction = () => {
    primaryActionButton?.action && primaryActionButton?.action();
    handleClose(!statusModal)
  }

  const handleSecondaryAction = () => {
    secondaryActionButton?.action && secondaryActionButton?.action();
    handleClose(!statusModal)
  }

  return statusModal && (
    <StyledModal>
      <ModalWindow>
        <ModalHeader>
          <Text size={1} weight={3}>{title}</Text>
          <ModalClose role="button" onClick={() => handleClose(!statusModal)} />
        </ModalHeader>
        <ModalContent>
          {children}
        </ModalContent>
        <ModalFooter>
          {primaryActionButton?.action && <Button onClick={handlePrimaryAction}>{primaryActionButton?.label ?? 'Confirmar'}</Button>}
          {secondaryActionButton?.action && <Button btnStyle="outline" onClick={handleSecondaryAction}>{secondaryActionButton?.label ?? 'Cancelar'}</Button>}
        </ModalFooter>
      </ModalWindow>
    </StyledModal>
  );
};

export { Modal };
