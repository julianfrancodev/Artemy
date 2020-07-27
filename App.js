import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoarding from './src/Authentication/OnBoarding';
import { StatusBar } from 'react-native';

const AuthStack = createStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <AuthStack.Navigator headerMode='none'>
        <AuthStack.Screen name={"OnBoarding"} component={OnBoarding} />
      </AuthStack.Navigator>
    </>
  )

}

export default function App() {
  return (
    <NavigationContainer>
      <AuthenticationNavigator />
    </NavigationContainer>
  );
}

