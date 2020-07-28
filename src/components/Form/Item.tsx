import React from 'react';

import { ItemContainer } from './styles';

export const Item: React.FC = ({ children }) => {
  return <ItemContainer>{children}</ItemContainer>;
};
