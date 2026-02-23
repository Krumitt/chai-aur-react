import { createContext, useReducer } from "react";
import expenseReducerFunc from "../utils/expenseReducerFunc";
export const ExpContext = createContext();
export default function ExpenseContext({ children }) {
    const [expenses, dispatcher] = useReducer(expenseReducerFunc, JSON.parse(localStorage.getItem('expenses')) || []);
    return (
        <ExpContext.Provider value={{ expenses, dispatcher }}>
            {children}
        </ExpContext.Provider>
    )
}