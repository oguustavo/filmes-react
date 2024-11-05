import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./styles.css";


const Movie = () => {
    const { id } = useParams();
    const imagePath = "https://image.tmdb.org/t/p/w500";

    const [movie, setMovie] = useState([]);
    const KEY = process.env.REACT_APP_KEY;
    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`
        )
            .then((response) => response.json())
            .then((data) => {
                const res = data.results;
                let filme = res.find((key) => {
                    // eslint-disable-next-line
                    return key.id == id;
                });
                setMovie(filme);
            }); // eslint-disable-next-line
    }, []);

    return (
        <div>
            <nav>
                <Link to="/" className="volta">
                    <FaArrowLeft size={25} />
                </Link>
                <h1>Movie</h1>
            </nav>
            <div className="container">
                <h1 className="title">{movie.title}</h1>
                <img
                    className="img_movie"
                    src={`${imagePath}${movie.poster_path}`}
                    alt="{movie.title}"
                /> 
                    <h3 className="data">Data de lançamento: {movie.release_date}</h3>
                    <div className="descricao">
                        <h4>Descrição: </h4>
                        <p className="movie-desc">{movie.overview}</p>
                    </div>
            </div>
        </div>
    );
};

export default Movie;
