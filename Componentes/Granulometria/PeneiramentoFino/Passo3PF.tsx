import React, { useState } from 'react';
import { Text, CheckBox } from 'react-native-elements';
import { ScrollView } from 'react-native';
import styles from '../../../Styles/Componentes';
import { useEnsaios } from '../../../Context/PeneirasContext';
import InputPeneira from '../../InputPeneira';

type CheckboxesState = {
    checkbox1: boolean;
    checkbox2: boolean;
};

const Passo3PF: React.FC = () => {
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

    const { ensaiosFino, setMassaTotalFino } = useEnsaios();

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
                Passo 3
            </Text>
            <CheckBox
                title="Utilizando o agitador mecânico, passe o material nas peneiras de 1,2mm, 0,6mm, 0,42mm, 0,25mm, 0,15mm e 0,075mm."
                checked={checkboxes.checkbox1}
                checkedColor="#A8B444"
                containerStyle={{ borderRadius: 9, height: 'auto' }}
                onPress={() => handleCheckboxToggle('checkbox1')}
            />
            <CheckBox
                title="Anote as massas RETIDAS em cada peneira abaixo:"
                checked={checkboxes.checkbox2}
                checkedColor="#A8B444"
                containerStyle={{ borderRadius: 9, height: 'auto' }}
                onPress={() => handleCheckboxToggle('checkbox2')}
            />
            {ensaiosFino.map((peneira) => (
                <InputPeneira
                    key={peneira.id}
                    numero={peneira.numero}
                    id={peneira.id}
                    massaRetida={peneira.massaRetida}
                    onMassaRetidaChange={setMassaTotalFino}
                />
            ))}
        </ScrollView>
    );
};

export default Passo3PF;
