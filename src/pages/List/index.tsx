import React, { useState, useEffect } from 'react';
import { ScrollView, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

const List: React.FC = () => {
  const [opacity] = useState(new Animated.Value(0));

  const navigation = useNavigation();

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 900,
      useNativeDriver: true,
    }).start();
  },[]);

  const handleLogOff = () => {
    navigation.navigate('Login');
  }

  const handleNavigateToDetail = () => {
    navigation.navigate('Detail');
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
        <Information>Aqui estão suas frases <UserName>Usuário</UserName></Information>
        <Animated.ScrollView 
          showsVerticalScrollIndicator={false} 
          style={{
            opacity: opacity,
          }}
        >
          <QuoteBox activeOpacity={0.7} onPress={handleNavigateToDetail}>
            <QuoteContent  numberOfLines={3} ellipsizeMode='tail'>
              Eu amo uma mulher, mas não irei obrigá-la a me amar. Vou cercá-la com
              todo o meu amor enquanto rezo por sua felicidade.
            </QuoteContent>
            <QuoteBar />
            <QuoteAuthor>Jiraya</QuoteAuthor>
          </QuoteBox>

          <QuoteBox activeOpacity={0.7} onPress={handleNavigateToDetail}>
            <QuoteContent  numberOfLines={3} ellipsizeMode='tail'>
              Eu amo uma mulher, mas não irei obrigá-la a me amar. Vou cercá-la com
              todo o meu amor enquanto rezo por sua felicidade.
            </QuoteContent>
            <QuoteBar />
            <QuoteAuthor>Jiraya</QuoteAuthor>
          </QuoteBox>

          <QuoteBox activeOpacity={0.7} onPress={handleNavigateToDetail}>
            <QuoteContent  numberOfLines={3} ellipsizeMode='tail'>
              Eu amo uma mulher, mas não irei obrigá-la a me amar. Vou cercá-la com
              todo o meu amor enquanto rezo por sua felicidade.
            </QuoteContent>
            <QuoteBar />
            <QuoteAuthor>Jiraya</QuoteAuthor>
          </QuoteBox>

          <QuoteBox activeOpacity={0.7} onPress={handleNavigateToDetail}>
            <QuoteContent  numberOfLines={3} ellipsizeMode='tail'>
              Eu amo uma mulher, mas não irei obrigá-la a me amar. Vou cercá-la com
              todo o meu amor enquanto rezo por sua felicidade.
            </QuoteContent>
            <QuoteBar />
            <QuoteAuthor>Jiraya</QuoteAuthor>
          </QuoteBox>

          <QuoteBox activeOpacity={0.7} onPress={handleNavigateToDetail}>
            <QuoteContent  numberOfLines={3} ellipsizeMode='tail'>
              Eu amo uma mulher, mas não irei obrigá-la a me amar. Vou cercá-la com
              todo o meu amor enquanto rezo por sua felicidade.
            </QuoteContent>
            <QuoteBar />
            <QuoteAuthor>Jiraya</QuoteAuthor>
          </QuoteBox>

          <QuoteBox activeOpacity={0.7} onPress={handleNavigateToDetail}>
            <QuoteContent  numberOfLines={3} ellipsizeMode='tail'>
              Eu amo uma mulher, mas não irei obrigá-la a me amar. Vou cercá-la com
              todo o meu amor enquanto rezo por sua felicidade.
            </QuoteContent>
            <QuoteBar />
            <QuoteAuthor>Jiraya</QuoteAuthor>
          </QuoteBox>

          <QuoteBox activeOpacity={0.7} onPress={handleNavigateToDetail}>
            <QuoteContent  numberOfLines={3} ellipsizeMode='tail'>
              Eu amo uma mulher, mas não irei obrigá-la a me amar. Vou cercá-la com
              todo o meu amor enquanto rezo por sua felicidade.
            </QuoteContent>
            <QuoteBar />
            <QuoteAuthor>Jiraya</QuoteAuthor>
          </QuoteBox>

          <QuoteBox activeOpacity={0.7} onPress={handleNavigateToDetail}>
            <QuoteContent  numberOfLines={3} ellipsizeMode='tail'>
              Eu amo uma mulher, mas não irei obrigá-la a me amar. Vou cercá-la com
              todo o meu amor enquanto rezo por sua felicidade.
            </QuoteContent>
            <QuoteBar />
            <QuoteAuthor>Jiraya</QuoteAuthor>
          </QuoteBox>

          <QuoteBox activeOpacity={0.7} onPress={handleNavigateToDetail}>
            <QuoteContent  numberOfLines={3} ellipsizeMode='tail'>
              Eu amo uma mulher, mas não irei obrigá-la a me amar. Vou cercá-la com
              todo o meu amor enquanto rezo por sua felicidade.
            </QuoteContent>
            <QuoteBar />
            <QuoteAuthor>Jiraya</QuoteAuthor>
          </QuoteBox>

          <QuoteBox activeOpacity={0.7} onPress={handleNavigateToDetail}>
            <QuoteContent  numberOfLines={3} ellipsizeMode='tail'>
              Eu amo uma mulher, mas não irei obrigá-la a me amar. Vou cercá-la com
              todo o meu amor enquanto rezo por sua felicidade.
            </QuoteContent>
            <QuoteBar />
            <QuoteAuthor>Jiraya</QuoteAuthor>
          </QuoteBox>
        </Animated.ScrollView>
      </Container>
    </>
  );
}

export default List;