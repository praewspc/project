import React from 'react';
import './Login.css';
import "bootstrap/dist/css/bootstrap.css";
import {Button, Alert , Row , Col} from 'react-bootstrap';
import LeftSide from "./login/LeftSide";
import RightSide from "./login/RightSide";
import UserStore from './stores/UserStore' ;

class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username: '' ,
      password: '' ,
      buttonDisabled: false
    }
  }

  setInputValue(property, val){
    val = val.trim();
    if(val.length > 11){
      return ;
    }
    this.setState({
      [property]: val
    })
  }

  resetForm() {
    this.setState({
      username: '',
      password: '',
      buttonDisabled: false
    })
  }

  async doLogin(){
    if(!this.state.username){
      return;
    }
    if(!this.state.password){
      return;
    }

    this.setState({
      buttonDisabled: true
    })

    try {
      const response = await fetch('/' , {
        method: 'post' ,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      });

      const result = await response.json();
      if(result && result.success){
        UserStore.isLoggedIn = true ;
        UserStore.username = result.username ;
      }

      else if (result && result.success === false){
        this.resetForm();
        alert(result.msg);
      }
    }

    catch(e){
      console.log(e);
      this.resetForm();
    }

  }

  render(){
    return (
      <div className="Login">

        <Row className="landing">
          <Col className="left" ><LeftSide /></Col>
          <Col className="right"><RightSide /></Col>
        </Row>
      </div>


    
    );
  }
  
}

export default Login;
