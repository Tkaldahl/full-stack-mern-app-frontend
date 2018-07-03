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
      occupants: null,
      age: null,
      role: null
    }
  }
  componentDidMount () {
    let origin
    if (window.location.origin === 'http://localhost:3000') {
      origin = 'http://localhost:3000'
    } else {
      origin = 'https://full-stack-mern-app-backend.herokuapp.com/tay'
    }
    axios.get(`${origin}`)
      .then((res) => {
        console.log(res)
        this.setState({
          occupants: res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render () {
    // const translations = this.state.translations.map((translation, index) => {
    return (
      <div>
          HELLO WORLD
      </div>
    )
  }
}

export default Occupant
