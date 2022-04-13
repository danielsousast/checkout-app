import {useNavigation} from '@react-navigation/native';
import React, {Fragment} from 'react';
import {FlatGrid} from 'react-native-super-grid';
import BottonSheet from '../../components/BottonSheet';
import CartIcon from '../../components/CartIcon';
import Chip from '../../components/Chip';
import HightlightCard from '../../components/HightlightCard';
import ListCard from '../../components/ListCard';
import {ScreenTitle, SectionTitle} from '../../components/Typography';
import {
  CategoryScroll,
  Container,
  Header,
  CategoryTitle,
  ScrollWrapper,
  HightlightScroll,
  ProductScroll,
} from './styles';

const categories = [
  {id: '1', name: 'Categoria 1', checked: true},
  {id: '2', name: 'Categoria 1', checked: true},
  {id: '3', name: 'Categoria 1', checked: true},
  {id: '4', name: 'Categoria 1', checked: true},
  {id: '1', name: 'Categoria 1', checked: true},
  {id: '5', name: 'Categoria 1', checked: true},
];

const Home: React.FC = () => {
  const {navigate} = useNavigation();
  function renderItem({_item}: any) {
    return <ListCard onAddButtonPress={() => {}} />;
  }

  function onGoToCardPress() {
    navigate('Cart' as any);
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
            {categories.map((category, index) => (
              <Chip key={category.id} checked={index === 0} />
            ))}
          </CategoryScroll>
        </ScrollWrapper>
        <SectionTitle>Novidades</SectionTitle>
        <ScrollWrapper>
          <HightlightScroll>
            {categories.map(category => (
              <HightlightCard key={category.id} onAddToCartPress={() => {}} />
            ))}
          </HightlightScroll>
        </ScrollWrapper>
        <SectionTitle>Listagem</SectionTitle>
        <ScrollWrapper>
          <ProductScroll horizontal>
            {categories.map(_category => (
              <FlatGrid
                itemDimension={130}
                data={[1, 2, 3, 4, 5, 6]}
                renderItem={renderItem}
              />
            ))}
          </ProductScroll>
        </ScrollWrapper>
      </Container>
      <BottonSheet title="IR PARA O CARRINHO" onPress={onGoToCardPress} />
    </Fragment>
  );
};

export default Home;
