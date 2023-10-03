import React, { FC } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

interface ErrorModalProps {
    isVisible: boolean;
    message: string;
    onClose: () => void;
}

const ErrorModal: FC<ErrorModalProps> = ({ isVisible, message, onClose }) => {
    return (
        <Modal isVisible={isVisible}
            animationIn="slideInUp"
            animationOut="slideOutDown"
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 16 }}>{message}</Text>
                <TouchableOpacity
                    style={{
                        marginVertical: 20,
                        backgroundColor: '#A8B444',
                        padding: 10,
                        borderRadius: 8,
                        alignItems: 'center',
                    }}
                    onPress={onClose}
                >
                    <Text style={{ color: 'white', fontSize: 18 }}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

export default ErrorModal;
