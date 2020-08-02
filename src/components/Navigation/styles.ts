import styled from 'styled-components/native';

import { ItemProps } from './types';

export const Container = styled.View`
  background-color: #f97f51;
  align-items: center;
`;

export const ListContainer = styled.ScrollView`
  height: 117px;
  padding-left: 20px;
`;

export const ItemContainer = styled.TouchableOpacity<ItemProps>`
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 104px;
  margin-right: 20px;
  ${({ isActive }) =>
    isActive &&
    `
    background-color: rgba(255, 255, 255, .2);
    border: 1px solid rgba(255, 255, 255, .3);
    padding: 9px;
  `}
`;

export const ItemImage = styled.Image`
  width: 64px;
  height: 64px;
`;

export const ItemLabel = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
  padding-top: 9px;
`;
