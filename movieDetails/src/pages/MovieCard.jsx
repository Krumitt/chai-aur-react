import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieCard() {
    const { movieId } = useParams();

    const [movie, setData] = useState(null);

    useEffect(() => {
        (async function fetchMovie() {
            const res = await fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=8d761253`);
            const data = await res.json();
            setData(data);
        })();
    }, [movieId]);

    if (movie)
        return (
            <div className="min-h-screen bg-zinc-950 text-white px-6 py-10">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">

                    {/* Poster */}
                    <div className="flex justify-center">
                        {movie.Poster !== "N/A" && (
                            <img
                                src={movie.Poster}
                                alt={movie.Title}
                                className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
                            />
                        )}
                    </div>

                    {/* Details */}
                    <div className="space-y-4">
                        <h1 className="text-4xl font-extrabold tracking-wide">
                            {movie.Title}
                        </h1>

                        <div className="text-zinc-400 text-sm flex flex-wrap gap-4">
                            <span>{movie.Year}</span>
                            <span>•</span>
                            <span>{movie.Runtime}</span>
                            <span>•</span>
                            <span>{movie.Genre}</span>
                        </div>

                        <div className="bg-zinc-900 rounded-xl p-6 shadow-lg space-y-3">
                            <p>
                                <span className="text-zinc-400 font-medium">Director:</span>{" "}
                                {movie.Director}
                            </p>

                            <p>
                                <span className="text-zinc-400 font-medium">Actors:</span>{" "}
                                {movie.Actors}
                            </p>

                            <p>
                                <span className="text-zinc-400 font-medium">IMDb Rating:</span>{" "}
                                <span className="text-yellow-400 font-semibold">
                                    ⭐ {movie.imdbRating}
                                </span>
                            </p>

                            <p className="pt-4 text-zinc-300 leading-relaxed">
                                {movie.Plot}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );

    return (
        <div className="min-h-screen bg-zinc-950 flex justify-center items-center">
            <div className="h-12 w-12 border-4 border-zinc-600 border-t-white rounded-full animate-spin"></div>
        </div>
    );
}