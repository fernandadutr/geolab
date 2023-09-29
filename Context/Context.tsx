import React, { createContext, useContext, useState, ReactNode } from 'react';

type UserState = {
    userName: string;
    setUserName: (name: string) => void;
};

const UserContext = createContext<UserState | undefined>(undefined);

type UserProviderProps = {
    children: ReactNode;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [userName, setUserName] = useState('');

    return (
        <UserContext.Provider value={{ userName, setUserName }}>
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

