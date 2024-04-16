import axios from "axios";

const accessKey = "7dc48f839873514344708852b0fb40cf";
const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGM0OGY4Mzk4NzM1MTQzNDQ3MDg4NTJiMGZiNDBjZiIsInN1YiI6IjY2MWU1NGNkOTY2NzBlMDE3ZGQ5MjJmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L1saPM2rTd-21ycS0LP0-HAZ5xBHkGuMDXPeVMgzA1w",
    },
});

export const fetchMovies = async (query) => {
    const response = await api.get("/search/movie", {
        params: {
            api_key: accessKey,
            query:query,
        },
    });
    return response.data.results;
};
export const fetchMovieCast = async () => {
    const response = await api.get(`/movie/${movieId}/credits`, {
        params: {
            api_key: accessKey,
        },
    });
    return response.data.cast;
};
export const fetchMovieReviews = async (movieId) => {
    const response = await api.get(`/movie/${movieId}/reviews`, {
        params: {
            api_key: accessKey,            
        },
    });
    return response.data.results;
};
export const getMovieById = async (movieId) => {
    const response = await api.get(`/movie/${movieId}`, {
        params: {
            api_key: accessKey,            
        },
    });
    return response.data;
};
export const fetchPopularMovies = async () => {
    const response = await api.get("/trending/movie/day", {
        params: {
            api_key: accessKey,
        },
    });
    return response.data.results;
};