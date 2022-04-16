import React from 'react';
import {Animated} from 'react-native';
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
  const [opacity] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [opacity]);

  function _onAddToCartPress() {
    onAddToCartPress && onAddToCartPress(data);
  }
  return (
    <Animated.View
      style={{
        opacity,
      }}>
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
    </Animated.View>
  );
};

export default HightlightCard;
