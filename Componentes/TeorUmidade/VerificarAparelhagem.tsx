import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';

const VerificarAparelhagem: React.FC = () => {
  const [checkBoxes, setCheckBoxes] = useState([
    {
      id: 1,
      label: 'Balança que permita pesar nominalmente 200 g,1,5kg e 5kg, com resoluções de 0,01g, 0,1g e 0,5g, respectivamente',
      checked: false,
    },
    {
      id: 2,
      label: 'Estufa capaz de manter a temperatura entre 60ºC e 65ºC e entre 105ºC e 110ºC;',
      checked: false,
    },
    {
      id: 3,
      label: 'Dessecador contendo sílica-gel;',
      checked: false,
    },
    {
      id: 4,
      label: 'Recipientes adequados, confeccionados e material não corrosível;',
      checked: false,
    },
    {
      id: 5,
      label: 'Pinças Metálicas',
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
    <View style={{ padding: 20 }}>
      <Text
        style={{
          fontWeight: 'bold',
          textAlign: 'center',
          padding: 6,
          backgroundColor:
            '#F2F8C6',
          borderRadius: 20
        }
        }>
        Verifique a Aparelhagem Necessária
      </Text>
      {checkBoxes.map((checkbox) => (
        <CheckBox
          key={checkbox.id}
          title={checkbox.label}
          checked={checkbox.checked}
          checkedColor='#A8B444'
          containerStyle={{ borderRadius: 9, height: 79 }}
          onPress={() => handleCheckboxToggle(checkbox.id)}
        />
      ))}
    </View>
  );
};

export default VerificarAparelhagem;
