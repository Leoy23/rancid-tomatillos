import React, { Component } from "react"
import { Link } from "react-router-dom";
import   getAllData   from "../../apiCalls";
import "./CurrentMovie.css"

class CurrentMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            singleMovie: []
        }
    }
    componentDidMount = () => {
        this.setSingleMovie(this.props.id)
        };

  setSingleMovie = (id) => {
    getAllData(`movies/${id}`)
    .then(data => {
        const formattedData = this.formatData(data[0].movie);
        this.setState({singleMovie: formattedData}
        )})
    .catch(error => {if (error[0] === 5)
      {alert('oops! its a server issue')
     } else {
       alert('oops! something went wrong')
     } })
   }

   formatData = (state) => {
    const newState = {
        backdrop_path: state.backdrop_path,
        overview: state.overview,
        budget: state.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        release_date: state.release_date.split('-').join('/'),
        revenue: state.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        runtime: state.runtime,
        tagline: state.tagline,
        title: state.title,
        poster_path: state.poster_path,
        average_rating: state.average_rating.toFixed(1),
        genres: state.genres.join(', ')
    }
    return newState;
   }
 

render() {
    const { backdrop_path, overview, budget, release_date, average_rating, revenue, runtime, genres, tagline, title, poster_path} = this.state.singleMovie
    return(
    <div className="single-movie-page">
        {backdrop_path !== 'https://www.esm.rochester.edu/uploads/NoPhotoAvailable.jpg' 
            && <img className="backdrop-image" src={backdrop_path} alt={`${title} poster`} />}
        <div className="movie-info-container">
        <div className="movie-info">
            <h3>{overview}</h3>
            <h3>{`Release date: ${release_date}`}</h3>
            <h3>{`Rating: ${average_rating}/10⭐`}</h3>
            {budget !== 0 && <h3>{`Budget: $${budget}`}</h3>}
            {revenue !== 0 && <h3>{`Revenue: $${revenue}`}</h3>}
            {runtime !== 0 && <h3>{`Runtime: ${runtime} minutes`}</h3>}
            {genres !== [] &&<h3> {`Genres: ${genres}`}</h3>}
            {tagline && <h3>{`Tagline: '${tagline}'`}</h3>}
        </div>
        <img className="poster-image" src={poster_path} alt={`${title} poster`} />
        <Link to="/">
        <button className="back-button">BACK</button>
        </Link>
        </div> 
    </div>
        )
    }
}
export default CurrentMovie;