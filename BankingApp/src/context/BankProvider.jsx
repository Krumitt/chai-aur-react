import { useReducer, createContext } from 'react';
import reducerFunc, { iniState } from './reducerFunc';
export const BankContext = createContext();
export default function BankProvider({ children }) {
    const [account, dispatcher] = useReducer(reducerFunc, iniState);
    return (
        <BankContext.Provider value={{ account, dispatcher }}>
            {children}
        </BankContext.Provider>
    )
}