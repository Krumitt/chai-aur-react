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
        <div className="min-h-screen bg-zinc-950 text-white px-6 py-8">

            {/* Search Form */}
            <form
                onSubmit={handleSubmit}
                className="max-w-xl mx-auto mb-10"
            >
                <input
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Enter movie name"
                    className="w-full px-5 py-3 rounded-lg bg-zinc-900 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-zinc-500 transition"
                />
            </form>

            {/* Loading */}
            {loading && (
                <div className="flex justify-center my-8">
                    <div className="h-10 w-10 border-4 border-zinc-600 border-t-white rounded-full animate-spin"></div>
                </div>
            )}

            {/* Movie Grid */}
            {movies && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {movies.map(movie => (
                        <div
                            key={movie.imdbID}
                            className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300"
                        >
                            {movie.Poster !== 'N/A' && (
                                <img
                                    src={movie.Poster}
                                    alt={movie.Title}
                                    className="w-full h-72 object-cover"
                                />
                            )}

                            <div className="p-4">
                                <h3 className="text-lg font-semibold truncate">
                                    {movie.Title}
                                </h3>
                                <p className="text-sm text-zinc-400 mb-3">
                                    {movie.Year}
                                </p>

                                <NavLink to={`movie/${movie.imdbID}`}>
                                    <button className="w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition font-medium">
                                        View Details
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Error */}
            {errMess && (
                <p className="text-center text-red-400 mt-8">
                    {errMess}
                </p>
            )}

        </div>
    );
}

export default Home;