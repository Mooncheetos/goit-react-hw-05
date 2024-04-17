import css from "./MovieCast.module.css";
import {useParams} from "react-router-dom";
import {fetchMovieCast} from "../../components/services/api";
import { useEffect,useState } from "react";

const MovieCast = () => {
    const { movieId } = useParams();
    const [movieCast, setMovieCast ] = useState([]);
    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const castResp = await fetchMovieCast(movieId);
                setMovieCast(castResp);
            }
            catch (error) {
                console.log(error);
            }
        };
        fetchMovieDetails();
     }, [movieId]);
    return (
        <div>
            <h2 className={css.castTitle}>Film cast</h2>
            <ul className={css.castList}>{movieCast.map((actor) => (
                <li key={actor.id}>
                    <img className={css.castImg}
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` :null
              }
              width={150}
              alt={actor.name}/>
                    <p>{actor.name}</p>
                </li>
            ))};                
            </ul>
        </div>
    );
};

export default MovieCast;