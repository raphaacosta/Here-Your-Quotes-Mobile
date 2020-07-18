import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Alert, Animated } from 'react-native';

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
  QuoteSeparator, 
  AuthorInputBox, 
  QuoteSubInput, 
  QuoteAuthor, 
  ComplementInputBox, 
  QuoteComplement
} from './styles';

const CreateQuote = () => {
  const [opacity] = useState(new Animated.Value(0));
  
  const navigation = useNavigation();

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 900,
      useNativeDriver: true,
    }).start();
  },[]);

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
        <QuoteBox style={{ opacity: opacity}}>
          <TextAreaBox>
            <QuoteContent multiline={true} placeholder="Digite uma frase..." />
          </TextAreaBox>
          <QuoteSeparator />
        </QuoteBox>
        <AuthorInputBox style={{ opacity: opacity}}>
          <QuoteSubInput>
            <QuoteAuthor placeholder="Digite um autor..."/>
          </QuoteSubInput>
          <QuoteSeparator />
        </AuthorInputBox>
        <ComplementInputBox style={{ opacity: opacity}}>
          <QuoteSubInput>
            <QuoteComplement placeholder="Digite um complemento..."/>
          </QuoteSubInput>
        </ComplementInputBox>
      </Container>
    </>
  );
}

export default CreateQuote;