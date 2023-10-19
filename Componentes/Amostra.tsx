import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../Styles/Componentes';
import { CheckBox } from 'react-native-elements';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';

interface ResultadoProps {
    title: string;
    enable: boolean;
    route: keyof RootStackParamList;
}

type authScreenProp = NativeStackNavigationProp<RootStackParamList, 'Auth'>;


const Amostra: React.FC<ResultadoProps> = ({ title, enable, route }) => {
    const ensaioConcluido: Array<string> = [];

    const navigation = useNavigation<authScreenProp>();

    return (
        <TouchableOpacity
            style={enable ? styles.ensaioContainerX : styles.ensaioContainerY}
            onPress={() => {
                if (enable) {
                    navigation.navigate(route);
                }
            }}
            disabled={!enable}
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