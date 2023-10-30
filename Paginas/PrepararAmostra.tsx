import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from '../Styles/Componentes';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ModalSalvarEnsaio from '../Componentes/ModalSalvarEnsaio';
import VerificarAparelhagem from '../Componentes/TeorUmidade/VerificarAparelhagem';
import { AparelhagemG, Passo1, Passo3 } from '../FakeDB/Aparelhagem';
import Passo2 from '../Componentes/Granulometria/PrepararAmostra/Passo2';


const PrepararAmostra: React.FC = () => {
    const [page, setPage] = useState<number>(0);
    const swiperRef = useRef<Swiper>(null);
    const [modalVisible, setModalVisible] = useState(false);

    const handleNextPage = () => {
        if (swiperRef.current) {
            const nextPage = page + 1;
            if (nextPage < 6) {
                swiperRef.current.scrollBy(1);
                setPage(nextPage);
            } else if (nextPage === 6) {
                setModalVisible(true);
            }
        }
    };


    return (
        <KeyboardAwareScrollView
            style={{
                flex: 1,
                marginBottom: 10,
            }}
            contentContainerStyle={{ flexGrow: 1, padding: 10 }}
            enableOnAndroid={true}
        >
            <View>
                <Text style={{ textAlign: 'center' }}>NBR 6457 de 03/2016</Text>
                <Text style={{ textAlign: 'center', padding: 10 }}>
                    Amostras de Solo - Preparação para Ensaios de Compactação e Ensaios de Caracterização
                </Text>
            </View>
            <Swiper
                ref={swiperRef}
                loop={false}
                style={{ maxHeight: 500 }}
                showsPagination={true}
                dotStyle={{ backgroundColor: '#D9D9D9', width: 5, height: 5 }}
                activeDotStyle={{ backgroundColor: '#A8B444', width: 10, height: 10 }}
                paginationStyle={{ bottom: 10, alignItems: 'center' }}
                onIndexChanged={(index) => setPage(index)}
            >
                <VerificarAparelhagem initialCheckBoxes={AparelhagemG} />
                <VerificarAparelhagem initialCheckBoxes={Passo1} />
                <Passo2/>
                <VerificarAparelhagem initialCheckBoxes={Passo3} />

            </Swiper>
            <ModalSalvarEnsaio
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
            />
            <View style={{ alignItems: 'center', paddingHorizontal: 20, marginBottom: 10 }}>
                <TouchableOpacity style={styles.ensaioContainer} onPress={handleNextPage}>
                    <Text style={styles.ensaioConteinerText}>Próximo Passo</Text>
                    <Image style={styles.imgSeta} source={require('../Styles/imagens/seta.png')} />
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    );
};

export default PrepararAmostra;
