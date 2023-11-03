import React, { useState } from 'react';
import { Image, View, Text, TextInput } from 'react-native';
import styles from '../Styles/Componentes';

interface InputPeneiraProps {
  numero: string;
  id: number;
  massaRetida: string;
  onMassaRetidaChange: (id: number, massaRetida: string) => void;
}

const InputPeneira: React.FC<InputPeneiraProps> = ({ numero, id, massaRetida, onMassaRetidaChange }) => {
  return (
    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
      <Image style={{ marginVertical: 12, marginRight: 4 }} source={require('./iconePeneira.png')} />
      <Text style={{ marginVertical: 16 }}>{numero}</Text>
      <TextInput
        placeholder={`Massa retida na peneira de ${numero} mm.`}
        style={styles.textImputEnsaio}
        keyboardType="numeric"
        value={massaRetida}
        onChangeText={(text) => {
          onMassaRetidaChange(id, text);
        }}
      />
    </View>
  );
};

export default InputPeneira;


