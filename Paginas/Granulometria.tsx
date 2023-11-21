import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { usePassosConcluidos } from '../Context/ResultadosContext';

interface ResultadoProps {
  title: string;
  enable: boolean;
  route: keyof RootStackParamList;
}

export type authScreenProp = NativeStackNavigationProp<RootStackParamList, 'Auth'>;

const Granulometria: React.FC = () => {
  const navigation = useNavigation<authScreenProp>();
  const { preparacaoAmostraConcluido, teorUmidadeConcluido, peneiramentoGrossoConcluido, sedimentacaoConcluido, peneiramentoFinoConcluido } = usePassosConcluidos();

  return (
    <SafeAreaView style={{ display: 'flex', flexDirection: 'column' }}>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('PrepararAmostra')}
          style={{
            width: '40%',
            backgroundColor: '#F2F6CD',
            alignContent: 'center',
            borderRadius: 8,
            padding: 26,
            marginRight: 10,
          }}
        >
          <Text>Preparação da amostra</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('TeorUmidade')}
          style={{
            width: '40%',
            backgroundColor: preparacaoAmostraConcluido ? '#F2F6CD' : '#F1F5F4',
            alignContent: 'center',
            borderRadius: 8,
            padding: 26,
          }}
          disabled={!preparacaoAmostraConcluido}
        >
          <Text>Teor de Umidade</Text>
        </TouchableOpacity>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('PeneiramentoGrosso')}
          style={{
            width: '40%',
            backgroundColor: teorUmidadeConcluido && preparacaoAmostraConcluido ? '#F2F6CD' : '#F1F5F4',
            alignContent: 'center',
            borderRadius: 8,
            padding: 26,
            marginRight: 10,
          }}
          disabled={!teorUmidadeConcluido}
        >
          <Text>Peneiramento Grosso</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '40%',
            backgroundColor: sedimentacaoConcluido ? '#F2F6CD' : '#F1F5F4',
            alignContent: 'center',
            borderRadius: 8,
            padding: 26,
          }}
          disabled={!sedimentacaoConcluido}
        >
          <Text>Sedimentação</Text>
        </TouchableOpacity>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('PeneiramentoFino')}
          style={{
            width: '40%',
            backgroundColor: peneiramentoGrossoConcluido ? '#F2F6CD' : '#F1F5F4',
            alignContent: 'center',
            borderRadius: 8,
            padding: 26,
            marginRight: 10,
          }}
          disabled={!peneiramentoGrossoConcluido}
        >
          <Text>Peneiramento Fino</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '40%',
            backgroundColor: peneiramentoFinoConcluido ? '#F2F6CD' : '#F1F5F4',
            alignContent: 'center',
            borderRadius: 8,
            padding: 26,
          }}
          disabled={!peneiramentoFinoConcluido}
          onPress={() => navigation.navigate('CurvaGranulometrica')}
        >
          <Text>Gerar Curva Granulométrica</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Granulometria;
