import { createContext, useState, useContext } from 'react';

const ActionContext = createContext();

export const ActionProvider = ({ children }) => {
    const [basket, setBasket] = useState([]); 

    const addToBasket = (asteroid) => {
    if (!asteroid) return; 

    setBasket((prev) => {
        if (prev.find(item => item.id === asteroid.id)) return prev;
        return [...prev, asteroid];
    });
};

    return (
        <ActionContext.Provider value={{ basket, addToBasket }}>
            {children}
        </ActionContext.Provider>
    );
};

export const useAction = () => useContext(ActionContext);