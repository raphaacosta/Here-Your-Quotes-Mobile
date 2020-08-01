import React, { useState, useEffect, useContext } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert, Animated, Platform } from 'react-native';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import ListContext from '../../contexts/listContext';


import { 
  FontAwesome5 as TrashIcon, 
  FontAwesome as Icon, 
  MaterialIcons as DoneIcon 
} from '@expo/vector-icons';

import { 
  Container, 
  Header, 
  HeaderIcon, 
  HeaderSeparator, 
  HeaderText, 
  QuoteBox,
  QuoteIcon,
  TextAreaBox,
  QuoteContent,
  QuoteSeparator,
  AuthorInputBox,
  QuoteSubInput,
  QuoteAuthor,
  ComplementInputBox,
  QuoteComplement
} from './styles';

interface Params{
  id: string;
}

const Detail: React.FC = () => {
  const [content, setContent] = useState<string>();
  const [author, setAuthor] = useState<string>();
  const [complement, setComplement] = useState<string>();
  const { handleChanges } = useContext(ListContext);

  const [opacity] = useState(new Animated.Value(0));

  const navigation = useNavigation();
  const route = useRoute();
  const routeParams = route.params as Params;

  useEffect(() => {
    const loadQuote = async () => {
      try{
        const userId = await AsyncStorage.getItem('userId');
        
        const response = await api.get(`/quotes/${routeParams.id}`, {
          headers: {
            Authorization: userId,
          }
        });
        setContent(response.data.quote.content);
        setAuthor(response.data.quote.author);
        setComplement(response.data.quote.complement);
      } catch(err) {
        console.log(err);
        Alert.alert(
          "Erro",
          "Não foi possível carregar a frase",
        [{
          text: 'Ok',
          onPress: () => {},
        }]);
      }
    }
    loadQuote();
  },[]);

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

  const handleSubmitEditedQuote = async () => {
    const userId = await AsyncStorage.getItem('userId');

    try {
      await api.put(`quotes/${routeParams.id}`, {
        user_id: userId,
        content,
        author,
        complement,
      });
      handleChanges();
      Alert.alert("Prontinho", "Frase editada com sucesso", [{
        text: "Ok",
        onPress: () => {
          navigation.goBack();
        }
      }])
    } catch(err) {
      Alert.alert("Erro", "Erro ao editar frase");
    }
  }

  const handleDeleteQuote = async () => {
    Alert.alert("Atenção", "Deseja mesmo deletar essa frase?", [
      {
        text: "Cancelar",
        onPress: () => console.log('Cancel pressed'),
      },
      {
        text: "Ok",
        onPress: async () => {
          const userId = await AsyncStorage.getItem('userId');
          
          try{
            await api.delete(`quotes/${routeParams.id}`, {
              headers: {
                Authorization: userId,
              }
            });
            handleChanges();
          } catch(err) { 
            Alert.alert("Erro", "Erro ao deletar frase");
          }
          navigation.navigate('List');
        },
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
        <HeaderIcon onPress={handleSubmitEditedQuote}>
          <DoneIcon name="done" size={24} color="#F5E7E0" />
        </HeaderIcon>
      </Header>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <QuoteBox style={{ opacity: opacity}}>
          <QuoteIcon onPress={handleDeleteQuote}>
            <TrashIcon name="trash" size={16} color="#A675A1" />
          </QuoteIcon>
          <TextAreaBox>
            <QuoteContent multiline={true} value={content} onChangeText={setContent}/>
          </TextAreaBox>
          <QuoteSeparator />
        </QuoteBox>
        <AuthorInputBox style={{ opacity: opacity}}>
          <QuoteSubInput>
            <QuoteAuthor value={author} onChangeText={setAuthor}/>
          </QuoteSubInput>
          <QuoteSeparator />
        </AuthorInputBox>
        <ComplementInputBox style={{ opacity: opacity}}>
          <QuoteSubInput>
            <QuoteComplement value={complement} onChangeText={setComplement}/>
          </QuoteSubInput>
        </ComplementInputBox>
      </Container>
    </>
  );
}

export default Detail;