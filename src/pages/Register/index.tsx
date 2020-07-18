import React, { useState, useEffect } from 'react';
import { Alert, Platform, Animated } from 'react-native';
import { FontAwesome as Icon } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import { 
  Container,
  Header,
  HeaderText,
  HeaderIcon,
  InputContainer,
  Input,
  Button,
  ButtonIcon,
  ButtonText
} from './styles';

const Register: React.FC = () => {
  const [offset] = useState(new Animated.ValueXY({x: 0, y:90}));
  const [opacity] = useState(new Animated.Value(0));

  const navigation = useNavigation();

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      })
    ]).start();
  },[]);

  const handleNavigateLogin = () => {
    navigation.goBack();
  }

  const AlertMessage = () => {
    Alert.alert("Message", "Usuário criado", [{
      text: "Ok",
      onPress: handleNavigateLogin,
    }]);
  }

  return (
    <>
      <Header>
        <HeaderIcon onPress={handleNavigateLogin}>
          <Icon name="arrow-left" color="#EFD9CE" size={24}/>
        </HeaderIcon>
        <HeaderText>Criando Usuário</HeaderText>
      </Header>
      <Container style={{ flex: 1,}} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <InputContainer 
          style={{
            opacity: opacity,
            transform: [
              { translateY: offset.y }
            ]
          }}
        >
          <Input placeholder="username"/>
          <Input placeholder="email"/>
          <Input placeholder="password" secureTextEntry={true}/>
          <Button onPress={AlertMessage}>
            <ButtonIcon>
              <Icon name="user-plus" color="#EFD9CE" size={24}/>
            </ButtonIcon>
            <ButtonText>Criar</ButtonText>
          </Button>
        </InputContainer>
      </Container>
    </>
  );
}

export default Register;