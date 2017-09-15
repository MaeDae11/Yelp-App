import { CLIENT_ID, SECRET } from './YelpInfo.js';
var accessToken = '';



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
            console.log(response)
            if(response.ok){
                return response.json();
            }
        }).then(jsonResponse => {
            console.log(jsonResponse)
            accessToken = jsonResponse.access_token;
            return accessToken
        });
    },
    search(term, location, sortBy) {
        return  Yelp.getAccessToken().then(() => {
            return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }).then(response => {
                if(response.ok) {
                    return response.json();
                }
            }).then(jsonResponse => {
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



export default Yelp;
