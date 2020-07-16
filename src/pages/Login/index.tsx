import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <KeyboardAvoidingView  style={{ flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container>
        
      </Container>
    </KeyboardAvoidingView>
  );
}

export default Login;