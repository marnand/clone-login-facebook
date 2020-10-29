import React, { Component } from 'react'
import facebook from './components/img/facebook.svg'
import Form from './components/form-login/index'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="left">
          <img src={facebook} />
          <p>
            O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.
          </p>
        </div>

        <div className="right">
          <Form />
        </div>
      </div>
    )
  }
}
