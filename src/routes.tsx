import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';

const AppStack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: "#CEA2AC",
          }
        }}
      >
        <AppStack.Screen name="Login" component={Login}/>
      </AppStack.Navigator>
    </NavigationContainer>
      );
}

export default Routes;