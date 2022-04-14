import {useNavigation} from '@react-navigation/native';
import React, {Fragment, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatGrid} from 'react-native-super-grid';
import BottonSheet from '../../components/BottonSheet';
import CartIcon from '../../components/CartIcon';
import Chip from '../../components/Chip';
import HightlightCard from '../../components/HightlightCard';
import ListCard from '../../components/ListCard';
import {ScreenTitle, SectionTitle} from '../../components/Typography';
import {productsSlice} from '../../../application/redux/reducers';
import {getProductsSelector} from '../../../application/redux/selectors';
import {
  CategoryScroll,
  Container,
  Header,
  CategoryTitle,
  ScrollWrapper,
  HightlightScroll,
} from './styles';
import {Dimensions} from 'react-native';
import useCategories from '../../../application/hooks/useCategories';
import {DEFAULT_CATEGORY} from '../../../constants';

const {width} = Dimensions.get('window');

const Home: React.FC = () => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const {categories} = useCategories();

  const [selectedCartegory, setSelectedCartegory] =
    useState<string>(DEFAULT_CATEGORY);
  const products = useSelector(getProductsSelector);

  useEffect(() => {
    dispatch(productsSlice.actions.getProductsRequest(selectedCartegory));
  }, [dispatch, selectedCartegory]);

  function renderItem({item}: any) {
    return <ListCard onAddButtonPress={() => {}} data={item} />;
  }

  function onGoToCardPress() {
    navigate('Cart' as any);
  }

  function onCategoryPress(category: string) {
    setSelectedCartegory(category);
  }

  return (
    <Fragment>
      <Container>
        <Header>
          <ScreenTitle>Produtos</ScreenTitle>
          <CartIcon onPress={onGoToCardPress} />
        </Header>
        <ScrollWrapper>
          <CategoryTitle>FILTRAR POR CATEGORIA</CategoryTitle>
          <CategoryScroll>
            <Chip
              key={DEFAULT_CATEGORY}
              checked={DEFAULT_CATEGORY === selectedCartegory}
              category={DEFAULT_CATEGORY}
              onPress={onCategoryPress}
            />
            {categories?.map(category => (
              <Chip
                key={category}
                checked={category === selectedCartegory}
                category={category}
                onPress={onCategoryPress}
              />
            ))}
          </CategoryScroll>
        </ScrollWrapper>
        <SectionTitle>Novidades</SectionTitle>
        <ScrollWrapper>
          <HightlightScroll>
            {products?.slice(0, 5).map(product => (
              <HightlightCard
                key={product.id}
                data={product}
                onAddToCartPress={() => {}}
              />
            ))}
          </HightlightScroll>
        </ScrollWrapper>
        <SectionTitle>Listagem</SectionTitle>
        <ScrollWrapper>
          {products && (
            <FlatGrid
              itemDimension={width / 2 - 32}
              data={products as any}
              renderItem={renderItem}
            />
          )}
        </ScrollWrapper>
      </Container>
      <BottonSheet title="IR PARA O CARRINHO" onPress={onGoToCardPress} />
    </Fragment>
  );
};

export default Home;
