import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from '../../Styles/Componentes';

interface Passo4Props {
  setDadosPasso4: (data: { massa1: string; massa2: string; massa3: string }) => void;
}

const Passo4: React.FC<Passo4Props> = ({ setDadosPasso4 }) => {
  const [checkBoxes, setCheckBoxes] = useState([
    {
      id: 1,
      label: 'Retire as cápsulas da estufa e transfira-las para o dessecador, onde deve permanecer até a temperatura ambiente.',
      checked: false,
    },
    {
      id: 2,
      label: 'Recoloque a tampa, pese o conjunto e anote as  massas M2 (Massa do Solo Seco + Massa do Recipiente) nos campos a seguir:',
      checked: false,
    },
  ]);

  const [massa1, setMassa1] = useState('');
  const [massa2, setMassa2] = useState('');
  const [massa3, setMassa3] = useState('');

  const handleCheckboxToggle = (id: number) => {
    const updatedCheckBoxes = checkBoxes.map((checkbox) => {
      if (checkbox.id === id) {
        return { ...checkbox, checked: !checkbox.checked };
      }
      return checkbox;
    });

    setCheckBoxes(updatedCheckBoxes);
  };

  const handleInputChange = () => {
    setDadosPasso4({ massa1, massa2, massa3 });
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
        Passo 4
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
      <TextInput
        placeholder={'Massa Recipiente 1ª Determinação (M2)'}
        value={massa1}
        keyboardType="numeric"
        onChangeText={(text) => {
          setMassa1(text);
          handleInputChange();
        }}
        style={styles.textImputEnsaio}
      />
      <TextInput
        placeholder={'Massa Recipiente 2ª Determinação (M2)'}
        value={massa2}
        keyboardType="numeric"
        onChangeText={(text) => {
          setMassa2(text);
          handleInputChange();
        }}
        style={styles.textImputEnsaio}
      />
      <TextInput
        placeholder={'Massa Recipiente 3ª Determinação (M2)'}
        value={massa3}
        keyboardType="numeric"
        onChangeText={(text) => {
          setMassa3(text);
          handleInputChange();
        }}
        style={styles.textImputEnsaio}
      />
    </View>
  );
};

export default Passo4;
