import React, { useState, useEffect } from 'react';
import { Image, Platform, Animated, Keyboard } from 'react-native';
import { FontAwesome as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

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
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 80}));
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
  },[]);

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
  },[]);

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
          }}/>
        </ImgContainer>
        <InputContainer style={{
          opacity: opacity,
          transform: [
            { translateY: offset.y }
          ]
        }}>
          <Input placeholder=" Email" autoCorrect={false} >
            
          </Input>
          <Input placeholder=" Senha" secureTextEntry={true}>

          </Input>
          <Button onPress={handleNavigateToList}>
            <ButtonIcon>
              <Icon name="sign-out"  color="#EFD9CE" size={24}/>
            </ButtonIcon>
            <ButtonText>Login</ButtonText>
          </Button>
          <NewUserContainer onPress={handlenavigateToRegister}>
            <Icon name="user-plus" size={16} color="#8F3985"/>
            <NewUserText>Cadastrar usuário</NewUserText>
          </NewUserContainer>
        </InputContainer>
      </Container>
  );
}

export default Login;