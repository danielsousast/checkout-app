import React from 'react';
import {CartItem} from '../../../application/http/models/CartItem';

import {ProductCartPrice, ProductTitle} from '../Typography';
import {
  ButtonLeft,
  ButtonRight,
  ButtonsWrapper,
  Container,
  Content,
  Image,
  MinusIcon,
  PlusIcon,
} from './styles';

type ItemCartProps = {
  data: CartItem;
  onIncrementPress: (productId: number) => void;
  onDecrementPress: (productId: number) => void;
};

const IntemCart: React.FC<ItemCartProps> = ({
  data,
  onIncrementPress,
  onDecrementPress,
}) => {
  function _onDecrementPress() {
    onDecrementPress && onDecrementPress(data.id);
  }

  function _onIncrementPress() {
    onIncrementPress && onIncrementPress(data.id);
  }
  return (
    <Container>
      <Image
        resizeMode="stretch"
        source={{
          uri: data.image,
        }}
      />
      <Content>
        <ProductTitle>{data.title}</ProductTitle>
        <ProductCartPrice>{`${data.quantity} x ${data.price}`}</ProductCartPrice>
      </Content>
      <ButtonsWrapper>
        <ButtonLeft onPress={_onDecrementPress}>
          <MinusIcon />
        </ButtonLeft>
        <ButtonRight onPress={_onIncrementPress}>
          <PlusIcon />
        </ButtonRight>
      </ButtonsWrapper>
    </Container>
  );
};

export default IntemCart;
