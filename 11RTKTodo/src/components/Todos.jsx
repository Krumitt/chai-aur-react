import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../redux/slices/todoSlice';
import { useNavigate } from 'react-router-dom';

function Todos() {
    const todos = useSelector(state => state.todoReducer.todos);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleClick(ID) {
        dispatch(removeTodo({ id: ID }));
    }

    return (
        <div className="max-w-2xl mx-auto mt-8 px-4">
            <ul className="space-y-4">
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        className="flex items-center justify-between 
                                   bg-white shadow-md rounded-2xl 
                                   px-6 py-4 transition hover:shadow-lg"
                    >
                        <p className="text-gray-800 text-lg break-words">
                            {todo.text}
                        </p>

                        <div className="flex gap-3">
                            <button
                                onClick={() => handleClick(todo.id)}
                                className="px-4 py-2 bg-red-500 hover:bg-red-600 
                                           text-white rounded-lg transition"
                            >
                                Delete
                            </button>

                            <button
                                onClick={() => navigate(`/?todoId=${todo.id}`)}
                                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 
                                           text-white rounded-lg transition"
                            >
                                Edit
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todos;