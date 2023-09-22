import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Hello from './Paginas/Hello';
import HomeScreen from './Paginas/Home';
import EscolherEnsaio from './Paginas/EscolherEnsaio';
import TeorUmidade from './Paginas/TeorUmidade';


export type RootStackParamList = {
  Hello: undefined;
  Home: { nomeUsuario: string };
  Auth: undefined;
  EscolherEnsaio: undefined;
  TeorUmidade: undefined;
};

const Stack = createNativeStackNavigator();


const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Hello"
          component={Hello}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='EscolherEnsaio'
          component={EscolherEnsaio}
          options={{ title: 'Nova Amostra' }}
        />
        <Stack.Screen
          name='TeorUmidade'
          component={TeorUmidade}
          options={{ title: 'Nova Amostra' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;