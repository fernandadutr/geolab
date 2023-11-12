import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Peneira } from '../../../Context/PeneirasContext';
import { useResultados } from '../../../Context/ResultadosContext';

interface PeneiraComponentProps {
  peneira: Peneira;
  ms: string;
}

const PeneiraComponent: React.FC<PeneiraComponentProps> = ({ peneira, ms }) => {
  const { setResultadoPeneira } = useResultados();
  const [resultado, setResultado] = useState<any>('');

  const calculoTeste = (ms: number, mr: number) => {
    const qg = (((ms - mr) / ms) * 100);
    return qg.toFixed(2);
  }

  useEffect(() => {

    const resultadoCalculado = calculoTeste(parseFloat(ms), parseFloat(peneira.massaRetida));
    setResultado(resultadoCalculado);
    setResultadoPeneira(peneira.id, peneira.numero, resultadoCalculado);
  }, [ms]);  


  return (
    <View key={peneira.id} style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
      <Image style={{ marginRight: 4 }} source={require('../../iconePeneira.png')} />
      <Text>{`${peneira.numero}`}</Text>
      <Text style={{ marginLeft: 5 }}>{`${resultado}`}</Text>
    </View>
  );
};

export default PeneiraComponent;
