import React, { useState } from 'react';
import { Text, CheckBox } from 'react-native-elements';
import { usePeneiras } from '../../../Context/PeneirasContext';
import { useEnsaios } from '../../../Context/EnsaiosContext';
import { ScrollView, View } from 'react-native';
import PeneiraComponentFino from '../PeneiramentoGrosso/PeneiraFina';

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

    const { ensaiosFino, setMassaTotalFino } = usePeneiras();
    const { mw, mg, w, ms, setMs } = useEnsaios();

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
                CALCULO DA PORCENTAGEM DE PASSANTES
            </Text>
            <CheckBox
                title="As porcentagens de materiais que passam nas peneiras 
                de 1,2mm, 0,6mm, 0,42mm, 0,25mm, 0,15mm
                e 0,075mm, são calculadas a partir da expressão a seguir:"
                checked={checkboxes.checkbox1}
                checkedColor="#A8B444"
                containerStyle={{ borderRadius: 9, height: 'auto' }}
                onPress={() => handleCheckboxToggle('checkbox1')}
            />
            <Text style={{ padding: 16, borderRadius: 9, backgroundColor: '#E6EAC3' }}>
                <Text style={{ fontWeight: 'bold', alignSelf: 'flex-end' }}>Qf =</Text>{' '}
                <Text style={{ fontStyle: 'italic' }}>Mw x 100 - Mr (100+W) x N</Text>
                {'\n'}
                <Text style={{ fontWeight: 'bold' }}>  _______________________________</Text>
                {'\n'}
                <Text style={{ marginLeft: 40 }}>                    Mw x 100</Text>
                {'\n\n'}
                <Text style={{ fontSize: 11 }}>

                    <Text style={{ fontWeight: 'bold' }}>Qf</Text> é a porcentagem de material passado em cada peneira;{'\n'}
                    <Text style={{ fontWeight: 'bold' }}>Mw</Text> é a massa do material úmido submetido à sedimentação;{'\n'}
                    <Text style={{ fontWeight: 'bold' }}>Mr</Text> é a massa do material retido acumulado em cada peneira;{'\n'}
                    <Text style={{ fontWeight: 'bold' }}>N</Text> é a porcentagem de material que passa na peneira 2,0mm,{'\n'}
                    calculada no Peneiramento Grosso.
                </Text>
                <Text>{ensaiosFino[1].massaRetida}</Text>
            </Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 20 }}>
                {checkboxes.checkbox1 && ensaiosFino.map((peneira) => (
                    <PeneiraComponentFino key={peneira.id} peneira={peneira} ms={peneira.massaRetida} />
                ))}
            </View>
        </ScrollView>
    );
};

export default Passo3PF;
