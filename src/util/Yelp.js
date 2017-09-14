const clientId = 'Q8I4AKrFPpNGxg5_-zT27Q';
const secret = 'Cckxx3WIopCS5tmaTjLPCNHvSNqz7WU0FFDm0tqY8sKNVNiWJORB5vn0FjT9MI2K';
// const clientId = 'FW3QGrFwOrgoRpy6oa6t9g';
// const secret = 'pjvdEe0sTsFHunbUFZhiYcLztLyW35JgIQTlEvITcLFug5IXoQTrNy1ovaWL9smx';

var accessToken = '';


const Yelp = {
    getAccessToken() {
        if(accessToken === true){
            return new Promise(resolve => {
                resolve(accessToken);
            });
        } 
        return fetch(`https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${clientId}&client_secret=${secret}`, {
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
        return Yelp.getAccessToken().then((accessToken) => {
            console.log(accessToken)
            console.log(fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
                header: {
                    'Authorization' : `Bearer ${accessToken}`
                }
            }))
            return fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
                header: {
                    'Authorization' : `Bearer ${accessToken}`
                }
            }).then(response => {
                console.log(response);
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
                        address: business.address,
                        city: business.city,
                        zipCode: business.zip_code,
                        category: business.category,
                        rating: business.rating,
                        reviewCount: business.review_count
                        }
                    ))
                }
            })
        })
    }
};



export default Yelp;
