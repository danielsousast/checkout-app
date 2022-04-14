import React from 'react';
import {Product} from '../../../application/http/models/Product';
import AddButton from '../AddButton';
import {
  ProductDescription,
  ProductPrice,
  ProductTag,
  ProductTitle,
} from '../Typography';
import {Container, Image, PriceWrapper} from './styles';

type HightlightCardProps = {
  data: Product;
  onAddToCartPress: (data: Product) => void;
};

const HightlightCard: React.FC<HightlightCardProps> = ({
  onAddToCartPress,
  data,
}) => {
  function _onAddToCartPress() {
    onAddToCartPress && onAddToCartPress(data);
  }
  return (
    <Container>
      <Image
        resizeMode="stretch"
        source={{
          uri: data.image,
        }}
      />
      <ProductTag>{data.category}</ProductTag>
      <ProductTitle>{data.title}</ProductTitle>
      <ProductDescription>{data.description}</ProductDescription>
      <PriceWrapper>
        <ProductPrice>${data.price}</ProductPrice>
        <AddButton onPress={_onAddToCartPress} />
      </PriceWrapper>
    </Container>
  );
};

export default HightlightCard;
