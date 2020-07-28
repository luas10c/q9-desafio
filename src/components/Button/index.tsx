import React from 'react';

import { Container, ButtonText } from './styles';

import { ContainerProps } from './types';

const Button: React.FC<ContainerProps> = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <ButtonText buttonStyle={props.buttonStyle}>{children}</ButtonText>
    </Container>
  );
};

export default Button;
