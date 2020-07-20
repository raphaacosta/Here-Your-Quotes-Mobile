import React, { useState, useEffect } from 'react';
import { Alert, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';


import { 
  FontAwesome as Icon, 
  MaterialCommunityIcons as ListIcon 
} from '@expo/vector-icons';

import { 
  Container, 
  Header,
  HeaderIcon,
  HeaderInput,
  HeaderBar,
  Information,
  UserName,
  QuoteBox,
  QuoteContent,
  QuoteBar,
  QuoteAuthor
} from './styles';

interface Quote{
  id: number;
  content: string;
  author?: string;
  complement?: string;
}

const List: React.FC = () => {
  const [quote, setQuote] = useState<Quote[]>([]);
  const [username, setUsername] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);

  const [opacity] = useState(new Animated.Value(0));
  const navigation = useNavigation();

  useEffect(() => {
    setLoading(true);
    loadQuotes();
  },[]);

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 900,
      useNativeDriver: true,
    }).start();
  },[]);

  const loadQuotes = async () => {
    const userId = await AsyncStorage.getItem('userId');
    const userName = await AsyncStorage.getItem('userName');

    const response = await api.get('quotes', {
      headers: {
        Authorization: userId,
      }
    });
      setUsername(String(userName));
      setQuote(response.data);
      setPage(page + 1);
      setLoading(false);  
  }

  const handleLogOff = () => {
    navigation.navigate('Login');
  }

  const handleNavigateToDetail = (quote: Quote) => {
    navigation.navigate('Detail', { quote });
  }

  const handleNavigateToCreateQuote = () => {
    navigation.navigate('CreateQuote');
  }

  return(
    <>
      <Header>
        <HeaderIcon onPress={handleNavigateToCreateQuote}>
          <ListIcon name="playlist-plus" size={24} color="#EFD9CE"/>
        </HeaderIcon>
        
        <HeaderBar/>
        <HeaderInput placeholder="Search..."/>
        <HeaderBar/>

        <HeaderIcon onPress={handleLogOff      }>
          <Icon name="power-off" size={24} color="#EFD9CE"/>
        </HeaderIcon>
      </Header>
      <Container>
        <Information>Aqui estão suas frases <UserName>{username}</UserName></Information>
        <Animated.ScrollView 
          showsVerticalScrollIndicator={false} 
          style={{
            opacity: opacity,
          }}
        >
          {quote.map(quotes => (
            <QuoteBox 
              key={quotes.id}
              activeOpacity={0.7} 
              onPress={() => handleNavigateToDetail(quotes)}>
              <QuoteContent  numberOfLines={3} ellipsizeMode='tail'>
                {quotes.content}
              </QuoteContent>
              <QuoteBar />
              <QuoteAuthor>{quotes.author}</QuoteAuthor>
            </QuoteBox>
          ))}
        </Animated.ScrollView>
      </Container>
    </>
  );
}

export default List;