import React, {Component} from 'react';
import AdminMenu from "../components/AdminMenu";
import {Route, Redirect} from 'react-router-dom';
import AdminPortfolio from "./AdminPortfolio";
import {firebaseAuth} from '../../../firebaseConfig'

export default class Admin extends Component{

  constructor(props) {
    super(props);

    this.state = {
      logged: false,
      loginInProgress: true,
      user: null
    }
  }

  componentDidMount(){
    firebaseAuth.onAuthStateChanged(user=>{
      this.setState(
        {
          user,
          loginInProgress: false,
          logged: !!user
        }
      );
    });
  }

  render() {
    if(this.state.loginInProgress){
      return (<h1>Aguarde....</h1>);
    }

    if(!this.state.logged){
      return (<Redirect to={'/login'}/>);
    }

    let url = this.props.match.url;
    return (
      <div>
        <h2>Painel Administrativo</h2>
        <Route path={'/'} component={AdminMenu}/>
        <Route path={url+'/portfolio'} component={AdminPortfolio}/>
      </div>
    );
  }

}