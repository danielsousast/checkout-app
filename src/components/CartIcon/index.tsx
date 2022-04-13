import React from 'react';
import BagIcon from '../../assets/bag.svg';
import {Container, Badge, BadgeText} from './style';

// import { Container } from './styles';

const CartIcon: React.FC = () => {
  return (
    <Container>
      <BagIcon />
      <Badge>
        <BadgeText>3</BadgeText>
      </Badge>
    </Container>
  );
};

export default CartIcon;
