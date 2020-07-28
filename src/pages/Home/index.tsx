import React from 'react';

import Button from '~/components/Button';

import Logo from '~/assets/logo.svg';

import { Container, Header, Content, Info } from './styles';

const Home = () => {
  return (
    <Container>
      <Header>
        <Logo width={177} height={177} fill="#FFFFFF" />
      </Header>
      <Content>
        <Info>
          Se você for um usuário novo ao prosseguir você conseguirá criar conta.
          mas se você já é um de nossos usuários aos prosseguir você também
          conseguirá acessar sua conta usando seu email de cadastro.
        </Info>
        <Button buttonStyle="default">Prosseguir</Button>
      </Content>
    </Container>
  );
};

export default Home;
