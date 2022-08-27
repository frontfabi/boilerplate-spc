import {Button, Text} from 'components';
import {useState} from 'react';
import {ModalProps} from 'types';

import {
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalWindow,
  StyledModal,
} from './styles';

const Modal = ({
  children,
  isOpen = false,
  primaryActionButton,
  secondaryActionButton,
  title,
}: ModalProps) => {
  const [statusModal, setStatusModal] = useState(isOpen);

  const handleClose = () => {
    setStatusModal(false);
  };

  const handlePrimaryAction = () => {
    ((primaryActionButton?.action) != null) && primaryActionButton?.action();
    handleClose();
  };

  const handleSecondaryAction = () => {
    ((secondaryActionButton?.action) != null) && secondaryActionButton?.action();
    handleClose();
  };

  return statusModal ?
      (
    <StyledModal>
      <ModalWindow>
        <ModalHeader>
          <Text size={1} weight={3}>
            {title}
          </Text>
          <ModalClose role="button" onClick={handleClose} />
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
        <ModalFooter>
          {((primaryActionButton?.action) != null) && (
            <Button onClick={handlePrimaryAction}>
              {primaryActionButton?.label ?? 'Confirmar'}
            </Button>
          )}
          {((secondaryActionButton?.action) != null) && (
            <Button btnStyle="outline" onClick={handleSecondaryAction}>
              {secondaryActionButton?.label ?? 'Cancelar'}
            </Button>
          )}
        </ModalFooter>
      </ModalWindow>
    </StyledModal>
      ) :
      (
    <></>
      );
};

export {Modal};
