import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';

interface CheckBoxItem {
  id: number;
  label: string;
  checked: boolean;
}

interface VerificarAparelhagemProps {
  initialCheckBoxes: {
    title: string,
    checkbox: CheckBoxItem[];
  }
}

const VerificarAparelhagem: React.FC<VerificarAparelhagemProps> = ({ initialCheckBoxes }) => {
  const [checkBoxes, setCheckBoxes] = useState(initialCheckBoxes.checkbox);

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
          backgroundColor: '#F2F8C6',
          borderRadius: 20,
        }}
      >
        {initialCheckBoxes.title}
      </Text>
      {checkBoxes.map((checkbox) => (
        <CheckBox
          key={checkbox.id}
          title={checkbox.label}
          checked={checkbox.checked || false}
          checkedColor='#A8B444'
          containerStyle={{ borderRadius: 9, height: 79 }}
          onPress={() => handleCheckboxToggle(checkbox.id)}
        />
      ))}
    </View>
  );
};

export default VerificarAparelhagem;
