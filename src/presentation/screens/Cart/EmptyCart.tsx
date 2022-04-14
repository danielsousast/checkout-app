/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import BagIcon from '../../../assets/big-bag.svg';
import Button from '../../components/Button';
import {EmptyDescription, EmptyWrapper} from './styles';

type EmptyCartProps = {
  onPress: () => void;
};

const EmptyCart: React.FC<EmptyCartProps> = ({onPress}) => {
  return (
    <EmptyWrapper>
      <BagIcon width={400} style={{alignSelf: 'center'}} />
      <EmptyDescription>Nenhum item adicionado no carrinho</EmptyDescription>
      <Button title="adicionar itens" onPress={onPress} />
    </EmptyWrapper>
  );
};

export default EmptyCart;
