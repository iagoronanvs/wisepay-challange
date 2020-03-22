import React from 'react';

import TopBar from '../TopBar';
import Menu from '../Menu';

import { Content } from './styles';

const Template = ({ children }) => (
  <>
    <TopBar />
    <Menu />
    <Content>{children}</Content>
  </>
);

export default Template;
