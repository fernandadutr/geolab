import React, { Dispatch, SetStateAction, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from '../../Styles/Componentes';

interface Passo1Props {
    setDadosPasso1: Dispatch<SetStateAction<{ massa1: string; massa2: string; massa3: string }>>;
}

const Passo1: React.FC<Passo1Props> = ({ setDadosPasso1 }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [massa1, setMassa1] = useState('');
    const [massa2, setMassa2] = useState('');
    const [massa3, setMassa3] = useState('');

    const handleCheckboxToggle = () => {
        setIsChecked(!isChecked);
    };

    const handleInputChange = () => {
        setDadosPasso1({ massa1, massa2, massa3 });
    };

    return (
        <View style={{ marginVertical: 25 }}>
            <Text
                style={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    padding: 7,
                    backgroundColor: '#F2F8C6',
                    borderRadius: 20,
                }}>
                Passo 1
            </Text>
            <CheckBox
                title={
                    'É necessário efetuar no mínimo três determinações do teor de umidade por amostra. Portanto, pese os 3 recipientes que serão utilizados para as determinações (cápsula metálica com tampa) e anote as massas nos campos a seguir:'
                }
                checked={isChecked}
                onPress={handleCheckboxToggle}
                checkedColor="#A8B444"
                containerStyle={{ borderRadius: 9 }}
            />
            <TextInput
                placeholder={'Massa Recipiente 1ª Determinação (M3)'}
                value={massa1}
                keyboardType="numeric"
                onChangeText={(text) => {
                    setMassa1(text);
                    handleInputChange();
                }}
                style={styles.textImputEnsaio}
            />
            <TextInput
                placeholder={'Massa Recipiente 2ª Determinação (M3)'}
                value={massa2}
                keyboardType="numeric"
                onChangeText={(text) => {
                    setMassa2(text);
                    handleInputChange();
                }}
                style={styles.textImputEnsaio}
            />
            <TextInput
                placeholder={'Massa Recipiente 3ª Determinação (M3)'}
                value={massa3}
                keyboardType="numeric"
                onChangeText={(text) => {
                    setMassa3(text);
                    handleInputChange();
                }}
                style={styles.textImputEnsaio}
            />
        </View>
    );
};

export default Passo1;
