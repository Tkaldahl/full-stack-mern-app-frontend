import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import Occupant from '../Occupant/Occupant'
import Profile from '../Profile/Profile'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: null,
      role: null,
      age: null
    }
  }

  createOccupant (nameValue, roleValue, ageValue) {
    this.setState({
      name: nameValue,
      role: roleValue,
      age: ageValue
    })
  }
  render () {
    return (
      <Router>
        <div className='App'>
          <header className='App-header'>
            <h1 className='App-title'>Kaldahl House</h1>
          </header>
          <nav>
            <Link to='/occupants'>View Occupants</Link>
          </nav>
          <main>
            <Route
              path='/occupants'
              component={Occupant}
            />
          </main>
        </div>
      </Router>
    )
  }
}

export default App
