import React, {Component} from 'react';
import AdminMenu from "../components/AdminMenu";
import {Route} from 'react-router-dom';
import AdminPortfolio from "./AdminPortfolio";

export default class Admin extends Component{

  constructor(props) {
    super(props);
  }

  render() {
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