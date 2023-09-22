import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';

const Passo3: React.FC = () => {
    const [checkBoxes, setCheckBoxes] = useState([
        {
            id: 1,
            label: 'Remova a tampa dos recipientes.',
            checked: false,
        },
        {
            id: 2,
            label: 'Coloque as cápsulas em estufa, à temperatura de 105ºC a 110ºC, onde devem permanecer até apresentarem constância de massa (normalmente de 16 a 24 horas).',
            checked: false,
        },
        {
            id: 3,
            label: 'Atenção! A tampa não pode ser recolocada enquanto o material permanecer em estufa;',
            checked: false,
        },
    ]);

    const handleCheckboxToggle = (id: number) => {
        const updatedCheckBoxes = checkBoxes.map((checkbox) => {
            if (checkbox.id === id) {
                return { ...checkbox, checked: !checkbox.checked };
            }
            return checkbox;
        });

        setCheckBoxes(updatedCheckBoxes);
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
                Passo 3
            </Text>
            {checkBoxes.map((checkbox) => (
                <CheckBox
                    key={checkbox.id}
                    title={checkbox.label}
                    checked={checkbox.checked}
                    checkedColor="#A8B444"
                    containerStyle={{ borderRadius: 9, height: 'auto' }}
                    onPress={() => handleCheckboxToggle(checkbox.id)}
                />
            ))}
            <Text
                style={{
                    textAlign: 'center',
                    fontSize: 10,
                    marginVertical: 15,
                    color: 'red',
                }}>
                * Solos orgânicos ou turfosos devem ser secados à temperatura de 60ºC a 65ºC requerem intervalos maiores de secagem.
            </Text>
        </View>
    );
};

export default Passo3;
