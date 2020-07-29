import React, { useCallback } from 'react';

import { ItemContainer, ItemImage, ItemLabel } from './styles';

import { ItemProps } from './types';

const Item: React.FC<ItemProps> = ({
  label,
  image,
  onChangeItem,
  ...props
}) => {
  return (
    <ItemContainer onPress={() => onChangeItem()} {...props}>
      {image && (
        <ItemImage
          style={{ borderRadius: 32 }}
          width={48}
          height={48}
          source={image}
        />
      )}
      {label && <ItemLabel>{label}</ItemLabel>}
    </ItemContainer>
  );
};

export default Item;
