import './App.css';
import React, { Component } from 'react'
import Movies from '../Movies/Movies.js'
import CurrentMovie from '../CurrentMovie/CurrentMovie';
import  getAllData  from '../../apiCalls'
import { Route, Switch, Link } from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: '',
    }
  }


componentDidMount() {
    getAllData('/movies')
    .then(data => {
      this.setState({movies: [...data[0].movies]})
    })
    .catch(error => this.setState({error: error.message})
    )
   }
   
  setMultipleMovies = () => {
    getAllData('/movies')
    .then(data => {
      this.setState({movies: [...data[0].movies]})
    })
    .catch(error => this.setState({error: error.message})
    )
  }

  render() {
    return (
      <main className='App'>
        <Link to="/" style={{ textDecoration: 'none' }}>
        <h1>Rancid Tomatillos</h1>
        </Link>
        {this.state.error && <h1>Oops! Something went wrong!</h1>}
        <Switch>
          <Route exact path="/" render={() => <Movies movies={this.state.movies}/>} />
          <Route exact path="/movies/:id" render={({match}) => {
            console.log("match", { match })
          return  <CurrentMovie 
          id={parseInt(match.params.id)}
          setMultipleMovies={this.setMultipleMovies}
          />
          }}
          />
        </Switch>
      </main>
    ) 
  }
}

export default App;
