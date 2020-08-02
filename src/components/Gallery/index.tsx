import React from 'react';
import { FlatList, Image, TouchableHighlight } from 'react-native';
import { Dimensions } from 'react-native';

import { Container } from './styles';

import { GalleryProps } from './types';

const Gallery: React.FC<GalleryProps> = ({ images, ...props }) => {
  return (
    <Container>
      <FlatList
        data={images}
        bounces
        // extraData={images}
        numColumns={Math.floor(Dimensions.get('window').width) <= 400 ? 2 : 4}
        collapsable
        debug={false}
        initialNumToRender={8}
        windowSize={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableHighlight
            style={{
              width: 170,
              height: 170,
              borderRadius: 10,
              marginRight: 10,
              marginBottom: 10
            }}
            onPress={() => console.log(index)}>
            <Image
              style={{ borderRadius: 10 }}
              source={{
                uri: item,
                width: 170,
                height: 170
              }}
            />
          </TouchableHighlight>
        )}
      />
    </Container>
  );
};

export default Gallery;
