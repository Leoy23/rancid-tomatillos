import './App.css';
import React, { Component } from 'react'
import Movies from '../Movies/Movies.js'
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
    .catch(error => console.log(error))
}

  setSingleMovie = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => response.json())
    .then(data => this.setState({movies: data}))
    .catch(error => alert(error))
  }

  render() {
    return (
      <main className='App'>
        <h1>Rancid Tomatillos</h1>
        {this.state.movies.length > 1 && <Movies movies={this.state.movies} setSingleMovie={this.setSingleMovie}/>}
        {this.state.movies.movie && <h2>{this.state.movies.movie.title}</h2>}
      </main>
    ) 
  }
}

export default App;
