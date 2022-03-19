const apiKey = 'zCFk7fJ-CBPI-bM_yPDz9lUBIdv2MrXOnKr2aXo1hQ2-AytmHhDv_ImMW0dl2Q-AnDMlK6NleW1mdILDuQjwZsOKKh5V33QjNRw0pzWAiCFtpew6J_Sgynza5PiXYXYx';


const Yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Access-Control-Allow-Origin": "*",
            },
        }).then((response) => {
            return response.json();
        }).then((jsonResponse) => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    console.log(business);
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        latitude: business.coordinates.latitude,
                        longitude: business.coordinates.longitude,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                    };
                })
            }
        })
    }
};

export default Yelp;
