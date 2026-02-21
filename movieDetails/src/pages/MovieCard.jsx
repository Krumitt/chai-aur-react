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
    }, [movieId])

    if (movie)
        return (
            <div>
                {movie.Poster !== "N/A" && (
                    <img src={movie.Poster} alt={movie.Title} />
                )}

                <h1>{movie.Title}</h1>
                <p><strong>Year:</strong> {movie.Year}</p>
                <p><strong>Genre:</strong> {movie.Genre}</p>
                <p><strong>Runtime:</strong> {movie.Runtime}</p>
                <p><strong>Director:</strong> {movie.Director}</p>
                <p><strong>Actors:</strong> {movie.Actors}</p>
                <p><strong>IMDb Rating:</strong> ⭐ {movie.imdbRating}</p>
                <p><strong>Plot:</strong> {movie.Plot}</p>
            </div>
        )
    return <div>Loading...</div>
}
