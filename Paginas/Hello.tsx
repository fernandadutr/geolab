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
    const [email, setEmail] = useState('');
    const { setUserName } = useUser();

    const navigation = useNavigation<authScreenProp>();

    const isEmailValid = (email: string) => {
        const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        return emailRegex.test(email);
    };

    const handleEntrar = () => {
        if (nomeUsuario !== '' && isEmailValid(email)) {
            setUserName(nomeUsuario);
            setEmail(email);
            navigation.navigate('Home');
        }
    };

    return (
        <View style={styles.container}>
            <Image style={{ width: 100, height: 100 }} source={require('../assets/adaptive-icon.png')} />
                <Image style={{ width: 100, height: 20, marginBottom: 5 }} source={require('../assets/geolab.png')} />
            <TextInput
                style={styles.input}
                placeholder='Qual seu nome?'
                value={nomeUsuario}
                onChangeText={(text) => setNomeUsuario(text)}
            />
            <TextInput
                style={styles.input}
                placeholder='Qual seu email?'
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TouchableOpacity
                style={styles.radius20button}
                disabled={nomeUsuario === '' || !isEmailValid(email)}
                onPress={handleEntrar}
            >
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Hello;
