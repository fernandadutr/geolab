import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from '../Styles/Componentes';
import Resultado from './Resultados';
import EnsaiosDB, { Ensaio } from '../FakeDB/EnsaiosDB';
import { useEnsaios } from '../Context/EnsaiosContext';

const ContainerResultados: React.FC = () => {
    const { ensaios, setEnsaios } = useEnsaios();

    useEffect(() => {
        setEnsaios(EnsaiosDB);
    }, []);

    return (
        <View style={styles.containerResultados}>
            <Text style={styles.title}>Meus Resultados</Text>
            <View>
                {ensaios.map((ensaio: Ensaio) => (
                    <Resultado key={ensaio.id} Ensaio={ensaio} />
                ))}
            </View>
        </View>
    );
};

export default ContainerResultados;
