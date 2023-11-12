import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Ensaio } from '../FakeDB/EnsaiosDB';

type EnsaiosState = {
    ensaios: Ensaio[];
    setEnsaios: (ensaios: Ensaio[]) => void;
    mt: string;
    setMt: (massaTotal: string) => void;
    mw: string;
    setMw: (mw: string) => void;
    mg: string;
    setMg: (mg: string) => void;
    w: string;
    setW: (w: string) => void;
    ms: string;
    setMs: (ms: string) => void;

};

const EnsaiosContext = createContext<EnsaiosState | undefined>(undefined);

type EnsaiosProviderProps = {
    children: ReactNode;
};

export const EnsaiosProvider: React.FC<EnsaiosProviderProps> = ({ children }) => {
    const [ensaios, setEnsaios] = useState<Ensaio[]>([]);
    const [massaTotal, setMassaTotal] = useState('');
    const [mw, setMw] = useState('');
    const [mg, setMg] = useState('');
    const [w, setW] = useState('');
    const [ms, setMs] = useState('');



    return (
        <EnsaiosContext.Provider value={{
            ensaios, setEnsaios,
            mt: massaTotal, setMt: setMassaTotal,
            mw, setMw,
            mg, setMg,
            w, setW,
            ms, setMs
        }}>
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
