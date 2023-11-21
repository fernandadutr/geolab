import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Animated, Easing } from 'react-native';
import styles from '../Styles/Componentes';
import { Ensaio } from '../FakeDB/EnsaiosDB';
import Collapsible from 'react-native-collapsible';
import { useNavigation } from '@react-navigation/native';
import { authScreenProp } from '../Paginas/Granulometria';

interface ResultadoProps {
    Ensaio: Ensaio;
}

const Resultado: React.FC<ResultadoProps> = ({ Ensaio }) => {
    const [rotacaoAnim] = useState(new Animated.Value(0));
    const [estaGirando, setEstaGirando] = useState(false);
    const [estaExpandido, setEstaExpandido] = useState(false);
    const navigation = useNavigation<authScreenProp>();


    const maisEnsaios = () => {
        return navigation.navigate('EscolherEnsaio')

    }

    const girarSeta = () => {
        if (!estaGirando) {
            Animated.timing(rotacaoAnim, {
                toValue: 0.3,
                duration: 300,
                easing: Easing.linear,
                useNativeDriver: false,
            }).start(() => {
                rotacaoAnim.setValue(0.3);
            });
        } else {
            Animated.timing(rotacaoAnim, {
                toValue: 0,
                duration: 300,
                easing: Easing.linear,
                useNativeDriver: false,
            }).start(() => {
                rotacaoAnim.setValue(0);
            });
        }

        setEstaGirando(!estaGirando);
        setEstaExpandido(!estaExpandido);
    };

    const rotacao = rotacaoAnim.interpolate({
        inputRange: [0, 0.3],
        outputRange: ['0deg', '90deg'],
    });

    return (
        <View>
            <TouchableOpacity
                style={styles.ensaioContainerX}
                onPress={girarSeta}
            >
                <Text style={styles.ensaioConteinerText}>{Ensaio.nome}</Text>
                <Animated.Image
                    style={{ ...styles.imgSeta, transform: [{ rotate: rotacao }] }}
                    source={require('../Styles/imagens/seta.png')}
                />
            </TouchableOpacity>
            <Collapsible collapsed={!estaExpandido}>
                <Text style={{ margin: 15 }}>Nome do Usuario: {Ensaio.usuario}</Text>
                <Text style={{ margin: 15 }}>Data: {Ensaio.data.toString()}</Text>
                <TouchableOpacity
                    onPress={() => maisEnsaios()}
                    style={{ padding: 4, backgroundColor: '#A8B444', borderRadius: 8, alignItems: 'center', maxWidth: 200, alignSelf: 'center' }}
                >
                    <Text>Mais Ensaios</Text>
                </TouchableOpacity>
            </Collapsible>
        </View>
    );
};

export default Resultado;
