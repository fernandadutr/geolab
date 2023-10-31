import React, { createContext, useContext, useState, ReactNode } from 'react';

type UserState = {
    userName: string;
    email: string;
    setUserName: (name: string) => void;
    setEmail: (email: string) => void; 
};

const UserContext = createContext<UserState | undefined>(undefined);

type UserProviderProps = {
    children: ReactNode;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');

    return (
        <UserContext.Provider value={{ userName, email, setUserName, setEmail }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = (): UserState => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser deve ser usado dentro de um UserProvider');
    }
    return context;
};
