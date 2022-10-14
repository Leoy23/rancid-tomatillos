import './App.css';
import React, { Component } from 'react'
import movieData from '../../movieData.js'
import Movies from '../Movies/Movies.js'
// import singleMovie from "../../singleMovie.js"

class App extends Component {
  constructor() {
    super();
    this.state = movieData
  }


// componentDidMount() {
//   fetch('https://rancid-tomatillos.herokuapp.com/api/v2')
//     .then(response => response.json())
//     .catch(error => console.log(error))
// }

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
