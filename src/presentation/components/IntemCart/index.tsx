import React from 'react';
import {CartItem} from '../../../application/http/models/CartItem';

import {ProductCartPrice} from '../Typography';
import {
  ButtonLeft,
  ButtonRight,
  ButtonsWrapper,
  Container,
  Content,
  Image,
  ImageWrapper,
  MinusIcon,
  PlusIcon,
  Title,
} from './styles';

type ItemCartProps = {
  data: CartItem;
  onIncrementPress: (productId: number) => void;
  onDecrementPress: (product: CartItem) => void;
};

const IntemCart: React.FC<ItemCartProps> = ({
  data,
  onIncrementPress,
  onDecrementPress,
}) => {
  function _onDecrementPress() {
    onDecrementPress && onDecrementPress(data);
  }

  function _onIncrementPress() {
    onIncrementPress && onIncrementPress(data.id);
  }
  return (
    <Container testID="item-cart">
      <ImageWrapper>
        <Image
          resizeMode="stretch"
          source={{
            uri: data.image,
          }}
        />
      </ImageWrapper>
      <Content>
        <Title>{data.title}</Title>
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
