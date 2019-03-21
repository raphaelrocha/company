import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Portfolio from "./components/portfolio/screens/Portfolio";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Admin from "./components/admin/screens/Admin";

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
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
