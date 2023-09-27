import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../Styles/Componentes';
import Resultado from './Resultados';
import EnsaiosDB from '../FakeDB/EnsaiosDB';



interface tittleProp {
    title: string
}

const ContainerResultados: React.FC = () => {
    const ensaios = EnsaiosDB
    return (
        <View
            style={styles.containerResultados}
        >
            <Text style={styles.title}>Meus Resultados</Text>
            <View>
                {
                    ensaios.map((ensaio) => <Resultado key={ensaio.id} Ensaio={ensaio} />)
                }
            </View>
        </View>
    );
};

export default ContainerResultados;
