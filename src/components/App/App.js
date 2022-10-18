import './App.css';
import React, { Component } from 'react'
import Movies from '../Movies/Movies.js'
import CurrentMovie from '../CurrentMovie/CurrentMovie';
import  getAllData  from '../../apiCalls'
import { Route, NavLink, Switch } from 'react-router-dom'

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
    .catch(error => {if (error[0] == 5)
      {alert('oops! its a server issue')
     } else {
       alert('oops! something went wrong')
     } })
   }
   
  setMultipleMovies = () => {
    getAllData('/movies')
    .then(data => {
      this.setState({movies: [...data[0].movies]})
    })
    .catch(error => {if (error[0] == 5)
      {alert('oops! its a server issue')
     } else {
       alert('oops! something went wrong')
    } })
  }

  render() {
    return (
      <main className='App'>
        <h1>Rancid Tomatillos</h1>
        <Switch>
          <Route exact path="/" render={() => <Movies movies={this.state.movies}/>} />
          <Route exact path="/movies/:id" render={({match}) => {
          return <CurrentMovie 
          id={parseInt(match.params.id)}
          setMultipleMovies={this.setMultipleMovies} />
          }}
          />
        </Switch>
      </main>
    ) 
  }
}

export default App;
