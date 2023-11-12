import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Button } from 'react-native';
import { CheckBox } from 'react-native-elements';
import ErrorModal from '../ErrorModal';
import { useEnsaios } from '../../Context/EnsaiosContext';


interface Passo5Props {
    dadosPasso1: { massa1: number; massa2: number; massa3: number };
    dadosPasso2: { massa1: number; massa2: number; massa3: number };
    dadosPasso4: { massa1: number; massa2: number; massa3: number };
}

function calcularW(massa3: number, massa1: number, massa2: number): number {
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
    const [modalVisible, setModalVisible] = useState(false);
    const { setW } = useEnsaios();

    const handleCheckboxToggle1 = () => {
        setIsChecked1(!isChecked1);
    };

    const handleCheckboxToggle2 = () => {
        setIsChecked2(!isChecked2);
    };

    const calcularDeterminacoes = () => {
        if (
            !dadosPasso1.massa1 ||
            !dadosPasso1.massa2 ||
            !dadosPasso1.massa3 ||
            !dadosPasso2.massa1 ||
            !dadosPasso2.massa2 ||
            !dadosPasso2.massa3 ||
            !dadosPasso4.massa1 ||
            !dadosPasso4.massa2 ||
            !dadosPasso4.massa3
        ) {
            setModalVisible(true);
            return;
        }

        const w1 = calcularW(dadosPasso1.massa1, dadosPasso2.massa1, dadosPasso4.massa1);
        const w2 = calcularW(dadosPasso1.massa2, dadosPasso2.massa2, dadosPasso4.massa2);
        const w3 = calcularW(dadosPasso1.massa3, dadosPasso2.massa3, dadosPasso4.massa3);

        setResultado1(w1);
        setResultado2(w2);
        setResultado3(w3);

        const media = calcularMedia(w1,w2,w3);
        setW(media);
    };

    function calcularMedia(w1: number, w2: number, w3: number) {
        const soma = w1 + w2 + w3;
        const media = soma / 3;
        return media.toFixed(2);
    }

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
            <View style={{ alignItems: 'center', marginVertical: 25 }}>
                <Text style={{ color: '#5F6811' }}>
                    1ª Determinação: Teor de Umidade (w) = {resultado1 !== null ? resultado1 +' %': 'Aguardando cálculo'}
                </Text>
                <Text style={{ color: '#5F6811' }}>
                    2ª Determinação: Teor de Umidade (w) = {resultado2 !== null ? resultado2 +' %' : 'Aguardando cálculo'}
                </Text>
                <Text style={{ color: '#5F6811' }}>
                    3ª Determinação: Teor de Umidade (w) = {resultado3 !== null ? resultado3 +' %': 'Aguardando cálculo'}
                </Text>
            </View>

            <CheckBox
                title={'O teor de umidade da amostra é dado pela média das determinações efetuadas:'}
                checked={isChecked2}
                onPress={handleCheckboxToggle2}
                checkedColor="#A8B444"
                containerStyle={{ borderRadius: 9 }}
            />
            <Text style={{ textAlign: 'center' }}>
                {`Teor de Umidade da Amostra (w) = ${calcularMedia(
                    resultado1 !== null ? resultado1 : 0,
                    resultado2 !== null ? resultado2 : 0,
                    resultado3 !== null ? resultado3 : 0
                )} %`}
            </Text>
            <TouchableOpacity
                style={{
                    marginVertical: 20,
                    backgroundColor: '#A8B444',
                    padding: 10,
                    borderRadius: 8,
                    alignItems: 'center',
                }}
                onPress={calcularDeterminacoes}
            >
                <Text style={{ color: 'white', fontSize: 18 }}>Obter Determinações</Text>
            </TouchableOpacity>
            <ErrorModal
                isVisible={modalVisible}
                message={"Opa! Você esqueceu algum dado."}
                onClose={() => setModalVisible(false)}
            />
        </View>
    );
};

export default Passo5;
