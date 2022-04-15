import React from 'react';
import {Container, Icon} from './styles';

type AddButtonProps = {
  isAbsolute?: boolean;
  onPress: () => void;
};

const AddButton: React.FC<AddButtonProps> = ({isAbsolute = false, onPress}) => {
  return (
    <Container isAbsolute={isAbsolute} onPress={onPress} testID="add-button">
      <Icon />
    </Container>
  );
};

export default AddButton;
