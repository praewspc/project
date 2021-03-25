import React from 'react';
import './Login.css';
import "bootstrap/dist/css/bootstrap.css";
import {Button, Alert , Row , Col} from 'react-bootstrap';
import LeftSide from "./login/LeftSide";
import RightSide from "./login/RightSide";
import UserStore from './stores/UserStore' ;

class Login extends React.Component {

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
