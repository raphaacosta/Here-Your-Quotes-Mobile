import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

import { FontAwesome as Icon, MaterialIcons as DoneIcon } from '@expo/vector-icons';

import { 
  Container, 
  Header, 
  HeaderIcon, 
  HeaderSeparator, 
  HeaderText, 
  QuoteBox, 
  TextAreaBox, 
  QuoteContent, 
  QuoteContentBox, 
  QuoteSeparator, 
  AuthorInputBox, 
  QuoteSubInput, 
  QuoteAuthor, 
  ComplementInputBox, 
  QuoteComplement
} from './styles';

const CreateQuote = () => {
  const navigation = useNavigation();

  const handleNavigateBack = () => {
    navigation.goBack();
  }

  const AlertMessage = () => {
    Alert.alert("Feito", "Frase criada", [{
      text: "Ok",
      onPress: handleNavigateBack,
    }])
  }

  return (
    <>
      <Header>
        <HeaderIcon onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={24} color="#F5E7E0"/>
        </HeaderIcon>
        <HeaderSeparator />
        <HeaderText>Criar frase</HeaderText>
        <HeaderSeparator />
        <HeaderIcon onPress={AlertMessage}>
          <DoneIcon name="done" size={24} color="#F5E7E0"/>
        </HeaderIcon>
      </Header>
      <Container>
        <QuoteBox>
          <TextAreaBox>
            <QuoteContent multiline={true} placeholder="Digite uma frase..." />
          </TextAreaBox>
          <QuoteSeparator />
        </QuoteBox>
        <AuthorInputBox>
          <QuoteSubInput>
            <QuoteAuthor placeholder="Digite um autor..."/>
          </QuoteSubInput>
          <QuoteSeparator />
        </AuthorInputBox>
        <ComplementInputBox>
          <QuoteSubInput> 
            <QuoteComplement placeholder="Digite um complemento..."/>
          </QuoteSubInput>
        </ComplementInputBox>
      </Container>
    </>
  );
}

export default CreateQuote;