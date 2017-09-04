import React, {Component} from 'react';
import './SearchBar.css';


const sortByOptions = {
    'Best Match' : 'best_match',
    'Highest Rated' : 'rating',
    'Most Reviewed' : 'review_count'
};

class SearchBar extends Component {
    //The purpose of renderSortByOptions() is to dynamically create the list items needed to display the sort options (Best Match, Highest Rated, Most Reviewed)
    // This is to help future proof against potential changes to the Yelp API.
    //The method should iterate through the keys and values of the sortByOptions object and return a list item. The list item elements should use the keys as an attribute, and the values as content. 
    renderSortByOptions(){
        return Object.keys(sortByOptions).map(sortByOption => {
            // stores object values in a variable. then access the sortByOptions values using the sortByOption parameter of the callback function.
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li>{sortByOptionValue}</li>
        });
    };
    render(){
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                <ul>
                    {renderSortByOptions()}
                </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        )
    }
};


export default SearchBar;