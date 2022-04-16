/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import BagIcon from '../../../assets/big-bag.svg';
import i18n from '../../../config/translation';
import Button from '../../components/Button';
import {EmptyDescription, EmptyWrapper} from './styles';

type EmptyCartProps = {
  onPress: () => void;
};

const EmptyCart: React.FC<EmptyCartProps> = ({onPress}) => {
  return (
    <EmptyWrapper>
      <BagIcon width={400} style={{alignSelf: 'center'}} />
      <EmptyDescription>{i18n.t('app.no_products_on_cart')}</EmptyDescription>
      <Button title="adicionar itens" onPress={onPress} />
    </EmptyWrapper>
  );
};

export default EmptyCart;
