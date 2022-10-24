import React from 'react'
import MovieCards from '../MovieCards/MovieCards.js'
import '../Movies/Movies.css'


const Movies = (props) => {
  const movieCards = props.movies.map(movie => {
    return (
        <MovieCards
        id={movie.id}
        posterPath={movie.poster_path}
        backdropPath={movie.backdrop_path}
        title={movie.title}
        rating={movie.average_rating.toFixed(1)}
        releaseDate={movie.release_date}
        key={movie.id}
        />
    )
  })

  return (
    <div className='movies-container'>
      {movieCards}
      {props.movies.length === 0 && <h2>Oops! This title does not exist! Try again please</h2>}
    </div>
  )
}

export default Movies;