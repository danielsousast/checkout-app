import React from 'react';
import {
  ProductDescription,
  ProductPrice,
  ProductTag,
  ProductTitle,
} from '../Typography';
import {Container, Image, PriceWrapper} from './styles';

const ListCard: React.FC = () => {
  return (
    <Container>
      <Image
        resizeMode="stretch"
        source={{
          uri: 'https://img.ltwebstatic.com/images3_pi/2021/10/08/1633665790e29d3e7c024367700ddbe07d4679a284_thumbnail_900x.webp',
        }}
      />
      <ProductTag>mens clothing</ProductTag>
      <ProductTitle>Fjallraven - Foldsack</ProductTitle>
      <ProductDescription>
        Your perfect pack for everyday use and walks in the forest.
      </ProductDescription>
      <PriceWrapper>
        <ProductPrice>10995</ProductPrice>
      </PriceWrapper>
    </Container>
  );
};

export default ListCard;
