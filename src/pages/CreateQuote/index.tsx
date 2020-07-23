import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, Animated } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

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
import api from '../../services/api';

const CreateQuote = () => {
  const [content, setContent] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [complement, setComplement] = useState<string>('');

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

  const handleSubmitQuote = async () => {
    try{
      const userId = await AsyncStorage.getItem('userId');

      await api.post('/quotes', {
        content,
        author,
        complement,
        user_id: userId,
      });
      
      Alert.alert(
        "Sucesso",
        "Frase criada com sucesso!!!",
        [{
          text: "Ok",
          onPress: () => {
            navigation.navigate('List');
          },
        }]);

    } catch(err) {
      Alert.alert(
        "Erro",
        "Erro ao criar frase.",
        [{
          text: "Ok",
          onPress: () => {
            navigation.navigate('List');
          },
      }]);
    }
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
        <HeaderIcon onPress={handleSubmitQuote}>
          <DoneIcon name="done" size={24} color="#F5E7E0"/>
        </HeaderIcon>
      </Header>
      <Container>
        <QuoteBox style={{ opacity: opacity}}>
          <TextAreaBox>
            <QuoteContent 
              multiline={true} 
              placeholder="Digite uma frase..." 
              value={content}
              onChangeText={setContent}  
            />
          </TextAreaBox>
          <QuoteSeparator />
        </QuoteBox>
        <AuthorInputBox style={{ opacity: opacity}}>
          <QuoteSubInput>
            <QuoteAuthor 
              placeholder="Digite um autor..."
              value={author}
              onChangeText={setAuthor}
            />
          </QuoteSubInput>
          <QuoteSeparator />
        </AuthorInputBox>
        <ComplementInputBox style={{ opacity: opacity}}>
          <QuoteSubInput>
            <QuoteComplement 
              placeholder="Digite um complemento..."
              value={complement}
              onChangeText={setComplement}
            />
          </QuoteSubInput>
        </ComplementInputBox>
      </Container>
    </>
  );
}

export default CreateQuote;