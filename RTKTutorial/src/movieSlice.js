import { createSlice } from "@reduxjs/toolkit";
const iniState = {
    movies: [{ id: 1, name: 'intersteller' },
    { id: 2, name: 'Bhool bhulaiya' }
    ]
}
const movieSlice = createSlice({
    name: 'movies',
    initialState: iniState,
    reducers: {
        addMovie: (state, action) => {
            console.log(action);
            return { movies: [...state.movies, { id: Date.now(), name: action.payload.name }] };
        },
        removeMovie: (state, action) => {
            console.log(action);
            return { movies: state.movies.filter(movie => movie.id !== action.payload.id) }
        }
    }
})
export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;