import React, { Component } from "react"
import '../../apiCalls'
import   getAllData   from "../../apiCalls";
import "./CurrentMovie.css"

class CurrentMovie extends Component {
    constructor() {
        super();
        this.state = {
            singleMovie: []
        }
    }

  componentDidUpdate = () => {
    getAllData(`movies/${this.props.id}`)
    .then(data => {
        console.log('hello')
        this.setState({singleMovie: data}
        )})
    .catch(error => {if (error[0] == 5)
      {alert('oops! its a server issue')
     } else {
       alert('oops! something went wrong')
     } })
   }

render() {
    let movieDetails;
   if (this.state.singleMovie) {
    let singleMovies = this.state.singleMovie;
    movieDetails = (
    <div className="single-movie-page">
    {singleMovies.movie.backdrop_path != 'https://www.esm.rochester.edu/uploads/NoPhotoAvailable.jpg' 
        && <img className="backdrop-image" src={singleMovies.movie.backdrop_path} alt={`${singleMovies.movie.title} poster`} />}
    <div className="movie-info-container">
    <div className="movie-info">
        <h3>{singleMovies.movie.overview}</h3>
        <h3>{`Release date: ${singleMovies.movie.release_date}`}</h3>
        <h3>{`Rating: ${singleMovies.movie.average_rating.toFixed(1)}⭐`}</h3>
        {singleMovies.movie.budget != 0 && <h3>{`Budget: $${singleMovies.movie.budget}`}</h3>}
        {singleMovies.movie.revenue != 0 && <h3>{`Revenue: $${singleMovies.movie.revenue}`}</h3>}
        {singleMovies.movie.runtine != 0 && <h3>{`Runtime: ${singleMovies.movie.runtime} minutes`}</h3>}
        {singleMovies.movie.genres != [] &&<h3>{`Genres: ${singleMovies.movie.genres.join(", ")}`}</h3>}
        {singleMovies.movie.tagline && <h3>{`Tagline: '${singleMovies.movie.tagline}'`}</h3>}
    </div>
    <img className="poster-image" src={singleMovies.movie.poster_path} alt={`${singleMovies.movie.title} poster`} />
    <button className="back-button" onClick={() => this.setMultipleMovies()}>BACK</button>
    </div> 
</div>
)
   }
   
    return (
        {movieDetails}
    )
    }
}
export default CurrentMovie;