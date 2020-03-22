import styled from 'styled-components';

import Colors from '../../util/Colors';

export const Container = styled.div`
  width: -webkit-fill-available;
  position: fixed;
  margin: 0;
  background-color: ${Colors.white};
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0.19), 0 0px 6px rgba(0, 0, 0, 0.23);
`;

export const Icon = styled.img`
  width: 18px;
  height: 18px;
`;

export const SearchIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const Title = styled.p`
  margin: 0%;
  font-size: 13.5pt;
  color: ${Colors.black};
`;

export const View = styled.div`
  display: flex;
  align-items: center;
`;

export const MarginMedium = styled.div`
  margin-left: 15px;
`;

export const SearchView = styled.div`
  display: flex;
  align-items: center;
  width: 35%;
`;

export const ContainerInput = styled.div`
  background-color: ${Colors.grey};
  padding: 5px 10px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Input = styled.input`
  border: 0;
  background-color: ${Colors.grey};
  margin-left: 15px;
  width: 100%;
  font-family: 'Roboto', sans-serif;
`;

export const Badge = styled.div`
  background-color: ${Colors.blue};
  border-radius: 15px;
  font-size: 8pt;
  font-weight: bold;
  color: ${Colors.white};
  padding: 2px 5px;
  position: relative;
  right: 9px;
  bottom: 7px;
`;
