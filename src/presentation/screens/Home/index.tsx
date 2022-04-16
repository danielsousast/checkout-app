import React, {Fragment, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import i18n from '../../../config/translation';
import Chip from '../../components/Chip';
import CartIcon from '../../components/CartIcon';
import ListCard from '../../components/ListCard';
import BottonSheet from '../../components/BottonSheet';
import ErrorMessage from '../../components/ErrorMessage';
import HightlightCard from '../../components/HightlightCard';
import NewSectionSkeleton from '../../components/Skeletons/Sections';
import CategoriesSkeleton from '../../components/Skeletons/Categories';
import {ScreenTitle, SectionTitle} from '../../components/Typography';
import {productsSlice} from '../../../application/redux/reducers';
import {useCart} from '../../../application/context/CartContext';
import useCategories from '../../../application/hooks/useCategories';
import {
  getProductsMetada,
  getProductsSelector,
} from '../../../application/redux/selectors';
import {DEFAULT_CATEGORY} from '../../../constants';
import {
  CategoryScroll,
  Container,
  Header,
  CategoryTitle,
  ScrollWrapper,
  HightlightScroll,
  ProductsWrapper,
  ProductsScroll,
} from './styles';

const Home: React.FC = () => {
  const safe = useSafeAreaInsets().bottom;
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const {categories} = useCategories();
  const {addToCart, cartProducts} = useCart();

  const [selectedCartegory, setSelectedCartegory] =
    useState<string>(DEFAULT_CATEGORY);
  const products = useSelector(getProductsSelector);
  const {loading, error} = useSelector(getProductsMetada);

  useEffect(() => {
    dispatch(productsSlice.actions.getProductsRequest(selectedCartegory));
  }, [dispatch, selectedCartegory]);

  function onGoToCardPress() {
    navigate('Cart' as any);
  }

  function onCategoryPress(category: string) {
    setSelectedCartegory(category);
  }

  function renderContent() {
    if (error && !loading) {
      return <ErrorMessage />;
    }

    return (
      <Fragment>
        <ScrollWrapper>
          <CategoryTitle>{i18n.t('app.filter_by_category')}</CategoryTitle>
          <CategoriesSkeleton show={loading}>
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
          </CategoriesSkeleton>
        </ScrollWrapper>
        <SectionTitle>{i18n.t('app.news')}</SectionTitle>
        <ScrollWrapper>
          <NewSectionSkeleton show={loading}>
            <HightlightScroll>
              {products?.slice(0, 5).map(product => (
                <HightlightCard
                  key={product.id}
                  data={product}
                  onAddToCartPress={addToCart}
                />
              ))}
            </HightlightScroll>
          </NewSectionSkeleton>
        </ScrollWrapper>
        <SectionTitle>{i18n.t('app.listing')}</SectionTitle>
        <NewSectionSkeleton show={loading}>
          <ProductsScroll>
            <ProductsWrapper>
              {products?.map((product, index) => (
                <ListCard
                  key={product.id}
                  onAddButtonPress={addToCart}
                  data={product}
                  withMargin={index === 0 || index % 2 === 0}
                />
              ))}
            </ProductsWrapper>
          </ProductsScroll>
        </NewSectionSkeleton>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Container withPadding={cartProducts?.length > 0}>
        <Header safe={safe}>
          <ScreenTitle>{i18n.t('app.products')}</ScreenTitle>
          <CartIcon
            onPress={onGoToCardPress}
            cartLength={cartProducts?.length}
          />
        </Header>
        {renderContent()}
      </Container>
      {cartProducts?.length > 0 && (
        <BottonSheet
          title={i18n.t('app.go_to_cart')}
          onPress={onGoToCardPress}
        />
      )}
    </Fragment>
  );
};

export default Home;
