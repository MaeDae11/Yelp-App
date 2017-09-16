#Ravenous

#Application created with React to integrate Yelp API with specialized called dependant on data

#What does Ravenous do?
<p>Ravenous allows users to search types of food, or specific restaurants in a city.</p>
<p>The search renders 21 results to the page based on their specification of 'Best Match', 'Highest Rated', or 'Most Reviewd'.</p>
<p>From there, the user can click on the photo for more information about the restaurant</p>

#Difficulties
<ul>
<li>This was my first full React app. Learning to break up components, pass in props, and organize code while working with an API that I had never seen was challenging; however, after reading documentation and gaining further knowledge of React, it started to come together.</li>
<li>AJAX calls to Yelp's API was a bit different. I was also impleneting new knowledge of fetch() and they didn't seem to have much documentation on JavaScript or this ES6 method.</li>
</ul>

#Code Snippits
<h4>Below is part of the top search container component. Shows the layout using JSX and how multiple small functions handle each input, button, and list.</h4> 
<h4>The <em>renderSortByOption</em> function handles the class changes of 'Best Match', 'Highest Rated', and 'Most Reviewd'. If the word is clicked on, the className becomes 'active'. This implements the CSS tied to 'active' and change the font color to indicate to the users which selection they chose. </h4>


```javascript

render(){
        return(
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this._renderSortByOptions(this.sortByOptions)}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input onChange={this._handleTermChange} placeholder="What are you in the mood for?" />
                    <input onChange={this._handleLocationChange} placeholder="Where?" />
                </div>
                <div onClick={this._handleSearch} className="SearchBar-submit">
                    <a>Explore!</a>
                </div>
            </div>
        );
    };

    _renderSortByOptions = (object) => {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption]
            return (<li 
                className={this._getSortByClass(sortByOptionValue)}
                onClick={this._handleSortByChange.bind(this, sortByOptionValue)}
                key={sortByOptionValue}>
                {sortByOption}
            </li>)
        });
    };
    
```
