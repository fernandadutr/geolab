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

const ResultadosContext = createContext<ResultadosContextType | undefined>(undefined);

type ResultadosPeneirasProviderProps = {
  children: ReactNode;
};

export const ResultadosProvider: React.FC<ResultadosPeneirasProviderProps> = ({ children }) => {
  const [resultados, setResultados] = useState<PeneiraResultado[]>([]);

  const setResultado = (peneiraId: number, numero: string, resultado: string) => {
    setResultados((prevResultados) => [
      ...prevResultados,
      { peneiraId,numero, resultado },
    ]);
  };

  return (
    <ResultadosContext.Provider value={{ resultados, setResultadoPeneira: setResultado }}>
      {children}
    </ResultadosContext.Provider>
  );
};

export const useResultados = () => {
  const context = useContext(ResultadosContext);
  if (!context) {
    throw new Error('useResultadosPeneiras deve ser usado dentro de um ResultadosPeneirasProvider');
  }
  return context;
};
