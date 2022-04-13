import React from 'react';
import {Container, Button, Text} from './styles';

type BottomSheet = {
  title: string;
  withShadow?: boolean;
  onPress: () => void;
  bgColor?: string;
};

const BottomSheet: React.FC<BottomSheet> = ({
  title,
  onPress,
  bgColor,
  withShadow = true,
}) => {
  return (
    <Container withShadow={withShadow} bgColor={bgColor}>
      <Button onPress={onPress}>
        <Text>{title ?? 'Default'}</Text>
      </Button>
    </Container>
  );
};

export default BottomSheet;
