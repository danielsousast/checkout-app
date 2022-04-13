import React from 'react';
import {Container, Button, Text} from './styles';

type ButtoBittonSheetProps = {
  title: string;
  onPress: () => void;
};

const BittonSheet: React.FC<ButtoBittonSheetProps> = ({title, onPress}) => {
  return (
    <Container>
      <Button onPress={onPress}>
        <Text>{title ?? 'Default'}</Text>
      </Button>
    </Container>
  );
};

export default BittonSheet;
