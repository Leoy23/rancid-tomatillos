import React from "react"
import "./CurrentMovie.css"

const CurrentMovie = ({ movies }) => {
    console.log(movies)
    return (
        <div className="single-movie-page">
            <div className="movie-info">
                <h3>{movies.movie.overview}</h3>
                <h3>{movies.movie.release_date}</h3>
                <h3>{movies.movie.average_rating}</h3>
                <h3>{movies.movie.budget}</h3>
                <h3>{movies.movie.revenue}</h3>
                <h3>{movies.movie.runtime}</h3>
                <h3>{movies.movie.genres}</h3>
                <h3>{movies.movie.tagline}</h3>
            </div>
            <img src={movies.movie.poster_path} alt={`${movies.movie.title} poster`} />
        </div>
    )
}

export default CurrentMovie;