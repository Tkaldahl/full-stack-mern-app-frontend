import React, { Component } from 'react'
import {
  Link,
  Route
} from 'react-router-dom'
import axios from 'axios'

class Occupant extends Component {
  componentDidMount () {
    let origin
    if (window.location.origin === 'http://localhost:3000') {
      origin = 'http://localhost:3000'
    } else {
      origin = 'https://full-stack-mern-app-backend.herokuapp.com/'
    }
    axios.get(`${origin}/occupants`)
      .then((res) => {
        console.log(res)
        // this.setState({
        //   translations: res.data
        // })
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
