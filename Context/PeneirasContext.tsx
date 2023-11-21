import { createContext, useContext, useState, ReactNode } from 'react';

export type Peneira = {
    id: number;
    numero: string;
    massaRetida: string;
};

type EnsaiosContextType = {
    ensaiosFino: Peneira[];
    ensaiosGrosso: Peneira[];
    setMassaTotalFino: (peneiraNumero: number, massaRetida: string) => void;
    setMassaTotalGrosso: (peneiraNumero: number, massaRetida: string) => void;
};

const EnsaiosContext = createContext<EnsaiosContextType | undefined>(undefined);

type EnsaiosProviderProps = {
    children: ReactNode;
};

export const PeneirasProvider: React.FC<EnsaiosProviderProps> = ({ children }) => {
    const [ensaiosFino, setEnsaiosFino] = useState<Peneira[]>([
        { id: 1.2, numero: '#1,2', massaRetida: '' },
        { id: 0.6, numero: '#0,6', massaRetida: '' },
        { id: 0.42, numero: '#0,42', massaRetida: '' },
        { id: 0.25, numero: '#0,25', massaRetida: '' },
        { id: 0.15, numero: '#0,15', massaRetida: '' },
        { id: 0.75, numero: '#0,075', massaRetida: '' },
    ]);

    const [ensaiosGrosso, setEnsaiosGrosso] = useState<Peneira[]>([
        { id: 0.50, numero: '#50', massaRetida: '' },
        { id: 38, numero: '#38', massaRetida: '' },
        { id: 25, numero: '#25', massaRetida: '' },
        { id: 19, numero: '#19', massaRetida: '' },
        { id: 9.5, numero: '#9,5', massaRetida: '' },
        { id: 4.8, numero: '#4,8', massaRetida: '' },
        { id: 2, numero: '#2', massaRetida: '' },

    ]);

    const setMassaTotalFino = (id: number, massaRetida: string) => {
        setEnsaiosFino((prevEnsaios) => {
            const updatedEnsaios = prevEnsaios.map((peneira) => {
                if (peneira.id === id) {
                    return { ...peneira, massaRetida };
                }
                return peneira;
            });
            return updatedEnsaios;
        });
    };

    const setMassaTotalGrosso = (id: number, massaRetida: string) => {
        setEnsaiosGrosso((prevEnsaios) => {
            const updatedEnsaios = prevEnsaios.map((peneira) => {
                if (peneira.id === id) {
                    return { ...peneira, massaRetida };
                }
                return peneira;
            });
            return updatedEnsaios;
        });
    };

    return (
        <EnsaiosContext.Provider value={{ ensaiosFino, ensaiosGrosso, setMassaTotalFino, setMassaTotalGrosso }}>
            {children}
        </EnsaiosContext.Provider>
    );
};

export const usePeneiras = () => {
    const context = useContext(EnsaiosContext);
    if (!context) {
        throw Error('useEnsaios deve ser usado dentro de um EnsaiosProvider');
    }
    return context;
};
