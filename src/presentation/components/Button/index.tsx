import React from 'react';
import {Container, Text} from './styles';

type ButtonProps = {
  title: string;
  onPress: () => void;
};

const Button: React.FC<ButtonProps> = ({title, onPress}) => {
  return (
    <Container onPress={onPress}>
      <Text>{title}</Text>
    </Container>
  );
};

export default Button;
