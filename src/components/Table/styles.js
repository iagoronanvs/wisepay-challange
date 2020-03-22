import styled from 'styled-components';

import Colors from '../../util/Colors';

export const Container = styled.div`
  background-color: ${Colors.white};
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0.19), 0 0px 3px rgba(0, 0, 0, 0.23);
  padding: 10px 20px;
`;

export const HeaderTitle = styled.p`
  font-size: 10pt;
  text-align: start;
  font-weight: 500;
  margin-top: 10px;
`;

export const ItemData = styled.div``;

export const Payment = styled.div`
  display: flex;
  align-items: center;
`;

export const PaymentData = styled.div`
  margin-left: 20px;
`;

export const Image = styled.img`
  width: 55px;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 10pt;
  line-height: 18px;
`;

export const SubText = styled.p`
  margin: 0;
  font-size: 8pt;
  line-height: 18px;
`;

export const DataTable = styled.table`
  width: 100%;
`;

export const HeaderView = styled.div`
  display: flex;
  align-items: center;
`;
