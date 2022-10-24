import React from 'react';
import './MovieCards.css'
import { NavLink } from 'react-router-dom';

const MovieCard = ({id, posterPath, title, rating, hideSearchBar}) => {
  return (
    <NavLink to={`/movies/${id}`} key={id}>
      
    <div className='movie-cards'>
      <img src={posterPath} alt={`${title} poster`}/>
      <h3 className='title'>{title}</h3>
      <p>{rating} ⭐</p>
    </div>
    </NavLink>
  )
}

export default MovieCard;