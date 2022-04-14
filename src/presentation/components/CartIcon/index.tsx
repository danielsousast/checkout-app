import React from 'react';
import {useCart} from '../../../application/context/CartContext';
import BagIcon from '../../../assets/bag.svg';
import {Container, Badge, BadgeText} from './style';

type CartIconProps = {
  onPress: () => void;
};

const CartIcon: React.FC<CartIconProps> = ({onPress}) => {
  const {cartProducts} = useCart();
  return (
    <Container onPress={onPress}>
      <BagIcon />
      {cartProducts?.length > 0 && (
        <Badge>
          <BadgeText>{cartProducts?.length}</BadgeText>
        </Badge>
      )}
    </Container>
  );
};

export default CartIcon;
