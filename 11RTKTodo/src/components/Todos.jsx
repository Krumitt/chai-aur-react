import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../redux/slices/todoSlice';
function Todos() {
    const todos = useSelector(state => {
        return state.todoReducer.todos

    })
    const dispatch = useDispatch();
    function handleClick(ID) {
        dispatch(removeTodo({ id: ID }));
    }
    return (
        <div>
            <ul>
                {todos.map(todo => {
                    return (
                        <li key={todo.id}>
                            <p>{todo.text}</p>
                            <button onClick={() => { handleClick(todo.id) }}>X</button>
                        </li>)
                })}
            </ul>
        </div>
    )
}

export default Todos;
