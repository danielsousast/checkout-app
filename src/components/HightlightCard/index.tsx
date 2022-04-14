import React from 'react';
import {Product} from '../../http/models/Product';
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
  onAddToCartPress: () => void;
};

const HightlightCard: React.FC<HightlightCardProps> = ({
  onAddToCartPress,
  data,
}) => {
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
        <AddButton onPress={onAddToCartPress} />
      </PriceWrapper>
    </Container>
  );
};

export default HightlightCard;
