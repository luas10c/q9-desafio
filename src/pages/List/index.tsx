import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { StatusBar } from 'expo-status-bar';
import api from '~/services/api';

import Spinner from '~/components/Spinner';
import Gallery from '~/components/Gallery';
import Navigation from '~/components/Navigation';

import navigationItems from './navigationItems';

import { Container, Content, Footer } from './styles';

const List: React.FC<any> = () => {
  const [token, setToken] = useState<string | null>();
  const [breed, setBreed] = useState<string | undefined>();
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchTokenOnAsyncStorage();
    fetchImagesByBreed();

    return () => {
      fetchTokenOnAsyncStorage();
      fetchImagesByBreed();
    };
  }, [breed]);

  const fetchTokenOnAsyncStorage = async () => {
    try {
      const storedToken = await AsyncStorage.getItem('@token');
      setToken(storedToken);
    } catch (error) {
      //
      // console.log(error);
    }
  };

  const fetchImagesByBreed = async () => {
    try {
      setIsLoading(true);
      const { data } = await api.get(breed ? `list?breed=${breed}` : 'list', {
        headers: {
          Authorization: token
        }
      });
      setImages(data.list);
      setIsLoading(false);
    } catch (error) {
      //
      // console.log(error);
    }
  };

  const handleChangeItem = (value: string | undefined) => {
    if (!breed && value !== 'chihuahua') {
      setImages([]);
      setBreed(value);
    }

    if (breed && value !== breed) {
      setImages([]);
      setBreed(value);
    }
  };

  return (
    <Container>
      <StatusBar backgroundColor="#FFFFFF" style="dark" translucent={false} />
      <Content>
        {isLoading && <Spinner size="large" color="#f97f51" />}
        {!isLoading && images && <Gallery images={images} />}
      </Content>
      <Footer>
        <Navigation items={navigationItems} onChangeItem={handleChangeItem} />
      </Footer>
    </Container>
  );
};

export default List;
