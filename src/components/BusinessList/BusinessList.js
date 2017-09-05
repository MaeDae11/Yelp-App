import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './BusinessList.css';
import Business from '../Business/Business.js';


class BusinessList extends Component {
    constructor(props){
        super(props);
    }

    render() {
        let namesss = this.props.businesses.map((business) => {
            let name = business['name'];
            // let image = business['imgeSrc']
            let address = business['address'];
            let city = business['city'];
            let state = business['state'];
            let zip = business['zipCode'];
            let rating = business['rating'];
            let review = business['reviewCount']
            return <Business address={address} name={name} city={city} zipCode={zip} city={city} state={state} rating={rating} reviewCount={review}/>
        })
        return(
            <div className="BusinessList">
                {namesss}
            </div>
        );
    };
};

export default BusinessList;