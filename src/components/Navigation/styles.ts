import styled from 'styled-components/native';

export const Container = styled.View`
  height: 117px;
  margin-left: 20px;
`;

export const ListContainer = styled.ScrollView``;

export const ItemContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 98px;
  margin-right: 20px;
`;

export const ItemImage = styled.Image`
  width: 64px;
  height: 64px;
`;

export const ItemLabel = styled.Text`
  font-weight: bold;
  font-size: 16px;
  padding-top: 9px;
`;
