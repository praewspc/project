import React from 'react';
import {Form , Button} from 'react-bootstrap' ;


class RightSide extends React.Component {

    render(){
        return (
            <div className="loginrightblock">
                
                <p class="topic1"> Special Project </p>
            
                <Form>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label className="labelname">Username</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter your username" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label 
                        className="labelpassword">Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Enter your password" />
                </Form.Group>
                    
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check 
                        className="labelcheck" 
                        type="checkbox" 
                        label="Remember me" />
                </Form.Group>
                    
                <Button 
                    className="btnLogin" 
                    variant="secondary" 
                    size="lg" 
                    disabled type="submit">
                    Login
                </Button>
            </Form>

    
            </div>  
        
        
        )
    }
    
}

export default RightSide;
