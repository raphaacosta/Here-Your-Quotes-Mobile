import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

import { FontAwesome5 as TrashIcon, FontAwesome as Icon } from '@expo/vector-icons';

import { 
  Container, 
  Header, 
  HeaderIcon, 
  HeaderSeparator, 
  HeaderText, 
  QuoteBox, 
  QuoteContent, 
  QuoteIcon, 
  QuoteSeparator, 
  QuoteAuthor, 
  QuoteDescription
} from './styles';

const Detail: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigateBack = () => {
    navigation.goBack();
  }

  const handleLogOff = () => {
    navigation.navigate('Login');
  }

  const AlertMessage = () => {
    Alert.alert("Atenção", "Deseja deletar essa frase?", [
      {
        text: "Cancelar",
        onPress: () => console.log('Cancel pressed'),
      },
      {
        text: "Ok",
        onPress: () => console.log('Ok pressed'),
      }
    ],
    { cancelable: false});
  }

  return (
    <>
      <Header>
        <HeaderIcon onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={24} color="#F5E7E0"/>
        </HeaderIcon>
        <HeaderSeparator />
        <HeaderText>Editar frase</HeaderText>
        <HeaderSeparator />
        <HeaderIcon onPress={handleLogOff}>
          <Icon name="power-off" size={24} color="#F5E7E0"/>
        </HeaderIcon>
      </Header>
      <Container>
        <QuoteBox>
          <QuoteIcon onPress={AlertMessage}>
            <TrashIcon name="trash" size={16} color="#A675A1"/>
          </QuoteIcon>
          <QuoteContent>
            Nós não escolhemos o que nos cura Vermelho, o que nos torna inteiros, 
            nos dá um propósito. O meu momento de lucidez, vem do mais estranho dos lugares.

          </QuoteContent>
          <QuoteSeparator />
          <QuoteAuthor>
            Frank Castle
          </QuoteAuthor>
          <QuoteSeparator />
          <QuoteDescription>
              DareDevil
          </QuoteDescription>
        </QuoteBox>
      </Container>
    </>
  );
}

export default Detail;