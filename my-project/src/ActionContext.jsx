import { createContext, useContext, useReducer } from "react";

const initialState = {
    basket: []
};

const asteroidReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ASTEROID':
            if (state.basket.find(item => item.id === action.payload.id)) {
                return state;
            }
            return {
                ...state,
                basket: [...state.basket, action.payload]
            };
        
        case 'REMOVE_ASTEROID':
            return {
                ...state,
                basket: state.basket.filter(item => item.id !== action.payload)
            };

        default:
            return state;
    }
};

const ActionContext = createContext();

export const ActionProvider = ({ children }) => {
    const [state, dispatch] = useReducer(asteroidReducer, initialState);

    const addToBasket = (asteroid) => {
        dispatch({ type: 'ADD_ASTEROID', payload: asteroid });
    };

    const removeFromBasket = (id) => {
        dispatch({ type: 'REMOVE_ASTEROID', payload: id });
    };

    return (
        <ActionContext.Provider value={{ basket: state.basket, addToBasket, removeFromBasket }}>
            {children}
        </ActionContext.Provider>
    );
};

export const useAction = () => useContext(ActionContext);