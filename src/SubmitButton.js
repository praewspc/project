import React from 'react';
import { Button} from 'react-bootstrap' ;

class SubmitButton extends React.Component{

    render(){
        return (
            <div className="submitButton">
                
                <Button 
                    className="btn" 
                    type="submit"
                    disabled ={this.props.disabled}
                    onClick= { () => this.props.onClick()}
                >
                    {this.props.text}
                    
                </Button>
            </div>
        );
    }
}

export default SubmitButton;
