import React, { Dispatch, SetStateAction, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from '../../Styles/Componentes';

interface Passo1Props {
    setDadosPasso1: Dispatch<SetStateAction<{ massa1: number; massa2: number; massa3: number }>>;
}

const Passo1: React.FC<Passo1Props> = ({ setDadosPasso1 }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [massa1, setMassa1] = useState<number | ''>(0); 
    const [massa2, setMassa2] = useState<number | ''>(0); 
    const [massa3, setMassa3] = useState<number | ''>(0); 

    const handleCheckboxToggle = () => {
        setIsChecked(!isChecked);
    };

    const handleInputChange = () => {
        if (typeof massa1 === 'number' && typeof massa2 === 'number' && typeof massa3 === 'number') {
            setDadosPasso1({ massa1, massa2, massa3 });
        }
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
            <TextInput
                placeholder={'Massa Recipiente 1ª Determinação (M3)'}
                value={massa1 !== '' ? massa1.toString() : ''}
                keyboardType="numeric"
                onChangeText={(text) => setMassa1(text !== '' ? parseFloat(text) : '')}
                style={styles.textImputEnsaio}
                onBlur={handleInputChange}
            />
            <TextInput
                placeholder={'Massa Recipiente 2ª Determinação (M3)'}
                value={massa2 !== '' ? massa2.toString() : ''}
                keyboardType="numeric"
                onChangeText={(text) => setMassa2(text !== '' ? parseFloat(text) : '')}
                style={styles.textImputEnsaio}
                onBlur={handleInputChange}
            />
            <TextInput
                placeholder={'Massa Recipiente 3ª Determinação (M3)'}
                value={massa3 !== '' ? massa3.toString() : ''}
                keyboardType="numeric"
                onChangeText={(text) => setMassa3(text !== '' ? parseFloat(text) : '')}
                style={styles.textImputEnsaio}
                onBlur={handleInputChange}
            />
        </View>
    );
};

export default Passo1;
