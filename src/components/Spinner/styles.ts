import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled.View``;

export const Item = styled(Animated.View)`
  width: 32px;
  height: 32px;
  border-top-color: #ffffff;
  border-left-color: #ffffff;
  border-bottom-color: #bdbdbd;
  border-right-color: #bdbdbd;
  border-width: 4px;
  border-style: solid;
  border-radius: 16px;
`;
