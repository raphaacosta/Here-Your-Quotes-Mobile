import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Constants from 'expo-constants';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  padding: 0 20px;
  padding-top: ${Constants.statusBarHeight + 10}px;
  background-color: #CEA2AC;
`;

export const ImgContainer = styled.View`
  flex: 1;
  /* background-color: #FFF; */
  width: 100%;
  margin-top: -100px;
  height: 180px;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled(Animated.View)`
  /* background-color: #000; */
  flex: 1;
  margin-top: -150px;
  height: 250px;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput`
  width: 95%;
  align-items: center;
  border-radius: 8px;
  color: #25283D;
  height: 40px;
  margin-bottom: 20px;
  padding: 10px;
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

export const ButtonText = styled.Text`
  flex: 1;
  text-align: center;
  left: -20px;
  justify-content: center;
  font-size: 16px;
  color: #EFD9CE;
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

export const NewUserContainer = styled.TouchableOpacity`
  margin-top: 10px;
  left: -50px;
  align-items: center;
  flex-direction: row;
`;

export const NewUserText = styled.Text`
  margin-left: 8px;
  text-align: justify;
  font-size: 16px;
  color: #8F3985;
`;