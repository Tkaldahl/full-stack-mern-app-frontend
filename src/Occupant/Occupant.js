import React, { Component } from 'react'
import {
  Link,
  Route
} from 'react-router-dom'
import axios from 'axios'

class Occupant extends Component {
  constructor () {
    super()
    this.state = {
      occupants: []
    //   age: null,
    //   role: null
    }
  }
  componentDidMount () {
    let origin
    if (window.location.origin === 'http://localhost:3000') {
      origin = 'http://localhost:3000'
    } else {
      origin = 'https://full-stack-mern-app-backend.herokuapp.com/'
    }
    axios.get(`${origin}`)
      .then((res) => {
        // console.log(res)
        this.setState({
          occupants: res.data
        })
        console.log(this.state.occupants)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render () {
    if (this.state.occupants.length > 0) {
      console.log('rendering updated state')
      var occupants = this.state.occupants.map((occupant, index) => {
        return (
          <div>
            <h2>{occupant.name}</h2>
            <h4>Role: {occupant.role}</h4>
            <h4>Age: {occupant.age}</h4>
          </div>
        )
      })
    }

    return (
      <div>
        <h1>Kaldahl Home Occupants</h1>
        {occupants}
      </div>
    )
  }
}

export default Occupant
