import React from 'react';
import i18n from '../../../config/translation';
import {Container, ErrorImage, ErrorText} from './styles';

const ErrorMessage: React.FC = () => {
  return (
    <Container>
      <ErrorImage source={require('../../../assets/error.png')} />
      <ErrorText>{i18n.t('app.error_occurred')}</ErrorText>
    </Container>
  );
};

export default ErrorMessage;
