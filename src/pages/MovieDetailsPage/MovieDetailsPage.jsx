import css from "./MovieDetailsPage.module.css";
import { Link,useLocation,useParams, Routes, Route } from "react-router-dom";
import {getMovieById} from "../services/api";
import { useEffect, useState, useRef } from "react";
import Loader from "../../components/Loader/Loader";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
import MovieCast from "../../components/MovieCast/MovieCast";

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const { movieDetails, setMovieDetails } = useState(null);
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
            <h2 className={css.movieTitle}>{movieDetails.title}</h2>
            <img className={css.moviePoster}
              src={
                movieDetails.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}` :null
              }
              width={250}
                alt={movieDetails.title} />
            <h2>{movieDetails.title}</h2>
            <p className={css.movieOverview}>{movieDetails.overview}</p>
            <div className={css.movieLink}>
                <Link to="cast">Film Cast</Link>
                <Link to="reviews">Film Review</Link>
            </div>
            <Routes>
                <Route path="cast" element={<MovieCast/>}/>
          <Route path="reviews" element={<MovieReviews />} />    
            </Routes>
        </div>
    );
};

export default MovieDetailsPage;