import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Animated, Easing } from 'react-native';
import styles from '../Styles/Componentes';
import { Ensaio } from '../FakeDB/EnsaiosDB';
import Collapsible from 'react-native-collapsible';

interface ResultadoProps {
    Ensaio: Ensaio;
}

const Resultado: React.FC<ResultadoProps> = ({ Ensaio }) => {
    const [rotacaoAnim] = useState(new Animated.Value(0));
    const [estaGirando, setEstaGirando] = useState(false);
    const [estaExpandido, setEstaExpandido] = useState(false);

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
        setEstaExpandido(!estaExpandido); // Alternar a expansão quando clicado
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
                <Text style={{ margin: 15 }}>Data: {Ensaio.data.toString()}</Text>
            </Collapsible>
        </View>
    );
};

export default Resultado;
