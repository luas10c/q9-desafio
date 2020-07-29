import React, { useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { useFormik } from 'formik';

import { AuthContext } from '../../contexts/AuthContext';

import validationSchema from './ValidationSchema';

import Form, { Group, Item, Label, TextField, Info } from '~/components/Form';
import Button from '~/components/Button';
import Spinner from '~/components/Spinner';

import {
  Container,
  Header,
  Wrapper,
  BackButton,
  HeaderTitle,
  ContentWrapper,
  Content
} from './styles';

const Register: React.FC = () => {
  const { loading, handleLogin } = useContext(AuthContext);
  const { navigate } = useNavigation();
  const {
    errors,
    touched,
    values,
    handleBlur,
    handleChange,
    handleSubmit
  } = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const { email } = values;

      await handleLogin(email);
      resetForm();
    }
  });

  return (
    <Container>
      <AuthContext.Consumer>
        {({ isAuthenticated }) => isAuthenticated && navigate('List')}
      </AuthContext.Consumer>
      <Header>
        <Wrapper>
          <BackButton onPress={() => {}}>
            <Feather name="arrow-left" color="#FFFFFF" size={24} />
          </BackButton>
          <HeaderTitle>Autentique-se para continuar</HeaderTitle>
        </Wrapper>
      </Header>
      <ContentWrapper>
        <Content>
          <Form>
            <Group>
              <Item>
                <Label>Email</Label>
                <TextField
                  keyboardType="email-address"
                  autoCompleteType="email"
                  autoCapitalize="none"
                  onBlur={handleBlur('email')}
                  onChangeText={handleChange('email')}
                  value={values.email}
                  placeholder="Digite seu email"
                />
              </Item>
              {touched.email && errors.email && (
                <Item>
                  <Info>{errors.email}</Info>
                </Item>
              )}
            </Group>
            <Button
              buttonStyle="primary"
              onPress={(event: any) => handleSubmit(event)}
              icon={() => <Spinner />}
              disabled={loading}
              iconShowLoading={loading}>
              {!loading && <> Prosseguir</>}
            </Button>
          </Form>
        </Content>
      </ContentWrapper>
    </Container>
  );
};

export default Register;
