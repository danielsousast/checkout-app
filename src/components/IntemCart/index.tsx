import React from 'react';
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

const IntemCart: React.FC = () => {
  return (
    <Container>
      <Image
        resizeMode="stretch"
        source={{
          uri: 'https://img.ltwebstatic.com/images3_pi/2021/10/08/1633665790e29d3e7c024367700ddbe07d4679a284_thumbnail_900x.webp',
        }}
      />
      <Content>
        <ProductTitle>Fjallraven - Foldsack</ProductTitle>
        <ProductCartPrice>1x 209,00</ProductCartPrice>
      </Content>
      <ButtonsWrapper>
        <ButtonLeft>
          <MinusIcon />
        </ButtonLeft>
        <ButtonRight>
          <PlusIcon />
        </ButtonRight>
      </ButtonsWrapper>
    </Container>
  );
};

export default IntemCart;
