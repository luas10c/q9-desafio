import React from 'react';

import { Container, ButtonText } from './styles';

import { ContainerProps } from './types';

const Button: React.FC<ContainerProps> = ({
  children,
  icon: Icon,
  iconShowLoading,
  ...props
}) => {
  return (
    <Container {...props}>
      {iconShowLoading && <Icon />}
      {children && (
        <ButtonText buttonStyle={props.buttonStyle}>{children}</ButtonText>
      )}
    </Container>
  );
};

export default Button;
