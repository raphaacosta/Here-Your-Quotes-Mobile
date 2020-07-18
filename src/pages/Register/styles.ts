import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { RectButton } from 'react-native-gesture-handler';
import { Animated } from 'react-native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  padding: 20px;
  padding-top: ${Constants.statusBarHeight + 10}px;
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

export const HeaderText = styled.Text`
  font-size: 20px;
  color: #F5E7E0;
  left: -90px;
  font-weight: bold;
  text-align: center;
`;

export const HeaderIcon = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const InputContainer = styled(Animated.View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Input = styled.TextInput`
  width: 95%;
  height: 40px;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 8px;
  background-color: #F5E7E0;
`;

export const Button = styled(RectButton)`
  width: 95%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  background-color: #8F3985;
  border-radius: 8px;
`;

export const ButtonIcon = styled.View`
  height: 50px;
  width: 50px;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  background: rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  flex: 1;
  text-align: center;
  left: -20px;
  justify-content: center;
  font-size: 16px;
  color: #EFD9CE;
`;