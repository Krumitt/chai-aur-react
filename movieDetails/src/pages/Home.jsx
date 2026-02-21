import { useState } from 'react';
import searchMovies from '../utils/searchMovies';
import { NavLink } from 'react-router-dom';
function Home() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState(null);
    const [errMess, setErrMess] = useState('');
    const [loading, setLoading] = useState(false);
    async function handleSubmit(e) {
        e.preventDefault();
        if (query.trim() === '') return;
        setErrMess('');
        setMovies(null);
        setLoading(true);
        try {
            const mov = await searchMovies(query);
            setMovies(mov);
        }
        catch (err) {
            setErrMess(err.message);
            setMovies([]);
        }
        finally {
            setLoading(false);
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={query} onChange={e => {
                    setQuery(e.target.value)
                }} placeholder="Enter movie name" />
            </form>
            {loading && <p>Loading...</p>}
            {movies && movies.map(movie => {
                return (
                    <div key={movie.imdbID}>
                        {movie.Poster !== 'N/A' && <img src={movie.Poster} alt={movie.Title} />}

                        <h3>{movie.Title}</h3>
                        <p>{movie.Year}</p>

                        <NavLink to={`movie/${movie.imdbID}`}>
                            <button>View Details</button>
                        </NavLink>
                    </div>

                )
            })

            }
            {errMess && <p>{errMess}</p>}
        </div>
    )
}

export default Home
