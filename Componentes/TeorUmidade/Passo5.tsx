import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import ErrorModal from '../ErrorModal';
import { useResultados } from '../../Context/ResultadosContext';
import { useEnsaios } from '../../Context/EnsaiosContext';


const Passo5: React.FC = () => {
    const { dados1, dados2, dados3 } = useResultados();
    const { w, setW } = useEnsaios()
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [resultado1, setResultado1] = useState<number | null>(null);
    const [resultado2, setResultado2] = useState<number | null>(null);
    const [resultado3, setResultado3] = useState<number | null>(null);
    const [wx, setWx] = useState('');

    useEffect(() => {
        setW(wx);
    }, [resultado1]);

    const handleCheckboxToggle1 = () => {
        setIsChecked1(!isChecked1);
    };

    const handleCheckboxToggle2 = () => {
        setIsChecked2(!isChecked2);
        if (resultado1 != null && resultado2 != null && resultado3 != null) {
            calcularMedia(resultado1, resultado2, resultado3)
            return setW(wx)
        }
    };

    const calcularDeterminacoes = () => {
        const w1 = calcularW(dados1.massa1, dados2.massa1, dados3.massa1);
        const w2 = calcularW(dados1.massa2, dados2.massa2, dados3.massa2);
        const w3 = calcularW(dados1.massa3, dados2.massa3, dados3.massa3);

        setResultado1(w1);
        setResultado2(w2);
        setResultado3(w3);
    };

    function calcularW(massa3: number, massa1: number, massa2: number): number {
        const w = ((massa1 - massa2) / (massa2 - massa3)) * 100;
        const wArredondado = Number(w.toFixed(2));
        return wArredondado;
    }

    function calcularMedia(w1: number, w2: number, w3: number) {
        const soma = w1 + w2 + w3;
        const media = (soma / 3).toFixed(2);
        setWx(media.toString())
        return media;
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
                    1ª Determinação: Teor de Umidade (w) = {resultado1 !== null ? resultado1 + ' %' : 'Aguardando cálculo'}
                </Text>
                <Text style={{ color: '#5F6811' }}>
                    2ª Determinação: Teor de Umidade (w) = {resultado2 !== null ? resultado2 + ' %' : 'Aguardando cálculo'}
                </Text>
                <Text style={{ color: '#5F6811' }}>
                    3ª Determinação: Teor de Umidade (w) = {resultado3 !== null ? resultado3 + ' %' : 'Aguardando cálculo'}
                </Text>
            </View>

            <TouchableOpacity
                style={{
                    marginVertical: 20,
                    backgroundColor: '#A8B444',
                    padding: 10,
                    borderRadius: 8,
                    alignItems: 'center',
                }}
                onPress={calcularDeterminacoes}>
                <Text style={{ color: 'white', fontSize: 18 }}>Obter Determinações</Text>
            </TouchableOpacity>
            <CheckBox
                title={'O teor de umidade da amostra é dado pela média das determinações efetuadas:'}
                checked={isChecked2}
                onPress={handleCheckboxToggle2}
                checkedColor="#A8B444"
                containerStyle={{ borderRadius: 9 }}
            />
            <Text style={{ textAlign: 'center' }}>
                {`Teor de Umidade da Amostra (w) = ${wx} %`}
            </Text>
            <ErrorModal isVisible={false} message={'Opa! Você esqueceu algum dado.'} onClose={() => { }} />
        </View>
    );
};

export default Passo5;
