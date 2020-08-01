import React, { useState, useEffect, useRef, useContext } from 'react';
import { Animated, Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import ListContext from '../../contexts/listContext';

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
  const [search, setSearch] = useState('');
  const [page, setPage] = useState<number>(0);
  const { occurrence } = useContext(ListContext);

  const isMountedRef = useRef(false);

  const [opacity] = useState(new Animated.Value(0));
  const navigation = useNavigation();
  
  useEffect(() => {
    isMountedRef.current = true;

    if(isMountedRef.current ) {
      loadQuotes();
    }

    () => isMountedRef.current = false;
  },[occurrence]);

  useEffect(() => {
    isMountedRef.current = true;
    
    if(isMountedRef.current){
      const handleSearch = async () => {
        const userId = await AsyncStorage.getItem('userId');
        
        try{
          const response = await api.get(`search?content=${search}`,{
            headers: {
              Authorization: userId,
            }
          });
          setQuote(response.data);
        } catch(err) {
          console.log(err);
          Alert.alert("Erro","Erro ao conectar à API",[{
            text: 'Ok',
            onPress: () => {},
          }]);
        }
      }
      handleSearch();
    }
    
    () => isMountedRef.current = false;
  }, [search]);

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

    try{
      const response = await api.get('quotes', {
      headers: {
        Authorization: userId,
      }
    });
      setUsername(String(userName));
      setQuote(response.data);
      setPage(page + 1);
    } catch(err) {
      Alert.alert("Erro","Falha ao conectar com a API",[{
       text: 'Ok',
       onPress: () => {},
      }])
    }
  }

  const handleLogOff = () => {
    navigation.navigate('Login');
  }

  const handleNavigateToDetail = (id: number) => {
    navigation.navigate('Detail', { id });
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
        <HeaderInput 
          placeholder="Search..." 
          style={Platform.OS === 'ios' ? {paddingTop: 5} : undefined}
          value={search}
          onChangeText={setSearch}
        />
        <HeaderBar/>

        <HeaderIcon onPress={handleLogOff}>
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
                onPress={() => handleNavigateToDetail(quotes.id)}>
                <QuoteContent  numberOfLines={2} ellipsizeMode='tail'>
                  {quotes.content}
                </QuoteContent>
                <QuoteBar />
                <QuoteAuthor>{quotes.author}</QuoteAuthor>
                <QuoteBar />
                <QuoteAuthor>{quotes.complement}</QuoteAuthor>
              </QuoteBox>
            ))}
          </Animated.ScrollView>
        </Container>
    </>
  );
}

export default List;