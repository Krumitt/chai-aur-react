import { useDispatch, useSelector } from 'react-redux';
import { removeMovie } from '../movieSlice';
export default function MovieList() {
    const dispatch = useDispatch();
    const movies = useSelector(state => {
        return state.movies.movies;
    })
    function handleDelete(id) {
        dispatch(removeMovie({ id }));
    }
    return (
        <div>
            <h1>Movie List</h1>
            {
                movies.map(movie => {
                    return (
                        <div key={movie.id}>
                            <span >{movie.name}</span>
                            <button onClick={() => { handleDelete(movie.id) }}>&nbsp; Delete movie</button>
                        </div>
                    )
                })
            }
        </div>
    )
}