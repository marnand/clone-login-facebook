import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <div>
        <div className="form">
          <input placeholder="Email ou telefone" />
          <input type="password" placeholder="Senha" />
          <button>Entrar</button>
          <a href="">Esqueceu a senha?</a>
          <div className="hr"></div>
          <a className="btn" href="">Criar nova conta</a>
        </div>

        <div className="link">
            <a href="">Criar uma Página</a>  para uma celebridade, banda ou empresa.
        </div>
      </div>
    )
  }
}
