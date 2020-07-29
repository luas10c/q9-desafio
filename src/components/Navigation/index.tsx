import React from 'react';

import List from './List';

import { Container } from './styles';

import { NavigationProps } from './types';

const Navigation: React.FC<NavigationProps> = ({
  items,
  onChangeItem,
  ...props
}) => {
  return (
    <Container {...props}>
      <List items={items} onChangeItem={onChangeItem} />
    </Container>
  );
};

export default Navigation;
