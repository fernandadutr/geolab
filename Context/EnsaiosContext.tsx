import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Ensaio } from '../FakeDB/EnsaiosDB';

type EnsaiosState = {
    ensaios: Ensaio[];
    setEnsaios: (ensaios: Ensaio[]) => void;
    massaTotal: string;
    setMassaTotal: (massaTotal: string) => void;
    mw: string;
    setMw: (mw: string) => void;
};

const EnsaiosContext = createContext<EnsaiosState | undefined>(undefined);

type EnsaiosProviderProps = {
    children: ReactNode;
};

export const EnsaiosProvider: React.FC<EnsaiosProviderProps> = ({ children }) => {
    const [ensaios, setEnsaios] = useState<Ensaio[]>([]);
    const [massaTotal, setMassaTotal] = useState('');
    const [mw, setMw] = useState('');

    return (
        <EnsaiosContext.Provider value={{ ensaios, setEnsaios, massaTotal, setMassaTotal, mw, setMw }}>
            {children}
        </EnsaiosContext.Provider>
    );
};

export const useEnsaios = (): EnsaiosState => {
    const context = useContext(EnsaiosContext);
    if (!context) {
        throw new Error('useEnsaios deve ser usado dentro de um EnsaiosProvider');
    }
    return context;
};
