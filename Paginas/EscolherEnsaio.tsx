import { View, Text, TouchableOpacity, Image } from "react-native";
import Ensaios from "../Utilidade/Ensaios";
import styles from "../Styles/Componentes";
import React from "react";
import Amostra from "../Componentes/Amostra";
import { SafeAreaView } from "react-native-safe-area-context";

const EscolherEnsaio: React.FC = () => {
  return (
    <View style={styles.containerHome}>
      <Text style={styles.title}>Escolha o Ensaio: </Text>
      <View style={styles.containerResultados}>
        {
          Ensaios.map(ensaio => <Amostra title={ensaio.nome} />)
        }
      </View>
      <TouchableOpacity style={styles.ensaioContainer}>
        <Text style={styles.ensaioConteinerText}>Finalizar</Text>
        <Image style={styles.imgSeta} source={require('../Styles/imagens/seta.png')} />
      </TouchableOpacity>
    </View>
  );
}
export default EscolherEnsaio;