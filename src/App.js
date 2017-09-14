import React, { Component } from 'react';
import './App.css';

import Business from './components/Business/Business.js';
import BusinessList from './components/BusinessList/BusinessList.js';
import SearchBar from './components/SearchBar/SearchBar.js';

import Yelp from './util/Yelp.js';



class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            businesses: []
        }
    }

  searchYelp = (term, location, sortBy) => {
      Yelp.search(term, location, sortBy).then(businesses => {
        this.setState({
            businesses: businesses
        });
      });
  }  

  render() {
    return (
        <div className="App">
            <h1>ravenous</h1>
            <SearchBar searchYelp={this.searchYelp}/>
            <BusinessList businesses={this.state.businesses}/>
        </div>
    );
  }
}

export default App;
