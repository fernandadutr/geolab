import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Resultado = {
  id: number;
  Numero: string;
  resultado: string;
};

type ResultsContextType = {
  resultados: Resultado[];
  salvarResultado: (novoResultado: Resultado) => void;
};

const ResultsContext = createContext<ResultsContextType | undefined>(undefined);

type ResultsProviderProps = {
  children: ReactNode;
};

export const ResultsProvider: React.FC<ResultsProviderProps> = ({ children }) => {
  const [resultados, setResultados] = useState<Resultado[]>([]);

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

  const salvarResultado = async (novoResultado: Resultado) => {
    try {
      const index = resultados.findIndex((resultado) => resultado.id === novoResultado.id);

      if (index !== -1) {
        setResultados((prevResultados) => {
          const newResultados = [...prevResultados];
          newResultados[index] = novoResultado;
          return newResultados;
        });
      } else {
        setResultados((prevResultados) => [...prevResultados, novoResultado]);
      }

      await AsyncStorage.setItem('resultados', JSON.stringify(resultados));
    } catch (error) {
      console.error('Erro ao salvar resultado no AsyncStorage:', error);
    }
  };

  return (
    <ResultsContext.Provider value={{ resultados, salvarResultado }}>
      {children}
    </ResultsContext.Provider>
  );
};

export const useResultsContext = () => {
  const context = useContext(ResultsContext);
  if (!context) {
    throw new Error('useResultsContext deve ser usado dentro de um ResultsProvider');
  }
  return context;
};
