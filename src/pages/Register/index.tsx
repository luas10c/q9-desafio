import React from 'react';
import { Feather } from '@expo/vector-icons';

import Form, { Group, Item, Label, TextField, Info } from '~/components/Form';
import Button from '~/components/Button';

import {
  Container,
  Header,
  Wrapper,
  BackButton,
  HeaderTitle,
  ContentWrapper,
  Content
} from './styles';

const Register: React.FC = () => {
  return (
    <Container>
      <Header>
        <Wrapper>
          <BackButton onPress={() => {}}>
            <Feather name="arrow-left" color="#FFFFFF" size={24} />
          </BackButton>
          <HeaderTitle>Autentique-se para continuar</HeaderTitle>
        </Wrapper>
      </Header>
      <ContentWrapper>
        <Content>
          <Form>
            <Group>
              <Item>
                <Label>Email</Label>
                <TextField
                  autoCapitalize="none"
                  placeholder="Digite seu email"
                />
              </Item>
              <Item>
                <Info>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Info>
              </Item>
            </Group>
            <Button buttonStyle="primary">Prosseguir</Button>
          </Form>
        </Content>
      </ContentWrapper>
    </Container>
  );
};

export default Register;
