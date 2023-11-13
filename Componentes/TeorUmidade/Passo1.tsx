import React, { useState, useContext } from 'react';
import { View, Text } from 'react-native';
import { CheckBox, Input } from 'react-native-elements';
import styles from '../../Styles/Componentes';
import { useResultados } from '../../Context/ResultadosContext';

const Passo1: React.FC = () => {
    const { setDados1 } = useResultados(); 
    const [isChecked, setIsChecked] = useState(false);
    const [massa1, setMassa1] = useState('');
    const [massa2, setMassa2] = useState('');
    const [massa3, setMassa3] = useState('');

    const handleCheckboxToggle = () => {
        setIsChecked(!isChecked);
    };

    const handleInputChange = () => {
        const massa1C = parseFloat(massa1);
        const massa2C = parseFloat(massa2);
        const massa3C = parseFloat(massa3);

        setDados1({ massa1: massa1C, massa2: massa2C, massa3: massa3C });
    };

    return (
        <View style={{ padding: 20 }}>
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
            <Input
                placeholder={'Massa Recipiente 1ª Determinação (M3)'}
                value={massa1 !== '' ? massa1.toString() : ''}
                keyboardType="numeric"
                onChangeText={(text) => setMassa1(text)}
                style={styles.textImputEnsaio}
                onBlur={handleInputChange}
            />
            <Input
                placeholder={'Massa Recipiente 2ª Determinação (M3)'}
                value={massa2}
                keyboardType="numeric"
                onChangeText={(text) => setMassa2(text)}
                style={styles.textImputEnsaio}
                onBlur={handleInputChange}
            />
            <Input
                placeholder={'Massa Recipiente 3ª Determinação (M3)'}
                value={massa3}
                keyboardType="numeric"
                onChangeText={(text) => setMassa3(text)}
                style={styles.textImputEnsaio}
                onBlur={handleInputChange}
            />
        </View>
    );
};

export default Passo1;
