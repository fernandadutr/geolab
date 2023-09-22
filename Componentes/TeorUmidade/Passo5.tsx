import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';

interface Passo5Props {
    dadosPasso1: { massa1: string; massa2: string; massa3: string };
    dadosPasso2: { massa1: string; massa2: string; massa3: string };
    dadosPasso4: { massa1: string; massa2: string; massa3: string };
}

function calcularW(massa1: number, massa2: number, massa3: number): number | null {
    if (massa2 - massa3 === 0) {
        return null;
    }

    const w = ((massa1 - massa2) / (massa2 - massa3)) * 100;

    const wArredondado = Number(w.toFixed(2));

    return wArredondado;
}

function calcularMedia(valor1: number, valor2: number, valor3: number): number {
    const soma = valor1 + valor2 + valor3;
    const media = soma / 3;
    return media;
}

const Passo5: React.FC<Passo5Props> = ({ dadosPasso1, dadosPasso2, dadosPasso4 }) => {
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);

    const handleCheckboxToggle1 = () => {
        setIsChecked1(!isChecked1);
    };

    const handleCheckboxToggle2 = () => {
        setIsChecked2(!isChecked2);
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
                Passo 5
            </Text>
            <CheckBox
                title={'O teor de umidade para cada determinação é calculado a partir da expressão a seguir:'}
                checked={isChecked1}
                onPress={handleCheckboxToggle1}
                checkedColor="#A8B444"
                containerStyle={{ borderRadius: 9 }}
            />
            <Text style={{ padding: 6, borderRadius: 9, backgroundColor: '#E6EAC3' }}>
                w é o teor de umidade, expresso em porcentagem (%);
                M1 é a massa do solo úmido + a massa do recipiente, expressa em gramas (g);
                M2 é a massa do solo seco + a massa do recipiente, expressa em gramas (g);
                M3 é a massa do recipiente, expressa em gramas (g).
            </Text>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ color: '#5F6811' }}>
                    1ª Determinação: Teor de Umidade (w) ={' '}
                    {calcularW(parseFloat(dadosPasso1.massa1), parseFloat(dadosPasso1.massa2), parseFloat(dadosPasso1.massa3))}
                </Text>
                <Text style={{ color: '#5F6811' }}>
                    2ª Determinação: Teor de Umidade (w) ={' '}
                    {calcularW(parseFloat(dadosPasso2.massa1), parseFloat(dadosPasso2.massa2), parseFloat(dadosPasso2.massa3))}
                </Text>
                <Text style={{ color: '#5F6811' }}>
                    3ª Determinação: Teor de Umidade (w) ={' '}
                    {calcularW(parseFloat(dadosPasso4.massa1), parseFloat(dadosPasso4.massa2), parseFloat(dadosPasso4.massa3))}
                </Text>
            </View>

            <CheckBox
                title={'O teor de umidade da amostra é dado pela média das determinações efetuadas:'}
                checked={isChecked2}
                onPress={handleCheckboxToggle2}
                checkedColor="#A8B444"
                containerStyle={{ borderRadius: 9 }}
            />
        </View>
    );
};

export default Passo5;
