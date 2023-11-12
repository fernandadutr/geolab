import React, { useState } from 'react';
import { Image, View, Text } from 'react-native';
import { CheckBox,  Input } from 'react-native-elements';
import styles from '../../../Styles/Componentes';
import { useEnsaios } from '../../../Context/EnsaiosContext';

type CheckboxesState = {
    checkbox1: boolean;
    checkbox2: boolean;
    checkbox3: boolean;
};

const Passo2: React.FC = () => {
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

    const { ensaios, setMt: setMassaTotal } = useEnsaios();
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
                Passo 2
            </Text>
            <CheckBox
                key={1}
                title={'Passe o material na peneira de 76 mm e despreze a parte retida.'}
                checked={checkboxes.checkbox1}
                checkedColor="#A8B444"
                containerStyle={{ borderRadius: 9, height: 'auto' }}
                onPress={() => handleCheckboxToggle('checkbox1')}
            />
            <CheckBox
                key={2}
                title={'Do material passado na peneira de 76 mm, tome uma quantidade, observando os grãos maiores, conforme indica a Tabela a seguir:'}
                checked={checkboxes.checkbox2}
                checkedColor="#A8B444"
                containerStyle={{ borderRadius: 9, height: 'auto' }}
                onPress={() => handleCheckboxToggle('checkbox2')}
            />
            <Image style={{ alignSelf: 'center' }} source={require('../PrepararAmostra/tabela1.png')}/>

            <CheckBox
                key={3}
                title={'Pese a amostra e anote a sua massa no campo a seguir:'}
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
                    setMassaTotal(text);
                }}
            />
        </View>
    );
};

export default Passo2;
