import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useCart} from '../../../application/context/CartContext';
import i18n from '../../../config/translation';

import EmptyCart from './EmptyCart';
import IntemCart from '../../components/IntemCart';
import BittonSheet from '../../components/BottonSheet';
import {ProductTitle, SectionTitle} from '../../components/Typography';

import {
  BackButton,
  BackIcon,
  Container,
  Header,
  HeaderTitle,
  List,
  TotalWrapper,
} from './styles';
import AlertModal from '../../components/AlertModal';
import {CartItem} from '../../../application/http/models/CartItem';

const Cart: React.FC = () => {
  const theme = useTheme();
  const safe = useSafeAreaInsets().bottom;
  const {goBack, navigate} = useNavigation();
  const {cartProducts, increment, decrement, finish} = useCart();
  const [showAlert, setShowAlert] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState<number>(
    null as unknown as number,
  );

  const isEmpty = cartProducts?.length === 0;

  function onFinishSell() {
    finish();
    navigate('Success' as any);
  }

  function closeModal() {
    setShowAlert(false);
  }

  function handleDecrement(product: CartItem) {
    if (product.quantity === 1) {
      setSelectedItem(product.id);
      setShowAlert(true);
      return;
    }

    decrement(product.id);
  }

  function onConfirmRemove() {
    decrement(selectedItem);
  }

  const totalPrice = React.useMemo(() => {
    const total = cartProducts.reduce((accumulator, item) => {
      //@ts-ignore
      const price = item.quantity * item.price;
      return accumulator + price;
    }, 0);

    return `$${total.toFixed(2)}`;
  }, [cartProducts]);

  function renderItem({item}: any) {
    return (
      <IntemCart
        data={item}
        onIncrementPress={increment}
        onDecrementPress={handleDecrement}
      />
    );
  }

  return (
    <>
      <Container>
        <Header safe={safe}>
          <BackButton onPress={goBack}>
            <BackIcon />
          </BackButton>
          <HeaderTitle>{i18n.t('app.cart')}</HeaderTitle>
        </Header>
        <SectionTitle>{i18n.t('app.my_cart')}</SectionTitle>
        {!isEmpty && <List data={cartProducts} renderItem={renderItem} />}
        {!isEmpty && (
          <TotalWrapper safe={safe}>
            <ProductTitle>{i18n.t('app.total')}</ProductTitle>
            <ProductTitle>{totalPrice}</ProductTitle>
          </TotalWrapper>
        )}
        {isEmpty && <EmptyCart onPress={goBack} />}
        {!isEmpty && (
          <BittonSheet
            title={i18n.t('app.finalize_purchase')}
            onPress={onFinishSell}
            bgColor={theme.colors.background}
            withShadow={false}
          />
        )}
      </Container>
      <AlertModal
        visible={showAlert}
        onBackdropPress={closeModal}
        onDismiss={closeModal}
        onConfirm={onConfirmRemove}
      />
    </>
  );
};

export default Cart;
