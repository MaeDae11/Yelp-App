#Ravenous

#Application created with React to integrate Yelp API with specialized called dependant on data

#What does Ravenous do?
<p>Ravenous allows users to search types of food, or specific restaurants in a city.</p>
<p>The search renders 21 results to the page based on their specification of 'Best Match', 'Highest Rated', or 'Most Reviewed'.</p>
<p>From there, the user can click on the photo for more information about the restaurant</p>
<p>The API used for this project was Yelp. The AJAX call is structured through the method of fetch using POST. This gathers data about name, address, city, state, reviews, number of reviews and image.</p>

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
<br />
<h3>AJAX call to Yelp's API</h3> 
<h4>The <em>search</em> method is call upon when the user click the button 'Explore'. From there, an accessToken is retrieved from Yelp with my clientId and secret through a POST method. If the response returns without error, the accessToken is then equated to the <em>access_token</em> within the jsonResponse. If the response contains an error, an erroor response will trigger and print to the console.</h4>
<h4>Now that the access token is retrieved, the term, location, and sortby are sent in a fetch POST method. This call retrieves 21 items based on the search parameters. If the response returns without error, the jsonResponse is mapped through to collected the wanted data for the application (name, address, url, etc).</h4>


``` javascript

const Yelp = {
    getAccessToken() {
        if(accessToken === true){
            return new Promise(resolve => {
                resolve(accessToken);
            });
        } 
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${SECRET}`, {
            method: 'POST'
        }).then(response => {
            if(response.ok){
                return response.json();
            }
            throw new Error('Request failed!');
        }, networkError => console.log(networkError.message)
        ).then(jsonResponse => {
            accessToken = jsonResponse.access_token;
            return accessToken
        });
    },
    search(term, location, sortBy) {
        return Yelp.getAccessToken().then(() => {
            return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }).then(response => {
                if(response.ok) {
                    return response.json();
                }
                throw new Error('Request failed!');
                }, networkError => console.log(networkError.message)
            ).then(jsonResponse => {
                console.log(jsonResponse)
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map(business => (
                        {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.category,
                        rating: business.rating,
                        reviewCount: business.review_count,
                        url: business.url
                        }
                    ))
                }
            })
        })
    }
};




```

#SnapShots

<h4>This is the search bar and blank area where restaurants will be rendered. The user can input their search, click explore, and restaurants will render. This also showcases the desktop version of the application.</h4>
<img src="./mainsearchdesktop.png" width="400">
<br />

<h4>Below indicates the error if a user does not input a location and/or a term. The snapshot also shows the mobile version of the application</h4>
<img src="./errormessagemobile.png" width="200">
<br />

<h4>Finally, these are the search results. As you can see, this is where the information from the AJAX fetch GET call from Yelp's API. </h4>
<img src="./searchresult.png" width="400">
