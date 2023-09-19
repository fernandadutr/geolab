import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Hello from './Paginas/Hello';
import HomeScreen from './Paginas/Home';


export type RootStackParamList = {
  Hello: undefined;
  Home: { nomeUsuario: string };
  Auth: undefined;
  };

  const Stack = createNativeStackNavigator();


const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Hello"
          component={Hello}
          options={{ headerShown: false}}
        />
        <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{ headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;