import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useTheme} from 'styled-components/native';
import ConfirmImage from '../../../assets/confirm.svg';
import BottomSheet from '../../components/BottonSheet';
import {Container, Description, Title} from './styles';

const Success: React.FC = () => {
  const theme = useTheme();
  const {navigate} = useNavigation();

  function onContinuePress() {
    navigate('Home' as any);
  }
  return (
    <Container>
      <ConfirmImage />
      <Title>SUCESSO!</Title>
      <Description>Compra realizada com sucesso, aproveite!</Description>
      <BottomSheet
        title="PROSSEGUIR"
        withShadow={false}
        bgColor={theme.colors.primary}
        buttonColor={theme.colors.primaryDark}
        onPress={onContinuePress}
      />
    </Container>
  );
};

export default Success;
