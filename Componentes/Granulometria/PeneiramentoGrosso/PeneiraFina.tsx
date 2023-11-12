import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Peneira } from '../../../Context/PeneirasContext';
import { useResultados } from '../../../Context/ResultadosContext';

interface PeneiraComponentFinoProps {
    peneira: Peneira;
    ms: string;
}

const PeneiraComponentFino: React.FC<PeneiraComponentFinoProps> = ({ peneira, ms }) => {
    const [resultado, setResultado] = useState<string>('');
    const { resultados } = useResultados();

    const valorN = resultados.find((item) => item.peneiraId == 13)?.resultado || '0';

    useEffect(() => {
        const calcularResultado = () => {
            const msNumero = parseFloat(ms);
            const mrNumero = parseFloat(peneira.massaRetida);
            const nNumero = parseFloat(valorN);

            if (!isNaN(msNumero) && !isNaN(mrNumero) && !isNaN(nNumero) && msNumero !== 0) {
                const qf = ((msNumero - mrNumero) * 100 - (msNumero * (100 + nNumero))) / (msNumero * 100);
                setResultado(qf.toFixed(2));
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
            <Text style={{ marginLeft: 5 }}>{`${resultado}`}</Text>
        </View>
    );
};

export default PeneiraComponentFino;
