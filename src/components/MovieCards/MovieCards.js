import React from 'react';
import './MovieCards.css'
import { NavLink } from 'react-router-dom';

const MovieCard = ({id, posterPath, title, rating, }) => {
  return (
    <NavLink to={`/movies/${id}`} key={id}>
    <div className='movie-cards'>
      <img src={posterPath} alt={`${title} poster`}/>
      <h3>{title}</h3>
      <p>{rating} ⭐</p>
    </div>
    </NavLink>
  )
}

export default MovieCard;