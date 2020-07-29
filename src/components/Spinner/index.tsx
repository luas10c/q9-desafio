import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container } from './styles';

import { SpinnerProps } from './types';

const Spinner: React.FC<SpinnerProps> = ({ ...props }) => {
  return (
    <Container>
      <ActivityIndicator {...props} />
    </Container>
  );
};

export default Spinner;
