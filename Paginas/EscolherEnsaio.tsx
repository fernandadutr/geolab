import { View, Text } from "react-native";
import Ensaios from "../Utilidade/Ensaios";
import styles from "../Styles/Componentes";
import React from "react";
import Amostra from "../Componentes/Amostra";

const EscolherEnsaio: React.FC = () => {
  return (
    <View style={styles.containerHome}>
      <Text style={styles.title}>Escolha o Ensaio: </Text>
      <View style={styles.containerResultados}>
        {
          Ensaios.map(ensaio => <Amostra title={ensaio.nome} />)
        }
      </View>
    </View>
  );
}
export default EscolherEnsaio;