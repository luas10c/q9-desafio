import styled from 'styled-components/native';

import { ContainerProps } from './types';

export const Container = styled.TouchableOpacity<ContainerProps>`
  align-items: center;
  justify-content: center;
  ${({ buttonStyle }) =>
    buttonStyle === 'default' &&
    `
    background-color: #ffffff;
  `};
  ${({ buttonStyle }) =>
    buttonStyle === 'primary' &&
    `
    background-color: #f97f51;
  `};
  ${({ buttonStyle, disabled }) =>
    buttonStyle === 'default' &&
    disabled &&
    `
    background-color: #f2eaea;
  `};
  ${({ buttonStyle, disabled }) =>
    buttonStyle === 'primary' &&
    disabled &&
    `
    background-color: #ea774d;
  `};
  width: 210px;
  height: 54px;
  border-radius: 4px;
`;

export const ButtonText = styled.Text<any>`
  font-weight: bold;
  font-size: 20px;
  ${({ buttonStyle }) =>
    buttonStyle === 'default' &&
    `
    color: #544d4d;
  `};
  ${({ buttonStyle }) =>
    buttonStyle === 'primary' &&
    `
    color: #FFFFFF;
  `}
`;
