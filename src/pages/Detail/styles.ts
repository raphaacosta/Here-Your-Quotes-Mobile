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
  /* justify-content: space-between; */
  align-items: center;
`;

export const HeaderIcon = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const HeaderText = styled.Text`
  flex: 1;
  text-align: center;
  font-size: 20px;
  color: #F5E7E0;
`;

export const HeaderSeparator = styled.View`
  height: 70%;
  width: 3px;
  border-radius: 8px;
  background-color: #A675A1;
  opacity: 0.4;
  margin: 0 13px;
`;

export const QuoteBox = styled.View`
  width: 100%;
  height: 230px;
  margin-top: 10px;
  border-radius: 8px;
  background-color: #F5E7E0;
`;

export const QuoteIcon = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 5px;
  margin-right: 10px;
  align-self: flex-end;
`;

export const QuoteContentBox = styled.View`
  width: 90%;
  height: 150px;
`;

export const QuoteContent = styled.Text`
  padding: 0 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: justify;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #25283D;
`;

export const QuoteSeparator = styled.View`
  height: 3px;
  width: 90%;
  padding: 0 10px;
  border-radius: 8px;
  background-color: #A675A1;
  opacity: 0.4;
  margin: 0 13px;
`;

export const QuoteAuthor = styled.Text`
  align-items: center;
  padding: 0 10px;
  margin-top: 10px;
  margin-bottom: 5px;
  font-weight: bold;
  color: #25283D;
`;

export const QuoteDescription = styled.Text`
  padding: 0 10px;
  margin-top: 10px;
  margin-bottom: 5px;
  align-items: center;
  font-size: 16px;
  color: #25283D;
`;