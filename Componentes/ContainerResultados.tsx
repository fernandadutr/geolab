import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../Styles/Componentes';
import Resultado from './Resultados';


interface tittleProp {
    title: string
}

const ContainerResultados: React.FC = () => {
    return (
        <View
        style={styles.containerResultados}
        >
            <Text style={styles.title}>Meus Resultados</Text>
            <View>
                <Resultado title='Ensaio 1'/>
            </View>
        </View>
    );
};

export default ContainerResultados;
