import React, { useState, useEffect, useCallback } from 'react';

import Item from './Item';

import { ListContainer } from './styles';

import { ListProps } from './types';

const List: React.FC<ListProps> = ({ items, onChangeItem, ...props }) => {
  const [breed, setBreed] = useState<string | undefined>();

  useEffect(() => {
    handleChangeItem();

    return () => {
      handleChangeItem();
    };
  }, [breed]);

  const handleChangeItem = useCallback(() => {
    if (breed) {
      onChangeItem(breed);
    }
  }, [breed]);

  return (
    <ListContainer
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
      horizontal
      {...props}>
      {items.map((item, index) =>
        item.name === breed ? (
          <Item
            key={index}
            label={item.label}
            image={item.image}
            onChangeItem={() => setBreed(item.name)}
            isActive
          />
        ) : (
          <Item
            key={index}
            label={item.label}
            image={item.image}
            onChangeItem={() => setBreed(item.name)}
          />
        )
      )}
    </ListContainer>
  );
};

export default List;
