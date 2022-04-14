import React from 'react';
import {Product} from '../../../application/http/models/Product';
import AddButton from '../AddButton';
import {ProductPrice, ProductTag, ProductTitle} from '../Typography';
import {Container, Image, PriceWrapper} from './styles';

type AddButtonProps = {
  data: Product;
  onAddButtonPress: (data: Product) => void;
};

const ListCard: React.FC<AddButtonProps> = ({onAddButtonPress, data}) => {
  function _onAddButtonPress() {
    onAddButtonPress && onAddButtonPress(data);
  }
  return (
    <Container>
      <Image
        resizeMode="stretch"
        source={{
          uri: data.image,
        }}
      />
      <AddButton isAbsolute onPress={_onAddButtonPress} />
      <ProductTag>{data.category}</ProductTag>
      <ProductTitle>{data.title}</ProductTitle>
      <PriceWrapper>
        <ProductPrice>${data.price}</ProductPrice>
      </PriceWrapper>
    </Container>
  );
};

export default ListCard;
