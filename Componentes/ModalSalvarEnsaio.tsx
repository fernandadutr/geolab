import React, { useState } from 'react';
import { View, Modal, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import EnsaiosDB, { Ensaio } from '../FakeDB/EnsaiosDB';
import { useUser } from '../Context/Context';
import { useEnsaios } from '../Context/EnsaiosContext';

interface ModalSalvarEnsaioProps {
    visible: boolean;
    onClose: () => void;
}

type authScreenProp = NativeStackNavigationProp<RootStackParamList, 'Auth'>;

const ModalSalvarEnsaio: React.FC<ModalSalvarEnsaioProps> = ({ visible, onClose }) => {
    const [nomeEnsaio, setNomeEnsaio] = useState('');
    const { userName } = useUser();
    const { ensaios, setEnsaios } = useEnsaios();

    const navigation = useNavigation<authScreenProp>();

    const handleSalvarEnsaio = () => {

        const novoEnsaio: Ensaio = {
            id: ensaios.length + 1,
            nome: nomeEnsaio,
            data: new Date(),
            concluidos: ['Teor de Umidade'],
            usuario: userName,

        };


        setEnsaios([...ensaios, novoEnsaio]);

        onClose();
        setNomeEnsaio('');
        navigation.navigate('Home');
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
                    <Text>Nome do Ensaio</Text>
                    <TextInput
                        value={nomeEnsaio}
                        onChangeText={setNomeEnsaio}
                        placeholder="Digite o nome do ensaio"
                    />
                    <Button title="Salvar Ensaio" onPress={handleSalvarEnsaio} />
                </View>
            </View>
        </Modal>
    );
};

export default ModalSalvarEnsaio;
