import React from 'react';

import {
  Nav,
  Photo,
  View,
  Icon,
  Content,
  Top,
  Bottom,
  ActiveView,
  Badge
} from './styles';

import user from '../../assets/img/user_img.png';
import product from '../../assets/img/product_button.svg';
import kanban from '../../assets/img/Agile_kanban_button.svg';
import contacts from '../../assets/img/contacts_button.svg';
import current from '../../assets/img/current_account_button.svg';
import config from '../../assets/img/noun_960833_cc.svg';

import DashboarIcon from '../../assets/icons/Dashboard';

import Colors from '../../util/Colors';

const Menu = () => (
  <Nav>
    <Content>
      <Top>
        <Photo src={user} />
        <Badge />

        <ActiveView>
          <DashboarIcon color={Colors.blue} size={25} />
        </ActiveView>
        <View>
          <Icon src={product} />
        </View>
        <View>
          <Icon src={kanban} />
        </View>
        <View>
          <Icon src={contacts} />
        </View>
        <View>
          <Icon src={current} />
        </View>
      </Top>
      <Bottom>
        <Icon src={config} />
      </Bottom>
    </Content>
  </Nav>
);

export default Menu;
