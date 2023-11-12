import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { CheckBox, Text } from 'react-native-elements';
import { useEnsaios } from '../../../Context/EnsaiosContext';
import PeneiraComponent from './Peneira';
import { usePeneiras } from '../../../Context/PeneirasContext';

type CheckboxesState = {
    checkbox1: boolean;
    checkbox2: boolean;
};

const Passo4PG: React.FC = () => {
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

    const { ms } = useEnsaios();
    const { ensaiosGrosso } = usePeneiras();


    return (
        <ScrollView style={{ padding: 20 }}>
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
                title="As porcentagens de materiais que passam nas peneiras de 50 mm, 38 mm, 25 mm, 19 mm, 9,5 mm, 4,8 mm e 2,0 mm, são calculadas a partir da expressão a seguir:"
                checked={checkboxes.checkbox1}
                checkedColor="#A8B444"
                containerStyle={{ borderRadius: 9, height: 'auto' }}
                onPress={() => handleCheckboxToggle('checkbox1')}
            />
            <Text style={{ padding: 16, borderRadius: 9, backgroundColor: '#E6EAC3' }}>
                <Text style={{ fontStyle: 'italic' }}>Qg = Ms - Mr x 100</Text>
                {'\n'}
                <Text style={{ fontWeight: 'bold' }}>  __________________</Text>
                {'\n'}
                <Text style={{ marginLeft: 40 }}>               Ms</Text>
                {'\n\n'}
                <Text style={{ fontSize: 11 }}>
                    <Text style={{ fontWeight: 'bold' }}>Qg</Text> é a porcentagem de material passado em cada peneira;{'\n'}
                    <Text style={{ fontWeight: 'bold' }}>Ms</Text> é a massa total da amostra seca;{'\n'}
                    <Text style={{ fontWeight: 'bold' }}>Mr</Text> é a massa do material retido acumulado em cada peneira.{'\n'}
                </Text>
            </Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 20 }}>
                {ensaiosGrosso.map((peneira) => (
                    <PeneiraComponent key={peneira.id} peneira={peneira} ms={ms} />
                ))}
            </View>
        </ScrollView>
    );
};

export default Passo4PG;
