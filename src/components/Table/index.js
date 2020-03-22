import React from 'react';

import { FaArrowUp, FaArrowDown, FaSort } from 'react-icons/fa';

import {
  Container,
  HeaderTitle,
  Image,
  Payment,
  PaymentData,
  Text,
  SubText,
  ItemData,
  DataTable,
  HeaderView
} from './styles';

import Colors from '../../util/Colors';

import './table.css';

const Table = ({ data }) => (
  <Container>
    <DataTable>
      <thead>
        <tr>
          <th>
            <HeaderView>
              <HeaderTitle>Payment Method</HeaderTitle>
              <FaSort size={12} className="margin-icons" />
            </HeaderView>
          </th>
          <th>
            <HeaderView>
              <HeaderTitle>Card Number</HeaderTitle>
              <FaSort size={12} className="margin-icons" />
            </HeaderView>
          </th>
          <th>
            <HeaderView>
              <HeaderTitle>Customer Name / No</HeaderTitle>
              <FaSort size={12} className="margin-icons" />
            </HeaderView>
          </th>
          <th>
            <HeaderView className="align-end">
              <HeaderTitle>Current / Total Balance</HeaderTitle>
              <FaSort size={12} className="margin-icons" />
            </HeaderView>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map(el => (
          <tr>
            <td className="column-size">
              <Payment>
                <Image
                  src={el.payment_method.image}
                  alt={el.payment_method.name}
                />
                <PaymentData>
                  <Text>
                    <b>{el.payment_method.name}</b>
                  </Text>
                  <SubText>{el.payment_method.method}</SubText>
                </PaymentData>
              </Payment>
            </td>
            <td className="column-size">
              <ItemData>
                <Text>
                  <b>{el.card_number}</b>
                </Text>
              </ItemData>
            </td>
            <td>
              <ItemData>
                <Text>
                  <b>{el.customer.name}</b>
                </Text>
                <SubText>{el.customer.number}</SubText>
              </ItemData>
            </td>
            <td className="text-align-end">
              <ItemData className="column-end">
                <div>
                  <Text>
                    <b>{el.values.subtotal}</b>
                  </Text>
                  <SubText>{el.values.total}</SubText>
                </div>
                {el.values.arrow === 1 && (
                  <FaArrowUp
                    size={12}
                    color={Colors.blue}
                    className="margin-arrow"
                  />
                )}
                {el.values.arrow === 0 && (
                  <FaArrowDown
                    size={12}
                    color="#9ba3ab"
                    className="margin-arrow"
                  />
                )}
              </ItemData>
            </td>
          </tr>
        ))}
      </tbody>
    </DataTable>
  </Container>
);

export default Table;
