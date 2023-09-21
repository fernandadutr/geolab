import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import styles from '../Styles/Componentes';

type authScreenProp = NativeStackNavigationProp<RootStackParamList, 'Auth'>;

const Hello: React.FC = () => {
    const [nomeUsuario, setNomeUsuario] = useState('');


    const navigation = useNavigation<authScreenProp>();

    return (
        <View style={styles.container}>
            <Image style={{ width: 100, height: 100 }} source={require('../Styles/imagens/logo.png')} />
            <Text style={styles.title}>AjudanteLab</Text>
            <TextInput
                style={styles.input}
                placeholder='Qual seu nome?'
                value={nomeUsuario}
                onChangeText={(text) => setNomeUsuario(text)}
            />
            <TouchableOpacity
                style={styles.radius20button}
                disabled={nomeUsuario === ''}
                onPress={() => navigation.navigate('Home', { nomeUsuario: nomeUsuario })}
            >
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Hello;
