import React from 'react';

import { FormContainer } from './styles';

import { FormContainerProps } from './types';

const Form: React.FC<FormContainerProps> = ({ children, ...props }) => {
  return <FormContainer {...props}>{children}</FormContainer>;
};

export default Form;
