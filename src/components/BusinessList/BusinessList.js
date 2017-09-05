import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './BusinessList.css';
import Business from '../Business/Business.js';


class BusinessList extends Component {

    render() {
        return(
            <div className="BusinessList">
                {this.props.businesses.map((business) => {
                    return <Business businesses={business}/>
                })}
            </div>
        );
    };
};

export default BusinessList;