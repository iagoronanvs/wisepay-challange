import styled from 'styled-components';

import Colors from '../../util/Colors';

export const Nav = styled.nav`
  list-style: none;
  background: ${Colors.white};
  width: auto;
  height: 86%;
  position: fixed;
  margin-top: 60px;
  margin-left: 10px;
  border-radius: 10px;
  padding: 5px;
`;

export const Photo = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 5px;
`;

export const Icon = styled.img`
  width: 22px;
  height: 22px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const View = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const Top = styled.div``;

export const Bottom = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export const ActiveView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  background-color: ${Colors.grey};
  width: 113%;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom-left-radius: 50%;
  border-top-left-radius: 50%;
`;

export const Badge = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  border: 1px red solid;
  position: absolute;
  top: 12px;
  right: 6px;
`;
