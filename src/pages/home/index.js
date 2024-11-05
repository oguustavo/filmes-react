import React, { useEffect, useState } from "react";
import { Container, Movie, MovieList, Btn, CategoryContainer, CategoryList, CategoryItem } from "./style";
import { Link } from "react-router-dom";

function Home() {
    const imagePath = "https://image.tmdb.org/t/p/w500";
    const [movies, setMovies] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [genres, setGenres] = useState([]);
    const KEY = process.env.REACT_APP_KEY;

    useEffect(() => {
        fetchPopularMovies();
        fetchGenres();
    }, [KEY]);

    const fetchPopularMovies = () => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results);
            })
            .catch((error) => {
                console.error("Error fetching popular movies:", error);
            });
    };

    const fetchGenres = () => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}&language=pt-BR`)
            .then((response) => response.json())
            .then((data) => {
                setGenres(data.genres);
            })
            .catch((error) => {
                console.error("Error fetching genres:", error);
            });
    };

    const handleGenreSelect = (genreId) => {
        setSelectedGenre(genreId);
        fetchMovies(genreId);
    };

    const fetchMovies = (category) => {
        let url = `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=pt-BR&sort_by=popularity.desc&with_genres=${category}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results);
            })
            .catch((error) => {
                console.error("Error fetching movies:", error);
            });
    };

    return (
        <Container>
            <h1>Movies</h1>

            <CategoryContainer>
                
                <CategoryList>
                    <CategoryItem onClick={() => fetchPopularMovies()} selected={!selectedGenre}>
                        Popular
                    </CategoryItem>
                    {genres.map((genre) => (
                        <CategoryItem
                            key={genre.id}
                            onClick={() => handleGenreSelect(genre.id)}
                            selected={selectedGenre === genre.id}
                        >
                            {genre.name}
                        </CategoryItem>
                    ))}
                </CategoryList>
            </CategoryContainer>
            <MovieList>
                {movies.map((movie) => (
                    <Movie key={movie.id}>
                        <img
                            src={`${imagePath}${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <span>{movie.title}</span>
                        <Link to={`/${movie.id}`}>
                            <Btn>Details</Btn>
                        </Link>
                    </Movie>
                ))}
            </MovieList>
        </Container>
    );
}

export default Home;
