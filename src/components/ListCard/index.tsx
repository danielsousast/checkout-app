import React from 'react';
import AddButton from '../AddButton';
import {ProductPrice, ProductTag, ProductTitle} from '../Typography';
import {Container, Image, PriceWrapper} from './styles';

type AddButtonProps = {
  onAddButtonPress: () => void;
};

const ListCard: React.FC<AddButtonProps> = ({onAddButtonPress}) => {
  return (
    <Container>
      <Image
        resizeMode="stretch"
        source={{
          uri: 'https://img.ltwebstatic.com/images3_pi/2021/10/08/1633665790e29d3e7c024367700ddbe07d4679a284_thumbnail_900x.webp',
        }}
      />
      <AddButton isAbsolute onPress={onAddButtonPress} />
      <ProductTag>mens clothing</ProductTag>
      <ProductTitle>Fjallraven - Foldsack</ProductTitle>
      <PriceWrapper>
        <ProductPrice>10995</ProductPrice>
      </PriceWrapper>
    </Container>
  );
};

export default ListCard;
