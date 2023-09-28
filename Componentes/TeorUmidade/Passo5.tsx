import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
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

const Passo5: React.FC<Passo5Props> = ({ dadosPasso1, dadosPasso2, dadosPasso4 }) => {
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [resultado1, setResultado1] = useState<number | null>(null);
    const [resultado2, setResultado2] = useState<number | null>(null);
    const [resultado3, setResultado3] = useState<number | null>(null);

    const handleCheckboxToggle1 = () => {
        setIsChecked1(!isChecked1);
    };

    const handleCheckboxToggle2 = () => {
        setIsChecked2(!isChecked2);
    };

    const calcularDeterminacoes = () => {
        // Calcular o valor de w para cada determinação
        const w1 = calcularW(parseFloat(dadosPasso1.massa1), parseFloat(dadosPasso1.massa2), parseFloat(dadosPasso1.massa3));
        const w2 = calcularW(parseFloat(dadosPasso2.massa1), parseFloat(dadosPasso2.massa2), parseFloat(dadosPasso2.massa3));
        const w3 = calcularW(parseFloat(dadosPasso4.massa1), parseFloat(dadosPasso4.massa2), parseFloat(dadosPasso4.massa3));

        // Atualizar os estados com os resultados
        setResultado1(w1);
        setResultado2(w2);
        setResultado3(w3);
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
                    1ª Determinação: Teor de Umidade (w) = {resultado1 !== null ? resultado1 : 'Aguardando cálculo'}
                </Text>
                <Text style={{ color: '#5F6811' }}>
                    2ª Determinação: Teor de Umidade (w) = {resultado2 !== null ? resultado2 : 'Aguardando cálculo'}
                </Text>
                <Text style={{ color: '#5F6811' }}>
                    3ª Determinação: Teor de Umidade (w) = {resultado3 !== null ? resultado3 : 'Aguardando cálculo'}
                </Text>
            </View>

            <CheckBox
                title={'O teor de umidade da amostra é dado pela média das determinações efetuadas:'}
                checked={isChecked2}
                onPress={handleCheckboxToggle2}
                checkedColor="#A8B444"
                containerStyle={{ borderRadius: 9 }}
            />

            <Button title="Obter Determinações" onPress={calcularDeterminacoes} />
        </View>
    );
};

export default Passo5;
