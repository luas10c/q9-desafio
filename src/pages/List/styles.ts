import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  width: 100%;
  height: 117px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-style: solid;
  border-color: #aeaeae;
  z-index: 999999;
`;
