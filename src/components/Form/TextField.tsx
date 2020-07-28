import React from 'react';

import { TextFieldContainer } from './styles';

import { TextFieldContainerProps } from './types';

export const TextField: React.FC<TextFieldContainerProps> = (props) => {
  return <TextFieldContainer {...props} />;
};
