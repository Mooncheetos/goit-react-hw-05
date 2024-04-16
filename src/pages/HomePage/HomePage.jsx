import css from "./HomePage.module.css";
import {fetchPopularMovies} from "../services/api";
import { useEffect,useState } from "react";
import MovieList from "../../components/MovieList/MovieList";


const HomePage = () => {
    const { trendingMovies, setTrendingMovies } = useState([]);
    useEffect(() => {
        const fetchTrendingMovies = async () => {
            try {
                const response = await fetchPopularMovies();
                setTrendingMovies(response);
            }
            catch (error) {
                console.log(error);
            }
        };
        fetchTrendingMovies();
    }, []);
    
    return (
        <div>
            <h2 className={css.homeTitle}>Trending films today</h2>
            <MovieList movies={trendingMovies}/>
        </div>
    );
};

export default HomePage;