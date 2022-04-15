import React from 'react';
import BagIcon from '../../../assets/bag.svg';
import {Container, Badge, BadgeText} from './style';

type CartIconProps = {
  onPress: () => void;
  cartLength: number;
};

const CartIcon: React.FC<CartIconProps> = ({onPress, cartLength}) => {
  return (
    <Container onPress={onPress}>
      <BagIcon />
      {cartLength > 0 && (
        <Badge testID="cart-bdge">
          <BadgeText>{cartLength}</BadgeText>
        </Badge>
      )}
    </Container>
  );
};

export default CartIcon;
