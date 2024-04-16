import css from "./MoviesPage.module.css";
import { useSearchParams } from "react-router-dom";
import {fetchMovies} from "../services/api";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
    const { searchParams,setSearchParams } = useSearchParams();
    const { searchResults, setSearchResults } = useState([]);
    const query = searchParams.get("query");

    useEffect(() => {
        if (!query) {
            setSearchResults([]);
            return;
    }
        async function fetchMovieByQuery() {
            try {
                const data = await fetchMovies(query);
                searchResults(data);
            }
            catch (error) {
                console.log(error);
            }
        };
        fetchMovieByQuery();
    }, [query]);
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const searchTerm = e.target.elements.inputValue.value.toLowerCase();
        setSearchParams({ query: searchTerm });
        e.target.elements.inputValue.value = "";
    };
    
    return (
        <div>
            <h2 className={css.searchTitle}>Search Movies</h2>
            <form className={css.searchForm} onSubmit={handleSearchSubmit}>
                <input className={css.searchInput} type="text" name="inputValue"/>
                <button className={css.searchBtn} type="submit">Search</button>
            </form>
            <MovieList movies={searchResults } />
        </div>
    );
};

export default MoviesPage;