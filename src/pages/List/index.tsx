import React, { useState, useEffect, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import api from '~/services/api';

import Spinner from '~/components/Spinner';
import Gallery from '~/components/Gallery';
import Navigation from '~/components/Navigation';

import navigationItems from './navigationItems';

import { Container, Content, Footer } from './styles';

const List: React.FC<any> = () => {
  const [breed, setBreed] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchImagesByBreed();

    return () => {
      fetchImagesByBreed();
    };
  }, [breed]);

  const fetchImagesByBreed = async () => {
    setImages([]);
    try {
      setIsLoading(true);
      const { data } = await api.get(`list${breed && `?breed=${breed}`}`, {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJmMDUxNTFiMC1iMzUyLTRiZjYtOTc0Ni0yMDAyOWMyMjI5YTciLCJzdWIiOiI1ZjE3NjVjNGM4ZWExODAwMDQyZTJhMTciLCJpYXQiOjE1OTUzNjg5MDAsImV4cCI6MTU5NjY2NDkwMH0.xFi9tmMlOMfYOLXIsqcfWFHwtzNw2QhVm2MF7U-05Lc'
        }
      });
      setImages(data.list);
      setIsLoading(false);
    } catch (error) {
      //
    }
  };

  const handleChangeItem = (value: string) => {
    if (value === 'chihuahua' && breed !== '') {
      setBreed(value);
      return;
    }

    if (value !== breed) {
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
