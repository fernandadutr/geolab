import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../Styles/Componentes';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

interface tittleProp {
  title: string
}

type authScreenProp = NativeStackNavigationProp<RootStackParamList, 'Auth'>;


const CustomHeader: React.FC<tittleProp> = ({ title }) => {

  const navigation = useNavigation<authScreenProp>();

  return (
    <View style={{
      width: '100%',
      marginTop: 60,
      marginBottom: 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={require('../Styles/imagens/logo.png')}
          style={{ width: 45, height: 45, margin: 10 }}
        />
        <Text style={{ fontSize: 18 }}>{title}</Text>
      </View>
      <TouchableOpacity
      onPress={() => navigation.navigate('Hello')}
      >       
        <Image style={{ marginRight: 0 }} source={require('../assets/voltar.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;
