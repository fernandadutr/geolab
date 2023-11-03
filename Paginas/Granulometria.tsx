import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from '../Styles/Componentes';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


interface ResultadoProps {
    title: string;
    enable: boolean;
    route: keyof RootStackParamList;
}

export type authScreenProp = NativeStackNavigationProp<RootStackParamList, 'Auth'>;

const Granulometria: React.FC = () => {
    const navigation = useNavigation<authScreenProp>();


    return (
        <SafeAreaView style={{ display: 'flex', flexDirection: "column" }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: 10 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('PrepararAmostra')}
                    style={{ width: '40%', backgroundColor: '#F2F6CD', alignContent: 'center', borderRadius: 8, padding: 26, marginRight: 10 }}
                >
                    <Text >Preparação da
                        amostra
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ width: '40%', backgroundColor: '#F2F6CD', alignContent: 'center', borderRadius: 8, padding: 26 }}
                >
                    <Text style={{ width: '50%', backgroundColor: '#F2F6CD' }}>Teor de Umidade</Text>
                </TouchableOpacity>
            </View >
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: 10 }}>

                <TouchableOpacity
                    style={{ width: '40%', backgroundColor: '#F2F6CD', alignContent: 'center', borderRadius: 8, padding: 26, marginRight: 10 }}
                >
                    <Text >Peneiramento
                        Grosso</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ width: '40%', backgroundColor: '#F2F6CD', alignContent: 'center', borderRadius: 8, padding: 26 }}
                >
                    <Text >Sedimentação</Text>
                </TouchableOpacity>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: 10 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('PeneiramentoFino')}
                    style={{ width: '40%', backgroundColor: '#F2F6CD', alignContent: 'center', borderRadius: 8, padding: 26, marginRight: 10 }}
                >
                    <Text >Peneiramento
                        Fino
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ width: '40%', backgroundColor: '#F2F6CD', alignContent: 'center', borderRadius: 8, padding: 26 }}
                >
                    <Text >Gerar Curva
                        Granulométrica
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );

}

export default Granulometria;