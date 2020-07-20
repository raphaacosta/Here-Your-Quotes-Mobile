import React, { useState, useEffect } from 'react';
import { Alert, Platform, Animated } from 'react-native';
import { FontAwesome as Icon } from '@expo/vector-icons';
import api from '../../services/api';

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
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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

  const handleRegister = async () => {
    const data = {
      username,
      email,
      password,
    };

    if(!username || !email || !password) {
      Alert.alert("Erro", "Preencha todos os campos", [{
        text: "Ok",
        onPress: () => {},
      }]);
    }
    else {
      try {
      
        const response = await api.post('users_create', {
          username,
          email,
          password,
        });
        
        Alert.alert("Sucesso", "Usuário criado", [{
          text: "Ok",
          onPress: handleNavigateLogin,
        }]);
      } catch (err) {
        console.log(err);
        return Alert.alert("Erro", "Erro ao criar usuário", [{
          text: "Ok",
          onPress: () => {},
        }]);
      }
    }
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
          <Input 
            placeholder="username" 
            value={username} 
            onChangeText={setUsername}
          />
          <Input 
            placeholder="email" 
            value={email} 
            onChangeText={setEmail} 
            keyboardType="email-address"
          />
          <Input 
            placeholder="password" 
            secureTextEntry={true} 
            value={password} 
            onChangeText={setPassword}
          />
          <Button onPress={handleRegister}>
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