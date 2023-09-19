// HomeScreen.tsx
import React from 'react';
import { View } from 'react-native';
import CustomHeader from '../Componentes/CustomHeader';
import styles from '../Styles/Componentes';
import ContainerResultados from '../Componentes/ContainerResultados';
import ContainerNovoEnsaio from '../Componentes/ContainerNovoEnsaio';

const HomeScreen: React.FC<{ route: any }> = ({ route }) => {
  const { nomeUsuario } = route.params;

  return (
    <View style={styles.containerHome}>
        <CustomHeader title={`Ola, ${nomeUsuario}`}/>
        <ContainerNovoEnsaio/>
        <ContainerResultados />
    </View>
  );
};

export default HomeScreen;
