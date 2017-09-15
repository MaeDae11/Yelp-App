import React, {Component} from 'react';


class Error extends Component {

    render(){
        return(
            <div className="Error">
                <span>{this.props.errorMessage}</span>
            </div>
        )
    }
};

export default Error;