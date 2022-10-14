import React from 'react';
import './MovieCards.css'

const MovieCard = ({id, posterPath, title, rating}) => {
  return (
    <div className='movie-cards'>
      <img src={posterPath} alt='movie posters'/>
      <h3>{title}</h3>
      <p>{rating} ⭐</p>
    </div>
  )
}

export default MovieCard;