import { useState } from 'react';
import { addMovie } from '../movieSlice';
import { useDispatch } from 'react-redux';
export default function MovieInput() {
    const [newMovie, setNewMovie] = useState('');
    const dispatch = useDispatch();

    function handleInput(e) {

        setNewMovie(e.target.value);
        if (e.key === 'Enter') {
            e.preventDefault();
            handleClick();
        }


    }
    function handleClick() {
        if (newMovie) {
            dispatch(addMovie({ name: newMovie }))
        }
        setNewMovie('');
    }
    return (
        <>
            <input onChange={handleInput} onKeyDown={handleInput} value={newMovie} />
            <button onClick={handleClick}>Add Movie</button>
        </>
    )
}