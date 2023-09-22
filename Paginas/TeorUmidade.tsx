// import { View, Text } from "react-native";
// import styles from "../Styles/Componentes";
// import { SafeAreaView } from "react-native-safe-area-context";

// const TeorUmidade: React.FC = () => {
//     return (
//         <SafeAreaView>
//             <View>
//                 <Text style={styles.title}>
//                     NBR 6457 de 03/2016
//                     Amostras de Solo - Preparação para Ensaios de
//                     Compactação e Ensaios de Caracterização
//                 </Text>

//             </View>
//         </SafeAreaView>
//     );
// }
import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from '../Styles/Componentes';

const TeorUmidade: React.FC = () => {
    const [page, setPage] = useState<number>(0);
    const swiperRef = useRef<Swiper>(null);

    const handleNextPage = () => {
        if (swiperRef.current) {
            const nextPage = page + 1;
            if (nextPage < 3) {
                swiperRef.current.scrollBy(1);
                setPage(nextPage);
            }
        }
    };

    return (
        <SafeAreaView style={styles.containerHome}>
            <Text style={{ textAlign: 'center' }}>
                NBR 6457 de 03/2016
            </Text>
            <Text style={{ textAlign: 'center' }}>
                Amostras de Solo - Preparação para Ensaios de
                Compactação e Ensaios de Caracterização
            </Text>
            <Swiper
                ref={swiperRef}
                loop={false}
                showsPagination={true} // Ativar a exibição de indicadores de posição
                dotStyle={{ backgroundColor: '#D9D9D9', width: 10, height: 10 }} // Estilo das bolinhas inativas
                activeDotStyle={{ backgroundColor: '#A8B444', width: 10, height: 10 }} // Estilo da bolinha ativa
                paginationStyle={{ bottom: 10 }} // Estilo do container de indicadores de posição
                onIndexChanged={(index) => setPage(index)}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Página 1</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Página 2</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Página 3</Text>
                </View>
            </Swiper>
            <View style={{ alignItems: 'center', marginBottom: 20 }}>
                <TouchableOpacity style={styles.ensaioContainer} onPress={handleNextPage}>
                    <Text style={styles.ensaioConteinerText}>Próximo Passo</Text>
                    <Image style={styles.imgSeta} source={require('../Styles/imagens/seta.png')} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default TeorUmidade;
