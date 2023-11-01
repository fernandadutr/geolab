import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { CheckBox,  Input } from 'react-native-elements';
import styles from '../../../Styles/Componentes';
import { useEnsaios } from '../../../Context/EnsaiosContext';

type CheckboxesState = {
    checkbox1: boolean;
    checkbox2: boolean;
    checkbox3: boolean;
};

const Passo3: React.FC = () => {
    const [checkboxes, setCheckboxes] = useState<CheckboxesState>({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
    });

    const handleCheckboxToggle = (checkboxName: keyof CheckboxesState) => {
        setCheckboxes({
            ...checkboxes,
            [checkboxName]: !checkboxes[checkboxName],
        });
    };

    const { mw, setMw } = useEnsaios();
    const [inputValue, setInputValue] = useState('');

    return (
        <View style={{ padding: 20 }}>
            <Text
                style={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    padding: 6,
                    backgroundColor: '#F2F8C6',
                    borderRadius: 20,
                }}>
                Passo 3
            </Text>
            <CheckBox
                key={1}
                title={'Do material PASSANTE na peneira 2,00mm, reserve 120g para ser utilizado no Peneiramento Fino:'}
                checked={checkboxes.checkbox1}
                checkedColor="#A8B444"
                containerStyle={{ borderRadius: 9, height: 'auto' }}
                onPress={() => handleCheckboxToggle('checkbox1')}
            />
            <CheckBox
                key={2}
                title={'Pese o material com resolução de 0,01g e anote a massa a seguir:'}
                checked={checkboxes.checkbox2}
                checkedColor="#A8B444"
                containerStyle={{ borderRadius: 9, height: 'auto' }}
                onPress={() => handleCheckboxToggle('checkbox2')}
            />
            <CheckBox
                key={3}
                title={'Tome ainda cerca de 100g para três determinações da umidade higroscópica (W). '}
                checked={checkboxes.checkbox3}
                checkedColor="#A8B444"
                containerStyle={{ borderRadius: 9, height: 'auto' }}
                onPress={() => handleCheckboxToggle('checkbox3')}
            />

            <Input
                placeholder={'Massa Total da Amostra (Mt)'}
                style={styles.textImputEnsaio}
                keyboardType="numeric"
                value={inputValue}
                onChangeText={(text) => {
                    setInputValue(text);
                    setMw(text);
                }}
            />
        </View>
    );
};

export default Passo3;
