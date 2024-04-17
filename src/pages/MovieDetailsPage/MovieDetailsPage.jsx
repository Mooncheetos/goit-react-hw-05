import css from "./MovieDetailsPage.module.css";
import { Link,useLocation,useParams, Routes, Route } from "react-router-dom";
import {getMovieById} from "../../components/services/api";
import { useEffect, useState, useRef } from "react";
import Loader from "../../components/Loader/Loader";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
import MovieCast from "../../components/MovieCast/MovieCast";

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const location = useLocation();
    const backLinkRef = useRef(location.state ?? "/movies");

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const detailsResponse = await getMovieById(movieId);
                setMovieDetails(detailsResponse);
            }
            catch (error) {
                console.log(error);
            }
        };
        fetchMovieDetails();
    }, [movieId]);
    if (!movieDetails){
        return <Loader />;
    }

    return (        
        <div>
        <Link to={backLinkRef.current}> * Go back * </Link>
        <div className={css.movieContainer}>
            <img className={css.moviePoster}
                src={
                    movieDetails.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}` :null
                }
                width={390}
                alt={movieDetails.title} />
                <div className={css.movieInfo}>
                    <ul>
                        <li>
                            <h2 className={css.movieTitle}>{movieDetails.title}</h2>
                            <p>User score: {movieDetails.vote_average}</p>
                        </li>
                        <li>
                            <h3>Overview </h3>
                    <p className={css.movieOverview}>{movieDetails.overview}</p>
                        </li>
                        <li>
                            <h3>Genres</h3>
                <p>{movieDetails.genres.map(genre => genre.name).join(', ')}</p>
                        </li>
                    </ul>
            </div>
        </div>
        <h3>Additional information</h3>
        <div className={css.movieLink}>
            <Link to="cast">Film Cast</Link>
            <Link to="reviews">Film Review</Link>
        </div>
        <Routes>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
        </Routes>
    </div>
    );
};

export default MovieDetailsPage;