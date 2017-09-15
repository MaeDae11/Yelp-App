import React, { Component } from 'react';
import './App.css';

import Business from './components/Business/Business.js';
import BusinessList from './components/BusinessList/BusinessList.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import Error from './components/SearchBar/HandleError.js';

import Yelp from './util/Yelp.js';



class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            businesses: [],
            message: ""
        }
    }

    searchYelp = (term, location, sortBy) => {
        if (!location || !term){
            this.setState({
                message: "Please enter a location and term."
            })
        } else {
            Yelp.search(term, location, sortBy).then(businesses => {
                if(businesses.length > 0){
                    businesses: [];
                }
                this.setState({
                    businesses: businesses,
                    message: ""
                });
            });
        };
    }  

    render() {
        return (
            <div className="App">
                <h1>ravenous</h1>
                <SearchBar searchYelp={this.searchYelp}/>
                <Error errorMessage={this.state.message}/>
                <BusinessList businesses={this.state.businesses}/>
            </div>
        );
    }
};

export default App;
