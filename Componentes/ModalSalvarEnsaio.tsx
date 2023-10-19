import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Share } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import EnsaiosDB, { Ensaio } from '../FakeDB/EnsaiosDB';
import { useUser } from '../Context/Context';
import { useEnsaios } from '../Context/EnsaiosContext';
import Modal from 'react-native-modal';
import { Image } from 'react-native-elements';

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

    const handleCompartilharEnsaio = () => {
        const textoCompartilhamento = `Nome do Ensaio: ${nomeEnsaio}\nData: ${new Date()}\nConcluídos: Teor de Umidade`;

        Share.share({
            message: textoCompartilhamento,
            title: 'Compartilhar Ensaio',
        })
            .then(result => {
                if (result.action === Share.sharedAction) {
                    console.log('Mensagem compartilhada com sucesso.');
                } else if (result.action === Share.dismissedAction) {
                    console.log('Compartilhamento cancelado');
                }
            })
            .catch(error => console.error(error));
    };


    return (
        <Modal
            isVisible={visible}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            onBackdropPress={onClose}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{
                    backgroundColor: 'white',
                    padding: 20,
                    borderRadius: 10,
                    alignItems: 'center',
                }}>
                    <Text style={{ color: '#A8B444', fontWeight: 'bold', fontSize: 18 }}>Nome do Ensaio</Text>
                    <TextInput
                        value={nomeEnsaio}
                        onChangeText={setNomeEnsaio}
                        style={{ backgroundColor: '#F1F5F4', borderRadius: 9 }}
                        placeholder="Digite o nome do ensaio"
                    />
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between', // Controla o espaço entre os botões
                        width: '50%',
                    }}>

                        <TouchableOpacity
                            style={{ backgroundColor: '#A8B444', borderRadius: 9, margin: 10, padding: 10 }}
                            onPress={handleSalvarEnsaio}
                        >
                            <Text style={{ marginVertical: 5, fontWeight: 'bold' }}>
                                Salvar Ensaio
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ backgroundColor: '#A8B444', borderRadius: 9, margin: 10, padding: 10 }}
                            onPress={handleCompartilharEnsaio}
                        >
                            <Image source={require('./TeorUmidade/sharePNG.png')}
                                style={{ width: 22, height: 25}}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ModalSalvarEnsaio;
