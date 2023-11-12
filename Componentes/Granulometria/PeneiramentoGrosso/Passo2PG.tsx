import React, { useState } from 'react';
import { Text, CheckBox } from 'react-native-elements';
import { ScrollView } from 'react-native';
import { usePeneiras } from '../../../Context/PeneirasContext';
import InputPeneira from '../../InputPeneira';

type CheckboxesState = {
    checkbox1: boolean;
    checkbox2: boolean;
};

const Passo2PG: React.FC = () => {
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

    const { ensaiosGrosso, setMassaTotalGrosso } = usePeneiras();

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
                Passo 2
            </Text>
            <CheckBox
                title="Utilizando o agitador mecânico, passe o material nas
                peneiras 50mm, 38mm, 25mm, 19mm, 9,5mm e 4,8mm."
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
            {checkboxes.checkbox1 ? (
                ensaiosGrosso.map((peneira) => (
                    <InputPeneira
                        key={peneira.id}
                        numero={peneira.numero}
                        id={peneira.id}
                        massaRetida={peneira.massaRetida}
                        onMassaRetidaChange={setMassaTotalGrosso}
                    />
                ))
            ) : null}
        </ScrollView>
    );
};

export default Passo2PG;
