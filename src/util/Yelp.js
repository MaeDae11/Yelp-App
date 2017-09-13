const clientId = 'Q8I4AKrFPpNGxg5_-zT27Q';
const secret = 'Cckxx3WIopCS5tmaTjLPCNHvSNqz7WU0FFDm0tqY8sKNVNiWJORB5vn0FjT9MI2K';
var accessToken;


const Yelp = {
    getAccessToken() {
        if(accessToken === true){
            return new Promise(resolve => {
                resolve(accessToken);
            });
        } else {
            return fetch(`https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=' + ${clientId} + '&client_secret=' + ${secret}`, {
                method: 'POST'
            }).then(response => {
                if(response.ok){
                    return response.json()
                };
            }).then(jsonResponse => {
                accessToken = jsonResponse.access_token;
                console.log(accessToken)
            })
        }
    }
};

const search = (term, location, sortBy) => {
    return Yelp.getAccessToken()
    .then(() => {
        return fetch(`https://api.yelp.com/v3/businesses/search?term= + ${term} + &location= + ${location} + &sort_by= + ${sortBy}`, `Bearer ${accessToken}`, {
            headers: {
                Authroization: `Bearer ${accessToken}`
            }
        });
    }).then()
}