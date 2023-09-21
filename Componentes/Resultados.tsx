import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../Styles/Componentes';

interface ResultadoProps {
    title: string;
}

const Resultado: React.FC<ResultadoProps> = ({ title }) => {
    return (
        <TouchableOpacity
            style={styles.ensaioContainerX}
        >
            <Text style={styles.ensaioConteinerText}>{title}</Text>
            <Image style={styles.imgSeta} source={require('../Styles/imagens/seta.png')} />
        </TouchableOpacity>
    );
};

export default Resultado;