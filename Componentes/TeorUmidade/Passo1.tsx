import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from '../../Styles/Componentes';

const Passo1: React.FC = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxToggle = () => {
        setIsChecked(!isChecked);
    };

    return (
        <View style={{ marginVertical: 25 }}>
            <Text
                style={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    padding: 6,
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
            <TextInput placeholder={'Massa Recipiente 1ª Determinação (M1)'} style={styles.textImputEnsaio}/>
            <TextInput placeholder={'Massa Recipiente 2ª Determinação (M2)'} style={styles.textImputEnsaio}/>
            <TextInput placeholder={'Massa Recipiente 3ª Determinação (M3)'} style={styles.textImputEnsaio}/>

        </View>
    );
};

export default Passo1;

