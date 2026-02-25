import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo } from '../redux/slices/todoSlice';
import { useSearchParams, useNavigate } from 'react-router-dom';

function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const todoId = searchParams.get('todoId');
    const isEditMode = !!todoId;

    const requiredTodo = useSelector(state =>
        state.todoReducer.todos.find(ele => ele.id === todoId)
    );

    useEffect(() => {
        if (requiredTodo) {
            setInput(requiredTodo.text);
        }
    }, [todoId]);

    const submissionHandler = (e) => {
        e.preventDefault();
        if (!isEditMode)
            dispatch(addTodo({ text: input }))
        else {
            dispatch(updateTodo({ id: todoId, text: input }));
            navigate('/', { replace: true });


        }
        setInput('');
    };

    return (
        <div className="max-w-2xl mx-auto mt-12 px-4">
            <form
                onSubmit={submissionHandler}
                className="flex gap-4 items-center bg-white shadow-lg rounded-2xl p-6"
            >
                <input
                    type="text"
                    placeholder="Enter a Todo..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-xl px-4 py-3 
                               focus:outline-none focus:ring-2 focus:ring-indigo-500 
                               transition duration-200"
                />

                <button
                    type="submit"
                    className={`px-6 py-3 rounded-xl text-white font-medium 
                               transition duration-200 shadow-md
                               ${isEditMode
                            ? "bg-amber-500 hover:bg-amber-600"
                            : "bg-indigo-600 hover:bg-indigo-700"}`}
                >
                    {isEditMode ? 'Update' : 'Add'}
                </button>
            </form>
        </div>
    );
}

export default AddTodo;