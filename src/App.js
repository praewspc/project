import React, { Component } from 'react';
import './App.css';
import './Home.css';
import './Test.css';
import './Creategroup.css';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Router, Route , Switch} from "react-router-dom";
import Login from './Login';
import Home from './Home';
import Test from './Test';
import Creategroup from './Creategroup';

class App extends Component {
  
  renderRouter(){
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/create" component={Creategroup} />
        <Route exact path="/testhome" component={Test} />
      </Switch>
    )
  }

  render() {
    return (
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    );
  }
}

export default App;
