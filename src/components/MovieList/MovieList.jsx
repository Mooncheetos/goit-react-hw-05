import { Link,useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
    const location = useLocation();
    return (
        <div>
            {movies && movies.map((movie) => (
                <div key={movie.id}>
                    <Link state={location} to={`/movies/${movie.id}`}>
                        <h3>{movie.title}</h3>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default MovieList;