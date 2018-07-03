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
        <Switch>
          <div className='App'>
            <header className='App-header'>
              <h1 className='App-title'>Kaldahl House</h1>
              <nav>
                <Link to='/occupants'>View Occupants</Link>
              </nav>
              <nav>
                <Link to='/'>Home</Link>
              </nav>
            </header>
            <main>
              <Route
                path='/occupants'
                component={Occupant}
              />
              <form>
                <input type='text' name='name' placeholder='name' />
                <input type='text' name='age' placeholder='age' />
                <input type='text' name='role' placeholder='role' />
                <input type='submit' />
              </form>
            </main>
          </div>
        </Switch>
      </Router>
    )
  }
}

export default App
