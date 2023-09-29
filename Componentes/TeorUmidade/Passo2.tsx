import React, { Dispatch, SetStateAction, useState } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from '../../Styles/Componentes';

interface PassoProps {
    setDadosPasso: Dispatch<SetStateAction<{ massa1: number; massa2: number; massa3: number }>>;
}

const Passo: React.FC<PassoProps> = ({ setDadosPasso }) => {
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);

    const [massaRecipiente1, setMassaRecipiente1] = useState<number | ''>(0);
    const [massaRecipiente2, setMassaRecipiente2] = useState<number | ''>(0);
    const [massaRecipiente3, setMassaRecipiente3] = useState<number | ''>(0);

    const handleCheckboxToggle1 = () => {
        setIsChecked1(!isChecked1);
    };

    const handleCheckboxToggle2 = () => {
        setIsChecked2(!isChecked2);
    };

    const handleCheckboxToggle3 = () => {
        setIsChecked3(!isChecked3);
    };

    const handleInputChange = () => {
        if (typeof massaRecipiente1 === 'number' && typeof massaRecipiente2 === 'number' && typeof massaRecipiente3 === 'number') {
            setDadosPasso({
                massa1: massaRecipiente1,
                massa2: massaRecipiente2,
                massa3: massaRecipiente3
            });
        }
    };

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
                Passo
            </Text>
            <CheckBox
                title={'Determine visualmente os maiores grãos contidos na amostra.'}
                checked={isChecked1}
                onPress={handleCheckboxToggle1}
                checkedColor="#A8B444"
                containerStyle={{ borderRadius: 9 }}
            />
            <CheckBox
                title={'Tome uma quantidade de material em função da dimensão dos grãos maiores, conforme a tabela:'}
                checked={isChecked2}
                onPress={handleCheckboxToggle2}
                checkedColor="#A8B444"
                containerStyle={{ borderRadius: 9 }}
            />
            <Image style={{ alignSelf: 'center' }} source={require('./tabelaPasso2.png')} />
            <CheckBox
                title={'Destorre o material, colocando-o em estado fofo, coloque nas cápsulas metálicas adequadas (já pesadas anteriormente) e feche com as tampas.'}
                checked={isChecked3}
                onPress={handleCheckboxToggle3}
                checkedColor="#A8B444"
                containerStyle={{ borderRadius: 9 }}
            />
            <CheckBox
                title={'Pese os conjuntos e anote as massas M1 (Massa do Solo Úmido + Massa do Recipiente) nos campos a seguir:'}
                checked={isChecked1 && isChecked2 && isChecked3}
                onPress={handleInputChange}
                checkedColor="#A8B444"
                containerStyle={{ borderRadius: 9 }}
            />
            <TextInput
                placeholder={'Massa Recipiente 1ª Determinação (M1)'}
                style={styles.textImputEnsaio}
                keyboardType="numeric"
                value={massaRecipiente1 !== '' ? massaRecipiente1.toString() : ''}
                onChangeText={(text) => setMassaRecipiente1(text !== '' ? parseFloat(text) : '')}
                onBlur={handleInputChange}
            />
            <TextInput
                placeholder={'Massa Recipiente 2ª Determinação (M1)'}
                style={styles.textImputEnsaio}
                keyboardType="numeric"
                value={massaRecipiente2 !== '' ? massaRecipiente2.toString() : ''}
                onChangeText={(text) => setMassaRecipiente2(text !== '' ? parseFloat(text) : '')}
                onBlur={handleInputChange}
            />
            <TextInput
                placeholder={'Massa Recipiente 3ª Determinação (M1)'}
                style={styles.textImputEnsaio}
                keyboardType="numeric"
                value={massaRecipiente3 !== '' ? massaRecipiente3.toString() : ''}
                onChangeText={(text) => setMassaRecipiente3(text !== '' ? parseFloat(text) : '')}
                onBlur={handleInputChange}
            />
        </View>
    );
};

export default Passo;
