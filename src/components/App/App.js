import './App.css';
import React, { Component } from 'react'
import Movies from '../Movies/Movies.js'
import CurrentMovie from '../CurrentMovie/CurrentMovie';
import  getAllData  from '../../apiCalls'
import { Route, Link } from 'react-router-dom'
import SearchMovies from '../../SearchMovies/SearchMovies';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      cachedMovies: [],
      error: '',
    }
  }

componentDidMount() {
    getAllData('/movies')
    .then(data => {
      this.setState({movies: data[0].movies})
      this.setState({cachedMovies: data[0].movies})
    })
    .catch(error => this.setState({error: error})
    )
   }
   
  setMultipleMovies = () => {
    getAllData('/movies')
    .then(data => {
      this.setState({movies: data[0].movies})
    })
    .catch(error => this.setState({error: error})
    )
  }

  searchMovies = (searchInput) => {
    const filteredMovies = this.state.cachedMovies.filter((movie) => {
      return movie.title.toLowerCase().includes(searchInput) || movie.title.toUpperCase().includes(searchInput)
    })
      this.setState({movies: filteredMovies})
  }

  render() {
    return (
      <main className='App'>
        <Link to="/" style={{ textDecoration: 'none' }}>
        <h1>Rancid Tomatillos</h1>
        <SearchMovies searchMovies={this.searchMovies} movies={this.state.cachedMovies}/>
        </Link>
          {this.state.error && <h1>Oops! Something went wrong!</h1>}
          <Route exact path="/" render={() => <Movies movies={this.state.movies} />} />
          <Route exact path="/movies/:id" render={({match}) => {
          return  <CurrentMovie 
          id={parseInt(match.params.id)}
          />
          }}
          />
          <Route render={() => <h2>Oops! This title does not exist! Try again please</h2>}/>
      </main>
    ) 
  }
}

export default App;
