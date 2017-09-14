import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './BusinessList.css';
import Business from '../Business/Business.js';


class BusinessList extends Component {
    constructor(props){
        super(props);
    }

    render() {
        let restrauntInfo = this.props.businesses.map((business) => {
            let name = business['name'];
            let image = business['imageSrc']
            let address = business['address'];
            let city = business['city'];
            let state = business['state'];
            let zip = business['zipCode'];
            let rating = business['rating'];
            let review = business['reviewCount'];
            return <Business 
                key={business.id}
                image={image}
                name={name} 
                address={address} 
                city={city} 
                state={state} 
                zipCode={zip} 
                rating={rating} 
                reviewCount={review} 
                />
        })
        return(
            <div className="BusinessList">
                {restrauntInfo}
            </div>
        );
    };
};

export default BusinessList;