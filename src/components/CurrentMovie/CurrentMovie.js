import React from "react"
import "./CurrentMovie.css"

const CurrentMovie = ({ movies, setMultipleMovies }) => {
    return (
        <div className="single-movie-page">
            {movies.movie.backdrop_path != 'https://www.esm.rochester.edu/uploads/NoPhotoAvailable.jpg' 
                && <img className="backdrop-image" src={movies.movie.backdrop_path} alt={`${movies.movie.title} poster`} />}
            <div className="movie-info-container">
            <div className="movie-info">
                <h3>{movies.movie.overview}</h3>
                <h3>{`Release date: ${movies.movie.release_date}`}</h3>
                <h3>{`Rating: ${movies.movie.average_rating.toFixed(1)}⭐`}</h3>
                {movies.movie.budget != 0 && <h3>{`Budget: $${movies.movie.budget}`}</h3>}
                {movies.movie.revenue != 0 && <h3>{`Revenue: $${movies.movie.revenue}`}</h3>}
                {movies.movie.runtine != 0 && <h3>{`Runtime: ${movies.movie.runtime} minutes`}</h3>}
                {movies.movie.genres != [] &&<h3>{`Genres: ${movies.movie.genres.join(", ")}`}</h3>}
                {movies.movie.tagline && <h3>{`Tagline: '${movies.movie.tagline}'`}</h3>}
            </div>
            <img className="poster-image" src={movies.movie.poster_path} alt={`${movies.movie.title} poster`} />
            <button className="back-button" onClick={() => setMultipleMovies()}>BACK</button>
            </div> 
        </div>
    )
}

export default CurrentMovie;