import styled from 'styled-components/native';

import { ContainerProps } from './types';

export const Container = styled.TouchableOpacity<ContainerProps>`
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  width: 210px;
  height: 54px;
  border-radius: 4px;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #544d4d;
`;
