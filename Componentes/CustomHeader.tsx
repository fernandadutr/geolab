import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useUser } from '../Context/Context';

type authScreenProp = NativeStackNavigationProp<RootStackParamList, 'Auth'>;

const CustomHeader: React.FC = () => {
  const navigation = useNavigation<authScreenProp>();
  const { userName } = useUser();

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
          source={require('../assets/adaptive-icon.png')}
          style={{ width: 45, height: 45, margin: 10 }}
        />
        <View style={{ display: 'flex', flexDirection: 'column' }}>
          <Text style={{ fontSize: 18 }}>Bem vindo(a)
          </Text>
          <Text style={{ color: '#A8B444' }}>
            {userName}
          </Text>
        </View>
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
