import React from 'react';

import {
  Container,
  Icon,
  Title,
  View,
  MarginMedium,
  ContainerInput,
  Input,
  SearchView,
  Badge,
  SearchIcon
} from './styles';

import menu from '../../assets/img/menu_icon.svg';
import notification from '../../assets/img/notification_button.svg';
import cart from '../../assets/img/noun_cart_1864278.svg';
import search from '../../assets/img/Grupo 2190.svg';

const TopBar = () => (
  <Container>
    <View>
      <Icon src={menu} />
      <MarginMedium />
      <Title>Supplyr</Title>
    </View>
    <SearchView>
      <ContainerInput>
        <SearchIcon src={search} />
        <Input className="search" placeholder="Search" />
      </ContainerInput>
    </SearchView>
    <View>
      <View>
        <Icon src={notification} />
        <Badge>13</Badge>
      </View>
      <View>
        <Icon src={cart} />
        <Badge>2</Badge>
      </View>
    </View>
  </Container>
);

export default TopBar;
