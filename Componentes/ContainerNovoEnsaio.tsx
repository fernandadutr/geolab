import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../Styles/Componentes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';

interface tittleProp {
    title: string
}
type authScreenProp = NativeStackNavigationProp<RootStackParamList, 'Auth'>;



const ContainerNovoEnsaio: React.FC = () => {
    const navigation = useNavigation<authScreenProp>();
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('EscolherEnsaio')}

            style={styles.ensaioContainer}
        >
            <Text style={styles.ensaioConteinerText}>Novo Ensaio</Text>
            <Image style={styles.imgSeta} source={require('../Styles/imagens/seta.png')} />
        </TouchableOpacity>
    );
};

export default ContainerNovoEnsaio;
