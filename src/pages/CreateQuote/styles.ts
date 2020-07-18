import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  padding: 20px;
`;

export const Header = styled.View`
  height: 50px;
  width: 100%;
  margin-top: 22px;
  flex-direction: row;
  background-color: #8F3985;
  justify-content: space-between;
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
  align-items: center;
  margin-top: 10px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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

export const TextAreaBox = styled.View`
  padding: 0 10px;
  margin-top: 10px;
  width: 90%;
  overflow: hidden;
`;

export const QuoteContent = styled.TextInput`
  width: 100%;
  font-size: 16px;
  color: #25283D;
  text-align: justify;
`;

export const QuoteSeparator = styled.View`
  height: 3px;
  width: 90%;
  padding: 0 10px;
  border-radius: 8px;
  background-color: #A675A1;
  opacity: 0.4;
  margin: 10px;
`;

export const AuthorInputBox = styled.View`
  width: 100%;
  height: 60px;
  background-color: #F5E7E0;
`;

export const QuoteSubInput = styled.View`
  height: 40px;
  padding: 10px;
  margin-top: 5px;
  width: 90%;
  font-size: 16px;
  color: #25283D;
`;

export const QuoteAuthor = styled.TextInput`
  padding: 0 10px;
  height: 90%;
  width: 100%;
  font-weight: bold;
  color: #25283D;
`;

export const ComplementInputBox = styled.View`
  width: 100%;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: #F5E7E0;
`;

export const QuoteComplement = styled.TextInput`
  padding: 0 10px;
  height: 90%;
  width: 100%;
  font-size: 16px;
  color: #25283D;
`;