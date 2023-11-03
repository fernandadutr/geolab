import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from '../../Styles/Componentes';

interface Passo4Props {
  setDadosPasso4: (data: { massa1: number; massa2: number; massa3: number }) => void;
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

  const [massa1, setMassa1] = useState<number | ''>(0);
  const [massa2, setMassa2] = useState<number | ''>(0);
  const [massa3, setMassa3] = useState<number | ''>(0);

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
    const massa1Float = parseFloat(massa1.toString());
    const massa2Float = parseFloat(massa2.toString());
    const massa3Float = parseFloat(massa3.toString());


    if (!isNaN(massa1Float) && !isNaN(massa2Float) && !isNaN(massa3Float)) {
      setDadosPasso4({ massa1: massa1Float, massa2: massa2Float, massa3: massa3Float });
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
        value={massa1 !== '' ? massa1.toString() : ''}
        keyboardType="numeric"
        onChangeText={(text) => setMassa1(text !== '' ? parseFloat(text) : '')}
        style={styles.textImputEnsaio}
        onBlur={handleInputChange}
      />
      <TextInput
        placeholder={'Massa Recipiente 2ª Determinação (M2)'}
        value={massa2 !== '' ? massa2.toString() : ''}
        keyboardType="numeric"
        onChangeText={(text) => setMassa2(text !== '' ? parseFloat(text) : '')}
        style={styles.textImputEnsaio}
        onBlur={handleInputChange}
      />
      <TextInput
        placeholder={'Massa Recipiente 3ª Determinação (M2)'}
        value={massa3 !== '' ? massa3.toString() : ''}
        keyboardType="numeric"
        onChangeText={(text) => setMassa3(text !== '' ? parseFloat(text) : '')}
        style={styles.textImputEnsaio}
        onBlur={handleInputChange}
      />
    </View>
  );
};

export default Passo4;
