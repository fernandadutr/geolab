import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../Styles/Componentes';
import { CheckBox } from 'react-native-elements';

interface ResultadoProps {
    title: string;
}

const Amostra: React.FC<ResultadoProps> = ({ title }) => {
    const ensaioConcluido = ["Massa/Peso Especifíco"];

    return (
        <TouchableOpacity
            style={styles.ensaioContainerX}
        >
            <View style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center', height: 50 }}>
                <CheckBox
                    checked={ensaioConcluido.includes(title)}
                    size={15}
                    checkedColor='green'
                    uncheckedColor='black' />
                <Text style={{ marginVertical: 10, fontSize: 16 }}>{title}</Text>
            </View>
            <Image style={styles.imgSeta} source={require('../Styles/imagens/seta.png')} />
        </TouchableOpacity>
    );
};

export default Amostra;