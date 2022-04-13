import React from 'react';
import {Container, Text} from './styles';

type ChipProps = {
  checked?: boolean;
};

const Chip: React.FC<ChipProps> = ({checked = false}) => {
  return (
    <Container checked={checked}>
      <Text checked={checked}>Category</Text>
    </Container>
  );
};

export default Chip;
