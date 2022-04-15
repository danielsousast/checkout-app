import React from 'react';
import {Product} from '../../../application/http/models/Product';
import AddButton from '../AddButton';
import {
  ProductDescription,
  ProductPrice,
  ProductTag,
  ProductTitle,
} from '../Typography';
import {Container, Image, ImageWrapper, PriceWrapper} from './styles';

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
    <Container testID="hightlight-card">
      <ImageWrapper>
        <Image
          resizeMode="stretch"
          source={{
            uri: data.image,
          }}
        />
      </ImageWrapper>
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
