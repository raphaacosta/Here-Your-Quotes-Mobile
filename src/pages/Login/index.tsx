import React from 'react';
import { Image, KeyboardAvoidingView, Platform,  } from 'react-native';
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
  const navigation = useNavigation();

  const handleNavigateToList = () => {
    navigation.navigate('List');
  }

  const handlenavigateToRegister = () => {
    navigation.navigate('Register');
  }

  return (
    <KeyboardAvoidingView  style={{ flex: 1, }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container>
        <ImgContainer>
          <Image source={logo}/>
        </ImgContainer>
        <InputContainer>
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
    </KeyboardAvoidingView>
  );
}

export default Login;