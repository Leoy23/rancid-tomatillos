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
      showSearch: true,
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
      return movie.title.toLowerCase().includes(searchInput)
    })
      this.setState({movies: filteredMovies})
  }

  hideSearchBar = () => {
    this.setState({showSearch: false})
  }
  showSearchBar = () => {
    this.setState({showSearch: true})
  }

  render() {
    return (
      <main className='App'>
        <Link to="/" style={{ textDecoration: 'none' }}>
        <h1>Rancid Tomatillos</h1>
        </Link>
        {this.state.showSearch && <SearchMovies searchMovies={this.searchMovies} movies={this.state.cachedMovies}/>}
          {this.state.error && <h1>Oops! Something went wrong!</h1>}
        
          <Route exact path="/" render={() => <Movies movies={this.state.movies} hideSearchBar={this.hideSearchBar}/>} />
          <Route exact path="/movies/:id" render={({match}) => {
          return  <CurrentMovie 
          id={parseInt(match.params.id)}
          setMultipleMovies={this.setMultipleMovies}
          showSearchBar={this.showSearchBar}
          />
          }}
          />
      </main>
    ) 
  }
}

export default App;
