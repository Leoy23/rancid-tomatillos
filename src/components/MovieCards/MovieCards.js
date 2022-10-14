import React from 'react';
import './MovieCards.css'

const MovieCard = ({id, posterPath, title, rating, setSingleMovie}) => {
  return (
    <div className='movie-cards'>
      <img src={posterPath} alt={`${title} poster`} onClick = { () => setSingleMovie(id) }/>
      <h3>{title}</h3>
      <p>{rating} ⭐</p>
    </div>
  )
}

export default MovieCard;