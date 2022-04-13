import React from 'react';
import BagIcon from '../../assets/bag.svg';
import {Container, Badge, BadgeText} from './style';

type CartIconProps = {
  onPress: () => void;
};

const CartIcon: React.FC<CartIconProps> = ({onPress}) => {
  return (
    <Container onPress={onPress}>
      <BagIcon />
      <Badge>
        <BadgeText>3</BadgeText>
      </Badge>
    </Container>
  );
};

export default CartIcon;
