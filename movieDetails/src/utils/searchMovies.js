export default async function searchMovies(name) {
    const res = await fetch(`https://www.omdbapi.com/?s=${name}&apikey=8d761253`);
    const data = await res.json();
    if (data.Response === 'False') throw new Error(data.Error);
    return data.Search;
}