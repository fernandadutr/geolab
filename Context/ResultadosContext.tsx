import React, { createContext, useContext, useState, ReactNode } from 'react';

export type PeneiraResultado = {
  peneiraId: number;
  numero: string;
  resultado: string;
};

type ResultadosContextType = {
  resultados: PeneiraResultado[];
  setResultadoPeneira: (peneiraId: number, numero: string, resultado: string) => void;
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

  const setResultado = (peneiraId: number, numero: string, resultado: string) => {
    setResultados((prevResultados) => [
      ...prevResultados,
      { peneiraId, numero, resultado },
    ]);
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
    <ResultadosContext.Provider value={{ resultados, setResultadoPeneira: setResultado }}>
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
