import React from 'react';

import { Container, ButtonText } from './styles';

import { ContainerProps } from './types';

const Button: React.FC<ContainerProps> = ({ children }) => {
  return (
    <Container>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};

export default Button;
