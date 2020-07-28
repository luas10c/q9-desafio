import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0 18px;
  background-color: #f97f51;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: flex-end;
  height: 294px;
  padding-bottom: 36px;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
`;

export const Info = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #414141;
  padding: 30px 20px;
  margin: 36px 0;
  background-color: #ffffff;
  border-radius: 4px;
`;
