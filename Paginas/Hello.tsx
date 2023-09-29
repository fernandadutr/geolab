import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import styles from '../Styles/Componentes';
import { useUser } from '../Context/Context';

type authScreenProp = NativeStackNavigationProp<RootStackParamList, 'Auth'>;

const Hello: React.FC = () => {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const { setUserName } = useUser(); 

    const navigation = useNavigation<authScreenProp>();

    const handleEntrar = () => {
        if (nomeUsuario !== '') {
            setUserName(nomeUsuario); 
            navigation.navigate('Home');
        }
    };

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
                onPress={handleEntrar}
            >
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Hello;
