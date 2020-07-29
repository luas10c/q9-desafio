import React from 'react';

import Item from './Item';

import { ListContainer } from './styles';

import { ListProps } from './types';

const List: React.FC<ListProps> = ({ items, onChangeItem, ...props }) => {
  return (
    <ListContainer
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
      horizontal
      {...props}>
      {items.map((item, index) => (
        <Item
          key={index}
          label={item.label}
          image={item.image}
          onChangeItem={() => onChangeItem(item.name)}
        />
      ))}
    </ListContainer>
  );
};

export default List;
