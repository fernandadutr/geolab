import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Hello from './Paginas/Hello';
import HomeScreen from './Paginas/Home';
import EscolherEnsaio from './Paginas/EscolherEnsaio';
import TeorUmidade from './Paginas/TeorUmidade';
import { UserProvider } from './Context/Context';
import { EnsaiosProvider } from './Context/EnsaiosContext';
import Granulometria from './Paginas/Granulometria';
import PrepararAmostra from './Paginas/PrepararAmostra';


export type RootStackParamList = {
  Hello: undefined;
  Home: undefined;
  Auth: undefined;
  EscolherEnsaio: undefined;
  TeorUmidade: undefined;
  Granulometria: undefined;
  PrepararAmostra: undefined;
};

const Stack = createNativeStackNavigator();


const MyStack = () => {
  if (__DEV__) {
    require('react-devtools');
  }
  return (
    <UserProvider>
      <EnsaiosProvider>
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
            <Stack.Screen
              name='Granulometria'
              component={Granulometria}
              options={{ title: 'Análise Granulométrica' }}
            />
            <Stack.Screen
              name='PrepararAmostra'
              component={PrepararAmostra}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </EnsaiosProvider>
    </UserProvider>
  );
};

export default MyStack;