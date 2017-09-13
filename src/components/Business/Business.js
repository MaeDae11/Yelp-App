import React, {Component} from 'react';
import './Business.css';

import { search } from '../../util/Yelp.js';


// The purpose of the <Business /> component is to represent how a business (a restaurant) in Ravenous will be formatted and styled
class Business extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const {
            image,
            name,
            address,
            city,
            state,
            zipCode,
            category,
            rating,
            reviewCount
        } = this.props

        return(
            <div className="Business">
                <div className="image-container">
                    <img src={image} alt={name}/>
                </div>
                <h2>{name}</h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <p>{address}</p>
                        <p>{city}</p>
                        <p>{state}, {zipCode}</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{category}</h3>
                        <h3 className="rating">Rating: {rating}/5</h3>
                        <p>Reviews: {reviewCount}</p>
                    </div>
                </div>
            </div>
        );
    }
};



export default Business;

