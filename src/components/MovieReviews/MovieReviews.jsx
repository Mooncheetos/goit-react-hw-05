import css from "./MovieReviews.module.css";
import {useParams} from "react-router-dom";
import {fetchMovieReviews} from "../services/api";
import { useEffect,useState } from "react";

const MovieReviews = () => {
    const { movieId } = useParams();
    const { movieReviews, setMovieReviews } = useState([]);
    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const castResp = await fetchMovieReviews(movieId);
                setMovieReviews(castResp);
            }
            catch (error) {
                console.log(error);
            }
        };
        fetchMovieDetails();
    }, [movieId]);
    
    return (
        <div>
            <h3 className={css.reviewsTitle}>Film reviews</h3>
            {movieReviews.length > 0 ? (
                <ul className={css.reviewsList}>
                    {movieReviews.map((review) => (
                        <li key={review.id}>
                            <p className={css.reviewsAuthor}>{review.author}</p>
                            <p className={css.reviewsComment}>{review.comment}</p>
                        </li>
                    ))};
                </ul>
            ) : (
                <p>We don't have any reviews for this movie</p>
            )}            
        </div>
    );
};

export default MovieReviews;