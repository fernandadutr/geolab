import React, { useState } from 'react';
import { Text, CheckBox } from 'react-native-elements';
import { ScrollView } from 'react-native';
import { useEnsaios } from '../../../Context/EnsaiosContext';
import { TextInput } from 'react-native';
import styles from '../../../Styles/Componentes';

type CheckboxesState = {
    checkbox1: boolean;
    checkbox2: boolean;
};

const Passo1PG: React.FC = () => {
    const [checkboxes, setCheckboxes] = useState<CheckboxesState>({
        checkbox1: false,
        checkbox2: false,
    });

    const handleCheckboxToggle = (checkboxName: keyof CheckboxesState) => {
        setCheckboxes({
            ...checkboxes,
            [checkboxName]: !checkboxes[checkboxName],
        });
    };

    const { mg, setMg } = useEnsaios();

    const handleMgChange = (value: string) => {
        setMg(value);
    };

    return (
        <ScrollView>
            <Text
                style={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    padding: 6,
                    backgroundColor: '#F2F8C6',
                    borderRadius: 20,
                }}
            >
                Passo 1
            </Text>
            <CheckBox
                title="Lave o material retido na peneira 2,0mm a fim de eliminar o material fino aderente e seque em estufa."
                checked={checkboxes.checkbox1}
                checkedColor="#A8B444"
                containerStyle={{ borderRadius: 9, height: 'auto' }}
                onPress={() => handleCheckboxToggle('checkbox1')}
            />
            <CheckBox
                title="Pese o material e anote a sua massa no campo a seguir:"
                checked={checkboxes.checkbox2}
                checkedColor="#A8B444"
                containerStyle={{ borderRadius: 9, height: 'auto' }}
                onPress={() => handleCheckboxToggle('checkbox2')}
            />
            <TextInput
                style={styles.textImputEnsaio}
                value={mg}
                onChangeText={handleMgChange}
                placeholder="Digite a massa (mg)"
                keyboardType="numeric"
            />
        </ScrollView>
    );
};

export default Passo1PG;
