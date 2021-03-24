import React, { Component } from 'react';
import UserStore from './stores/UserStore' ;
import {observer} from 'mobx-react' ;
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

class App extends React.Component {
  
  async componentDidMount(){

    try {

      const res = await fetch('/home' , {
        method: 'post' ,
        headers:{
          'Accept' : 'application/json' ,
          'Content-Type': 'application/json'
        }
      });

      const result = await res.json();

      if(result && result.success){
        UserStore.loading = false ;
        UserStore.isLoggedIn = true ;
        UserStore.username = result.username;
      }
      
      else {
        UserStore.loading = false;
        UserStore.isLoggedIn = false ;
      }

    }

    catch(e){
        UserStore.loading = false;
        UserStore.isLoggedIn = false ;
    }

  }

  async doLogout(){

    try {

      const res = await fetch('/' , {
        method: 'post' ,
        headers:{
          'Accept' : 'application/json' ,
          'Content-Type': 'application/json'
        }
      });

      const result = await res.json();

      if(result && result.success){
        UserStore.isLoggedIn = false ;
        UserStore.username = '' ;
      }

    }

    catch(e){
        console.log(e)
    }

  }

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

    if(UserStore.loading){
      return(
        <div className="app">
            <div className='container'>
              Loading, please wait..
            </div>
        </div>
      );
    }

    else{

      if(UserStore.isLoggedIn){
        return(
          <div className="app">
              <div className='container'>
                <Route exact path="/home" component={Home} />
              </div>
          </div>
        );
      }
      return (
        <BrowserRouter>{this.renderRouter()}</BrowserRouter>
      );

    }
  }
}

export default observer (App);
