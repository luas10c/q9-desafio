import React, { useEffect } from 'react';
import { FlatList, Image, TouchableHighlight } from 'react-native';

import { Container } from './styles';

import { GalleryProps } from './types';

const Gallery: React.FC<GalleryProps> = ({ images, ...props }) => {
  useEffect(() => {
    console.log(`Foram carregadas ${images.length} images`);
  }, []);

  return (
    <Container>
      <FlatList
        data={images}
        bounces
        // extraData={images}
        numColumns={2}
        collapsable
        debug={false}
        initialNumToRender={8}
        windowSize={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) =>
          index % 2 === 0 ? (
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
                onLoad={() => 'carregado'}
              />
            </TouchableHighlight>
          ) : (
            <TouchableHighlight
              style={{ width: 170, height: 170, borderRadius: 10 }}
              onPress={() => console.log(index)}>
              <Image
                style={{ borderRadius: 10 }}
                source={{
                  uri: item,
                  width: 170,
                  height: 170
                }}
                onLoad={() => 'carregado'}
              />
            </TouchableHighlight>
          )
        }
      />
    </Container>
  );
};

export default Gallery;
