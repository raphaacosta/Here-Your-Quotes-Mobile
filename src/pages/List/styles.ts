import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Header = styled.View`
  height: 50px;
  width: 100%;
  margin-top: 22px;
  flex-direction: row;
  background-color: #8F3985;
  
  align-items: center;
`;

export const HeaderIcon = styled.TouchableOpacity`
  height: 90%;
  width: 40px;
  justify-content: center;
  align-items: center;
`;

export const HeaderBar = styled.View`
  height: 70%;
  width: 3px;
  border-radius: 8px;
  background-color: #A675A1;
  opacity: 0.4;
  margin: 0 10px;
`;

export const HeaderInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  padding: 0 10px;
  border-radius: 8px;
  background-color: #F5E7E0;
`;

export const Information = styled.Text`
  font-size: 18px;
  color: #25283D;
`;

export const UserName = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const QuoteBox = styled.TouchableOpacity`
  width: 100%;
  height: 150px;
  margin-top: 10px;
  border-radius: 8px;
  background-color: #F5E7E0;
`;

export const QuoteContent = styled.Text`
  width: 90%;
  height: 60px;
  left: 10px;
  padding: 10px;
`;

export const QuoteBar = styled.View`
  height: 4px;
  width: 90%;
  border-radius: 8px;
  background-color: #A675A1;
  opacity: 0.4;
  margin: 0 13px;
`;

export const QuoteAuthor = styled.Text`
  left: 5px;
  padding: 10px;
`;