import React, { useEffect, useState } from 'react';
import { Text, CheckBox, Button } from 'react-native-elements';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { useEnsaios } from '../../../Context/EnsaiosContext';

type CheckboxesState = {
    checkbox1: boolean;
    checkbox2: boolean;
};

const Passo3PG: React.FC = () => {
    const [checkboxes, setCheckboxes] = useState<CheckboxesState>({
        checkbox1: false,
        checkbox2: false,
    });

    const [teste, setTeste] = useState<any>();

    const handleCheckboxToggle = (checkboxName: keyof CheckboxesState) => {
        setCheckboxes({
            ...checkboxes,
            [checkboxName]: !checkboxes[checkboxName],
        });
    };

    const { mt, mg, w, ms, setMs } = useEnsaios();

    const calcularMs = (Mt: number, Mg: number, W: number): number => {
        return ((((Mt - Mg) / (100 + W)) * 100) + Mg)
    };

    const handleCalcular = () => {
        const Mt = 1000;
        const Mg = 600;
        const W = 2.4;

        if (!isNaN(Mt) && !isNaN(Mg) && !isNaN(W)) {
            const resultadoMs = calcularMs(Mt, Mg, W);
            setMs(resultadoMs.toFixed(2).toString());
            setTeste(resultadoMs.toFixed(2).toString());
        }
    };

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
                Passo 3
            </Text>
            <CheckBox
                title="Para calcular a massa total da amostra seca, utiliza-se a equação a seguir:"
                checked={checkboxes.checkbox1}
                checkedColor="#A8B444"
                containerStyle={{ borderRadius: 9, height: 'auto' }}
                onPress={() => handleCheckboxToggle('checkbox1')}
            />
            <Text style={{ padding: 16, borderRadius: 9, backgroundColor: '#E6EAC3' }}>
                <Text style={{ fontWeight: 'bold', alignSelf: 'flex-end' }}>Ms =</Text>{' '}
                <Text style={{ fontStyle: 'italic' }}> (Mt - Mg) x 100 + Mg</Text>
                {'\n'}
                <Text style={{ fontWeight: 'bold' }}>  _______________________________</Text>
                {'\n'}
                <Text style={{ marginLeft: 40 }}>                    (100 + W)</Text>
                {'\n\n'}
                <Text style={{ fontSize: 11 }}>
                    <Text style={{ fontWeight: 'bold' }}>Ms</Text> é a massa total da amostra seca;{'\n'}
                    <Text style={{ fontWeight: 'bold' }}>Mt</Text> é a massa da amostra seca em temperatura ambiente;{'\n'}
                    <Text style={{ fontWeight: 'bold' }}>Mg</Text> é a massa do material seco retido na peneira de 2,00mm; {'\n'}
                    <Text style={{ fontWeight: 'bold' }}>w</Text> é a umidade higroscópica do material passado
                    na peneira de 2,00mm, expresso em porcentagem (%);{'\n'}
                </Text>
            </Text>
            <TouchableOpacity
            onPress={()=> handleCalcular()}
                style={{
                    borderRadius: 50,  
                    backgroundColor: '#A8B444',
                    paddingVertical: 35,
                    width: 100,  
                    alignSelf: 'center',  
                    marginTop: 20,
                }}>
                <Text style={{alignSelf: 'center', color: 'white', fontWeight: 'bold' }}>Calcular</Text>
            </TouchableOpacity>

            {teste && (
                <View style={{ display: 'flex', flexDirection: 'column', marginTop: 10 }}>
                    <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 20, color: 'green', }}>
                        O valor calculado de Ms é:
                    </Text>
                    <Text style={{ fontSize: 20, textAlign: 'center' }}> {teste} </Text>
                </View>
            )}
        </ScrollView>
    );
};

export default Passo3PG;
