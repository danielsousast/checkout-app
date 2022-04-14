import React from 'react';
import {Product} from '../../http/models/Product';
import AddButton from '../AddButton';
import {ProductPrice, ProductTag, ProductTitle} from '../Typography';
import {Container, Image, PriceWrapper} from './styles';

type AddButtonProps = {
  data: Product;
  onAddButtonPress: () => void;
};

const ListCard: React.FC<AddButtonProps> = ({onAddButtonPress, data}) => {
  return (
    <Container>
      <Image
        resizeMode="stretch"
        source={{
          uri: data.image,
        }}
      />
      <AddButton isAbsolute onPress={onAddButtonPress} />
      <ProductTag>{data.category}</ProductTag>
      <ProductTitle>{data.title}</ProductTitle>
      <PriceWrapper>
        <ProductPrice>${data.price}</ProductPrice>
      </PriceWrapper>
    </Container>
  );
};

export default ListCard;
