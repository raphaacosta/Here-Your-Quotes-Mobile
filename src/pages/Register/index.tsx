import React from 'react';
import { Alert, Platform } from 'react-native';
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
  const navigation = useNavigation();

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
        <InputContainer>
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