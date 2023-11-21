import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type PeneiraResultado = {
  peneiraId: number;
  numero: string;
  resultado: string;
};

type ResultadosContextType = {
  resultados: PeneiraResultado[];
  setResultadoPeneira: (peneiraId: number, numero: string, resultado: string) => void;
  dados1: { massa1: number; massa2: number; massa3: number };
  dados2: { massa1: number; massa2: number; massa3: number };
  dados3: { massa1: number; massa2: number; massa3: number };
  setDados1: (novosDados: { massa1: number; massa2: number; massa3: number }) => void;
  setDados2: (novosDados: { massa1: number; massa2: number; massa3: number }) => void;
  setDados3: (novosDados: { massa1: number; massa2: number; massa3: number }) => void;
};

type PassosConcluidosContextType = {
  preparacaoAmostraConcluido: boolean;
  teorUmidadeConcluido: boolean;
  peneiramentoGrossoConcluido: boolean;
  sedimentacaoConcluido: boolean;
  peneiramentoFinoConcluido: boolean;
  setPassoConcluido: (passo: string) => void;
};

const ResultadosContext = createContext<ResultadosContextType | undefined>(undefined);
const PassosConcluidosContext = createContext<PassosConcluidosContextType | undefined>(undefined);

type ResultadosPeneirasProviderProps = {
  children: ReactNode;
};

export const ResultadosProvider: React.FC<ResultadosPeneirasProviderProps> = ({ children }) => {
  const [resultados, setResultados] = useState<PeneiraResultado[]>([]);
  const [preparacaoAmostraConcluido, setPreparacaoAmostraConcluido] = useState<boolean>(false);
  const [teorUmidadeConcluido, setTeorUmidadeConcluido] = useState<boolean>(false);
  const [peneiramentoGrossoConcluido, setPeneiramentoGrossoConcluido] = useState<boolean>(false);
  const [sedimentacaoConcluido, setSedimentacaoConcluido] = useState<boolean>(false);
  const [peneiramentoFinoConcluido, setPeneiramentoFinoConcluido] = useState<boolean>(false);
  const [dados1, setDados1] = useState({ massa1: 0, massa2: 0, massa3: 0 });
  const [dados2, setDados2] = useState({ massa1: 0, massa2: 0, massa3: 0 });
  const [dados3, setDados3] = useState({ massa1: 0, massa2: 0, massa3: 0 });

  useEffect(() => {
    const loadResultados = async () => {
      try {
        const storedResultados = await AsyncStorage.getItem('resultados');
        const loadedResultados = storedResultados ? JSON.parse(storedResultados) : [];
        setResultados(loadedResultados);
      } catch (error) {
        console.error('Erro ao carregar resultados do AsyncStorage:', error);
      }
    };

    loadResultados();
  }, []);

  const setResultadoPeneira = async (peneiraId: number, numero: string, resultado: string) => {
    try {
      const prevResultados = await AsyncStorage.getItem('resultados');
      const existingResultados = prevResultados ? JSON.parse(prevResultados) : [];

      const newResultados = [
        ...existingResultados,
        {
          peneiraId,
          numero,
          resultado,
          dados1: { ...dados1 },
          dados2: { ...dados2 },
          dados3: { ...dados3 },
        },
      ];

      await AsyncStorage.setItem('resultados', JSON.stringify(newResultados));
      setResultados(newResultados);
    } catch (error) {
      console.error('Erro ao salvar resultado no AsyncStorage:', error);
    }
  };

  const setPassoConcluido = (passo: string) => {
    switch (passo) {
      case 'preparacaoAmostra':
        setPreparacaoAmostraConcluido(true);
        break;
      case 'teorUmidade':
        setTeorUmidadeConcluido(true);
        break;
      case 'peneiramentoGrosso':
        setPeneiramentoGrossoConcluido(true);
        break;
      case 'sedimentacao':
        setSedimentacaoConcluido(true);
        break;
      case 'peneiramentoFino':
        setPeneiramentoFinoConcluido(true);
        break;
      default:
        break;
    }
  };

  return (
    <ResultadosContext.Provider
      value={{
        resultados,
        setResultadoPeneira,
        dados1,
        dados2,
        dados3,
        setDados1,
        setDados2,
        setDados3,
      }}
    >
      <PassosConcluidosContext.Provider
        value={{
          preparacaoAmostraConcluido,
          teorUmidadeConcluido,
          peneiramentoGrossoConcluido,
          sedimentacaoConcluido,
          peneiramentoFinoConcluido,
          setPassoConcluido,
        }}
      >
        {children}
      </PassosConcluidosContext.Provider>
    </ResultadosContext.Provider>
  );
};

export const useResultados = () => {
  const context = useContext(ResultadosContext);
  if (!context) {
    throw new Error('useResultados deve ser usado dentro de um ResultadosProvider');
  }
  return context;
};

export const usePassosConcluidos = () => {
  const context = useContext(PassosConcluidosContext);
  if (!context) {
    throw new Error('usePassosConcluidos deve ser usado dentro de um ResultadosProvider');
  }
  return context;
};
