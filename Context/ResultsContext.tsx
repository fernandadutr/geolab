import React, { createContext, useContext, useState, ReactNode } from 'react';

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

  const salvarResultado = (novoResultado: Resultado) => {
    // Verifica se já existe um resultado com o mesmo id
    const index = resultados.findIndex(resultado => resultado.id === novoResultado.id);

    // Se existir, substitui o valor antigo pelo novo
    if (index !== -1) {
      setResultados(prevResultados => {
        const newResultados = [...prevResultados];
        newResultados[index] = novoResultado;
        return newResultados;
      });
    } else {
      // Se não existir, adiciona o novo resultado à lista
      setResultados(prevResultados => [...prevResultados, novoResultado]);
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
