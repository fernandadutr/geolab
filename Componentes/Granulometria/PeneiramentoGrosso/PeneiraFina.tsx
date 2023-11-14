import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Peneira } from '../../../Context/PeneirasContext';
import { useEnsaios } from '../../../Context/EnsaiosContext';
import { useResultsContext } from '../../../Context/ResultsContext';

interface PeneiraComponentFinoProps {
    peneira: Peneira;
    ms: string;
}

const PeneiraComponentFino: React.FC<PeneiraComponentFinoProps> = ({ peneira, ms }) => {
    const [resultado, setResultado] = useState<string>('');
    const { w, mw } = useEnsaios();
    const { resultados } = useResultsContext();

    const valorN = resultados.find((item) => item.Numero === '#2')?.resultado || '0';
    const nNumero = parseFloat(valorN);

    useEffect(() => {
        const calcularResultado = () => {
            const mwNumero = parseFloat(mw);
            const mrNumero = parseFloat(peneira.massaRetida);
            const nNumero = 96.76;
            const W = parseFloat(w)
            
            if (!isNaN(mwNumero) && !isNaN(mrNumero) && !isNaN(nNumero) && W !== 0) {
                const result = (((mwNumero * 100)  - (mrNumero * (100 + W))) * nNumero) / (mwNumero * 100);
                return setResultado(result.toFixed(2));
            } else {
                setResultado('Erro');
            }
        };

        calcularResultado();
    }, []);

    return (
        <View key={peneira.id} style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
            <Image style={{ marginRight: 4 }} source={require('../../iconePeneira.png')} />
            <Text>{`${peneira.numero}`}</Text>
            <Text style={{ marginLeft: 5 }}>{`${resultado}%`}</Text>
        </View>
    );
};

export default PeneiraComponentFino;
