import React from 'react';
import ReactNativeModal from 'react-native-modal';
import i18n from '../../../config/translation';
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
        <Title>{i18n.t('app.remove_item')}</Title>
        <Description>{i18n.t('app.remove_item_confirm')}</Description>
        <Button onPress={_onConfirm}>
          <ButtonText>{i18n.t('app.proceed')}</ButtonText>
        </Button>
        <Button withMargin onPress={onDismiss}>
          <ButtonText isCancel>{i18n.t('app.cancel')}</ButtonText>
        </Button>
      </Container>
    </ReactNativeModal>
  );
};

export default AlertModal;
