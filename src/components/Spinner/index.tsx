import React, { useEffect, useCallback, useRef } from 'react';
import { Animated, Easing } from 'react-native';

import { Container, Item } from './styles';

const Spinner = () => {
  const rotate = new Animated.Value(0);

  useEffect(() => {
    spinAnimation();

    return () => {
      spinAnimation();
    };
  }, []);

  const spinAnimation = useCallback(() => {
    Animated.loop(
      Animated.timing(rotate, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true
      })
    ).start(() => spinAnimation());
  }, [rotate]);

  return (
    <Container>
      <Item
        style={{
          transform: [
            {
              rotate: rotate.interpolate({
                inputRange: [0, 1],
                outputRange: [360, 0]
              })
            }
          ]
        }}
      />
    </Container>
  );
};

export default Spinner;
