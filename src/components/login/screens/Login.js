import React, {Component} from 'react';
import {firebaseAuth} from '../../../firebaseConfig'
import {Redirect} from 'react-router-dom'

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state={
      logged: false,
      loginInProgress: false,
      loginError: false,
    };
  }

  performLogin = () => {

    this.setState({
      loginInProgress: true
    });

    let {email, password} = this.refs;

    console.log(email.value,password.value);

    firebaseAuth.signInWithEmailAndPassword(email.value,password.value)
      .then(user => {
        console.log('usuário logado', user);
        this.setState({logged: true, loginInProgress: false});
      })
      .catch(error => {
        console.warn('erro de login', error);
        this.setState({logged: false, loginInProgress: false, loginError: true});
      });
  };

  render() {
    if(this.state.logged){
      return <Redirect to={'/admin'}/>
    }
    return (
      <div className={'container'}>
        <h1>Login</h1>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                 placeholder="neme@email.com" name='email' ref={'email'}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input type="password" className="form-control" id="password" placeholder="Senha" name='password' ref={'password'}/>
        </div>

        {
          this.state.loginError
          &&
          (
            <div>
              <small id="emailHelp" className="form-text text-muted">Email e/ou senha invalidos.
              </small>
            </div>
          )
        }

        <button type="button" className="btn btn-primary" disabled={this.state.loginInProgress} onClick={this.performLogin.bind(this)}>Submit</button>
      </div>
    );
  }
}