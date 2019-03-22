import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Footer from "./components/footer/screens/Footer";
import Header from "./components/header/screens/Header";
import Home from "./components/home/screens/Home";
import Services from "./components/services/screens/Services";
import Portfolio from "./components/portfolio/screens/Portfolio";
import Pricing from "./components/pricing/screens/Pricing";
import Contact from "./components/contact/screens/Contact";
import Admin from "./components/admin/screens/Admin";
import Login from "./components/login/screens/Login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Route path='/' exact component={Home}/>
          <Route path='/services' component={Services}/>
          <Route path='/portfolio' component={Portfolio}/>
          <Route path='/pricing' component={Pricing}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/admin' component={Admin}/>
          <Route path='/login' component={Login}/>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
