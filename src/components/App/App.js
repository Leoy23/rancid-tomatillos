import './App.css';
import React, { Component } from 'react'
import Movies from '../Movies/Movies.js'
import CurrentMovie from '../CurrentMovie/CurrentMovie';
import { getAllData } from '../../apiCalls'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    }
  }


componentDidMount() {
    getAllData('/movies')
    .then(data => {
      this.setState({movies: [...data[0].movies]})
    })
    .catch(error => alert(error))
}

  setSingleMovie = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => response.json())
    .then(data => this.setState({movies: data}))
    .catch(error => alert(error))
  }
  setMultipleMovies = () => {
    getAllData('/movies')
    .then(data => {
      this.setState({movies: [...data[0].movies]})
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <main className='App'>
        <h1>Rancid Tomatillos</h1>
        {this.state.movies.length > 1 && <Movies movies={this.state.movies} setSingleMovie={this.setSingleMovie}/>}
        {this.state.movies.movie && <CurrentMovie movies={this.state.movies} setMultipleMovies={this.setMultipleMovies} />}
      </main>
    ) 
  }
}

export default App;
