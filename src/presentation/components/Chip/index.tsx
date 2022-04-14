import React from 'react';
import {Container, Text} from './styles';

type ChipProps = {
  checked?: boolean;
  category: string;
  onPress: (category: string) => void;
};

const Chip: React.FC<ChipProps> = ({checked = false, category, onPress}) => {
  function _onPress() {
    onPress && onPress(category);
  }
  return (
    <Container checked={checked} onPress={_onPress}>
      <Text checked={checked}>{category}</Text>
    </Container>
  );
};

export default Chip;
