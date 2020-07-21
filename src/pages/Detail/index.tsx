import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert, Animated } from 'react-native';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';


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
        content,
        author,
        complement,
        headers: {
          Authorization: userId,
        },
      });
      Alert.alert("All right", "Frase editada com sucesso", [{
        text: "Ok",
        onPress: () => {
          navigation.goBack();
        }
      }])
    } catch(err) {
      console.log(err);
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

            Alert.alert("Ah que pena :c", "Frase deletada com sucesso!", [{
              text: "Ok",
              onPress: () => {
                navigation.goBack();
              }
            }])
          } catch(err) { 
            console.log(err)
            Alert.alert("Erro", "Erro ao deletar frase");
          }
          navigation.goBack();
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
      <Container>
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