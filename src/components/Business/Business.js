import React, {Component} from 'react';
import './Business.css';



// The purpose of the <Business /> component is to represent how a business (a restaurant) in Ravenous will be formatted and styled
class Business extends Component {

    render(){

        return(
            <div className="Business">
                <div className="image-container">
                    <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
                </div>
                <h2>{this.props.name}</h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <p>{this.props.address}</p>
                        <p>{this.props.city}</p>
                        <p>{this.props.state}, {this.props.zipCode}</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{this.props.category}</h3>
                        <h3 className="rating">Rating: {this.props.rating}/5</h3>
                        <p>Reviews: {this.props.reviewCount}</p>
                    </div>
                </div>
            </div>
        );
    }
};



export default Business;

