import React from 'react';

import './App.css';

import Template from '../../components/Template';
import Table from '../../components/Table';

import { Title } from './styles';

import transactions from '../../util/Payments';

function App() {
  return (
    <Template>
      <Title>Transaction Details</Title>
      <Table data={transactions} />
    </Template>
  );
}

export default App;
