import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Register from './pages/Register';
import List from './pages/List';

const AppStack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: "#CEA2AC",
          },
          headerShown: false,
        }}
      >
        <AppStack.Screen name="Login" component={Login}/>
        <AppStack.Screen name="Register" component={Register}/>
        <AppStack.Screen name="List" component={List}/>
      </AppStack.Navigator>
    </NavigationContainer>
      );
}

export default Routes;