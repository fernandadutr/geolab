import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../Styles/Componentes';

interface tittleProp {
    title: string
}

const ContainerNovoEnsaioX: React.FC = () => {
    return (
        <TouchableOpacity
            style={styles.ensaioContainerX}
        >
            <Text style={styles.ensaioConteinerText}>Ensaio 1</Text>
            <Image style={styles.imgSeta} source={require('../Styles/imagens/seta.png')} />
        </TouchableOpacity>
    );
};

export default ContainerNovoEnsaioX;
