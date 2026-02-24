import { createContext, useState, useEffect } from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "sample todo message",
            completed: false
        }

    ],
    addTodo: mess => { },
    remTodo: ID => { },
    updateTodo: (ID, mess) => { },
    compTodo: ID => { }
});

function TodoContextProvider({ children }) {
    const [todos, setTodos] = useState(() => {
        return (localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [])
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    function addTodo(mess) {
        setTodos(prev => {
            return [...prev, { id: Date.now(), todo: mess, completed: false }]
        })
    }
    function remTodo(ID) {
        setTodos(prev => {
            return (prev.filter(ele => {
                return ele.id !== ID;
            }))
        })
    }
    function updateTodo(ID, mess) {
        setTodos(prev => {
            return (prev.map(ele => {
                if (ele.id !== ID) return ele;
                return { ...ele, todo: mess };
            }))
        })
    }
    function compTodo(ID) {
        setTodos(prev => {
            return (
                prev.map(ele => {
                    if (ele.id === ID) return { ...ele, completed: !ele.completed };
                    return ele;
                }))
        })
    }
    return (
        <TodoContext.Provider value={{ todos, addTodo, remTodo, updateTodo, compTodo }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider
