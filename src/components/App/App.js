import './App.css';
import React, { Component } from 'react'
import Movies from '../Movies/Movies.js'
import { getAllData } from '../../apiCalls'
// import singleMovie from "../../singleMovie.js"

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

  // setSingleMovie = (id) => {
  //   this.setState({singleMovie})
  // }

  render() {
    return (
      <main className='App'>
        <h1>Rancid Tomatillos</h1>
        <Movies movies={this.state.movies} />
      </main>
    )
  }
}

export default App;
