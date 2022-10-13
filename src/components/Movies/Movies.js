import React from 'react'
import MovieCards from '../MovieCards/MovieCards.js'
import '../Movies/Movies.css'

const Movies = (props) => {
  console.log(props.movies)
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
    </div>
  )
}

export default Movies;