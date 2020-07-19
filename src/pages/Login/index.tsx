import React, { useState, useEffect } from 'react';
import { Platform, Animated, Keyboard, Alert } from 'react-native';
import { FontAwesome as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';

import api from '../../services/api';

import logo from '../../../assets/Logo.png';

import {
  Container,
  ImgContainer,
  InputContainer,
  Input,
  Button,
  ButtonIcon,
  ButtonText,
  NewUserContainer,
  NewUserText
} from './styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }));
  const [opacity] = useState(new Animated.Value(0));
  const [imgOpacity] = useState(new Animated.Value(1));

  const navigation = useNavigation();

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", keyboardDidHide);

    return () => {
      Keyboard.removeListener("keyboardDidShow", keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", keyboardDidHide);
    };
  }, []);

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 30,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 900,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  const handleLogin = async () => {

    if (!email || !password) {
      Alert.alert(
        "Aviso", "Preencha todos os campos", [
        {
          text: "Ok",
          onPress: () => { },
        }
      ]);
    } else {
      try {
        const response = await api.post('login', {
          email,
          password,
        });

        SecureStore.setItemAsync('id', String(response.data.id));
        SecureStore.setItemAsync('username', response.data.username);

        handleNavigateToList();
      } catch (err) {
        console.log(err);
        return Alert.alert("Erro", "Email ou senha inválidos", [{ text: 'Ok', onPress: () => { } }]);
      }
    }
  }

  const keyboardDidShow = () => {
    Animated.timing(imgOpacity, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const keyboardDidHide = () => {
    Animated.timing(imgOpacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const handleNavigateToList = () => {
    navigation.navigate('List');
  }

  const handlenavigateToRegister = () => {
    navigation.navigate('Register');
  }

  return (
    <Container style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ImgContainer>
        <Animated.Image source={logo} style={{
          opacity: imgOpacity,
        }} />
      </ImgContainer>
      <InputContainer style={{
        opacity: opacity,
        transform: [
          { translateY: offset.y }
        ]
      }}>
        <Input
          placeholder=" Email"
          keyboardType="email-address"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        ></Input>
        <Input
          placeholder=" Senha"
          secureTextEntry={true}
          autoCorrect={false}
          value={password}
          onChangeText={setPassword}
        ></Input>
        <Button onPress={handleLogin}>
          <ButtonIcon>
            <Icon name="sign-out" color="#EFD9CE" size={24} />
          </ButtonIcon>
          <ButtonText>Login</ButtonText>
        </Button>
        <NewUserContainer onPress={handlenavigateToRegister}>
          <Icon name="user-plus" size={16} color="#8F3985" />
          <NewUserText>Cadastrar usuário</NewUserText>
        </NewUserContainer>
      </InputContainer>
    </Container>
  );
}

export default Login;