import React from 'react';
import ReactNativeModal from 'react-native-modal';
import {Button, ButtonText, Container, Description, Title} from './styles';

interface AlertModalProps {
  visible: boolean;
  onBackdropPress: () => void;
  onDismiss: () => void;
  onConfirm: () => void;
}

const AlertModal: React.FC<AlertModalProps> = ({
  onConfirm,
  onDismiss,
  visible,
  onBackdropPress,
}) => {
  function _onConfirm() {
    onDismiss();
    onConfirm && onConfirm();
  }
  return (
    <ReactNativeModal
      isVisible={visible}
      onDismiss={onDismiss}
      onBackdropPress={onBackdropPress}>
      <Container>
        <Title>Remover Item</Title>
        <Description>
          Se deseja remover o item do carrinho clique em prosseguir.
        </Description>
        <Button onPress={_onConfirm}>
          <ButtonText>PROSSEGUIR</ButtonText>
        </Button>
        <Button withMargin onPress={onDismiss}>
          <ButtonText isCancel>CANCELAR</ButtonText>
        </Button>
      </Container>
    </ReactNativeModal>
  );
};

export default AlertModal;
