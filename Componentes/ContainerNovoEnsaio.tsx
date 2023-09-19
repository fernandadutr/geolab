import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../Styles/Componentes';

interface tittleProp {
    title: string
}

const ContainerNovoEnsaio: React.FC = () => {
    return (
        <TouchableOpacity
            style={styles.ensaioContainer}
        >
            <Text style={styles.ensaioConteinerText}>Novo Ensaio</Text>
            <Image style={styles.imgSeta} source={require('../Styles/imagens/seta.png')} />
        </TouchableOpacity>
    );
};

export default ContainerNovoEnsaio;
