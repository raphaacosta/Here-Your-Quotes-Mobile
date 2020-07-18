import React from 'react';
import { ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { FontAwesome as Icon, MaterialCommunityIcons as ListIcon } from '@expo/vector-icons';

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
  const navigation = useNavigation();

  const handleLogOff = () => {
    navigation.navigate('Login');
  }

  const handleNavigateToDetail = () => {
    navigation.navigate('Detail');
  }
  return(
    <>
      <Header>
        <HeaderIcon>
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
        <ScrollView>
          <QuoteBox activeOpacity={0.7} onPress={handleNavigateToDetail}>
            <QuoteContent>
              Não importa onde você começa, só importa onde você termina
            </QuoteContent>
            <QuoteBar />
            <QuoteAuthor>Felipe Deschamps</QuoteAuthor>
          </QuoteBox>

          <QuoteBox activeOpacity={0.7}>
            <QuoteContent>
              Não importa onde você começa, só importa onde você termina
            </QuoteContent>
            <QuoteBar />
            <QuoteAuthor>Felipe Deschamps</QuoteAuthor>
          </QuoteBox>

          <QuoteBox activeOpacity={0.7}>
            <QuoteContent>
              Não importa onde você começa, só importa onde você termina
            </QuoteContent>
            <QuoteBar />
            <QuoteAuthor>Felipe Deschamps</QuoteAuthor>
          </QuoteBox>

          <QuoteBox activeOpacity={0.7}>
            <QuoteContent>
              Não importa onde você começa, só importa onde você termina
            </QuoteContent>
            <QuoteBar />
            <QuoteAuthor>Felipe Deschamps</QuoteAuthor>
          </QuoteBox>

          <QuoteBox activeOpacity={0.7}>
            <QuoteContent>
              Não importa onde você começa, só importa onde você termina
            </QuoteContent>
            <QuoteBar />
            <QuoteAuthor>Felipe Deschamps</QuoteAuthor>
          </QuoteBox>

          <QuoteBox activeOpacity={0.7}>
            <QuoteContent>
              Não importa onde você começa, só importa onde você termina
            </QuoteContent>
            <QuoteBar />
            <QuoteAuthor>Felipe Deschamps</QuoteAuthor>
          </QuoteBox>

          <QuoteBox activeOpacity={0.7}>
            <QuoteContent>
              Não importa onde você começa, só importa onde você termina
            </QuoteContent>
            <QuoteBar />
            <QuoteAuthor>Felipe Deschamps</QuoteAuthor>
          </QuoteBox>

          <QuoteBox activeOpacity={0.7}>
            <QuoteContent>
              Não importa onde você começa, só importa onde você termina
            </QuoteContent>
            <QuoteBar />
            <QuoteAuthor>Felipe Deschamps</QuoteAuthor>
          </QuoteBox>

          <QuoteBox activeOpacity={0.7}>
            <QuoteContent>
              Não importa onde você começa, só importa onde você termina
            </QuoteContent>
            <QuoteBar />
            <QuoteAuthor>Felipe Deschamps</QuoteAuthor>
          </QuoteBox>

          <QuoteBox activeOpacity={0.7}>
            <QuoteContent>
              Não importa onde você começa, só importa onde você termina
            </QuoteContent>
            <QuoteBar />
            <QuoteAuthor>Felipe Deschamps</QuoteAuthor>
          </QuoteBox>

          <QuoteBox activeOpacity={0.7}>
            <QuoteContent>
              Não importa onde você começa, só importa onde você termina
            </QuoteContent>
            <QuoteBar />
            <QuoteAuthor>Felipe Deschamps</QuoteAuthor>
          </QuoteBox>

          <QuoteBox activeOpacity={0.7}>
            <QuoteContent>
              Não importa onde você começa, só importa onde você termina
            </QuoteContent>
            <QuoteBar />
            <QuoteAuthor>Felipe Deschamps</QuoteAuthor>
          </QuoteBox>
        </ScrollView>
      </Container>
    </>
  );
}

export default List;