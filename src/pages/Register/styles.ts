import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  align-items: center;
  background-color: #f97f51;
  height: 200px;
`;

export const Wrapper = styled.View`
  height: 120px;
  justify-content: space-between;
`;

export const BackButton = styled.TouchableOpacity`
  margin-left: -20px;
  margin-top: 10px;
`;

export const HeaderTitle = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: #ffffff;
`;

export const ContentWrapper = styled.View`
  flex: 1;
  margin-top: -60px;
`;

export const Content = styled.View`
  flex: 1;
  background-color: #ffffff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 20px 0;
  margin: 0 20px;
`;
