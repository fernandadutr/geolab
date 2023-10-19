import { RootStackParamList } from '../App'

const Ensaios = [
    {
        nome: "Teor de Umidade",
        id: 1,
        enable: true,
        route: 'TeorUmidade' as keyof RootStackParamList
    },
    {
        nome: "Granulometria (Peneiramento)",
        id: 2,
        enable: true,
        route: 'Granulometria' as keyof RootStackParamList
    },
    {
        nome: "Massa/Peso Especifíco",
        id: 3,
        enable: false,
        route: 'Granulometria' as keyof RootStackParamList

    },
    {
        nome: "Limite de Liquidez",
        id: 4,
        enable: false,
        route: 'Granulometria' as keyof RootStackParamList
    },
    {
        nome: "Limite de Plasticidade",
        id: 5,
        enable: false,
        route: 'Granulometria' as keyof RootStackParamList
    },
    {
        nome: "Ensaio de Compactação",
        id: 6,
        enable: false,
        route: 'Granulometria' as keyof RootStackParamList
    },
    {
        nome: "Compressão Triaxial",
        id: 7,
        enable: false,
        route: 'Home' as keyof RootStackParamList
    }
];

export default Ensaios;