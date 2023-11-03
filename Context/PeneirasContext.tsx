// EnsaiosContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';

type Peneira = {
    id: number;
    numero: string;
    massaRetida: string;
};

type EnsaiosContextType = {
    ensaiosFino: Peneira[];
    setMassaTotalFino: (peneiraNumero: number, massaRetida: string) => void;
};

const EnsaiosContext = createContext<EnsaiosContextType | undefined>(undefined);

type EnsaiosProviderProps = {
    children: ReactNode;
};

export const PeneirasProvider: React.FC<EnsaiosProviderProps> = ({ children }) => {
    const [ensaiosFino, setEnsaiosFino] = useState<Peneira[]>([
        { id: 1, numero: '#1,2', massaRetida: '' },
        { id: 2, numero: '#0,6', massaRetida: '' },
        { id: 3, numero: '#0,42', massaRetida: '' },
        { id: 4, numero: '#0,25', massaRetida: '' },
        { id: 5, numero: '#0,15', massaRetida: '' },
        { id: 6, numero: '#0,075', massaRetida: '' },
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

    return (
        <EnsaiosContext.Provider value={{ ensaiosFino, setMassaTotalFino }}>
            {children}
        </EnsaiosContext.Provider>
    );
};

export const useEnsaios = () => {
    const context = useContext(EnsaiosContext);
    if (!context) {
        throw Error('useEnsaios deve ser usado dentro de um EnsaiosProvider');
    }
    return context;
};
