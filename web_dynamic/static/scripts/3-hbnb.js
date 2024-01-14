document.addEventListener('DOMContentLoaded', function () {
    const apiUrl = 'http://0.0.0.0:5001/api/v1/places_search/';
    const sectionPlaces = document.querySelector('section.places');

    // Function to create an article tag representing a Place
    function createPlaceArticle(place) {
        const article = document.createElement('article');
        article.innerHTML = `
		<div class="title_box">
          		<h2>${place.name}</h2>
          		<div class="price_by_night">$${place.price_by_night}</div>
        	</div>
        	<div class="information">
          	<div class="max_guest">${place.max_guest} Guest${place.max_guest !== 1 ? 's' : ''}</div>
          	<div class="number_rooms">${place.number_rooms} Bedroom${place.number_rooms !== 1 ? 's' : ''}</div>
          	<div class="number_bathrooms">${place.number_bathrooms} Bathroom${place.number_bathrooms !== 1 ? 's' : ''}</div>
        	</div>
        	<div class="description">
          	${place.description}
        	</div> 
	`;
        return article;
    }

    // Function to make the API request and create articles
    function getPlacesAndCreateArticles() {
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
        })
            .then(response => response.json())
            .then(data => {
                data.forEach(place => {
                    const article = createPlaceArticle(place);
                    sectionPlaces.appendChild(article);
                });
            })
            .catch(error => {
                console.error('Error fetching places:', error);
            });
    }

    getPlacesAndCreateArticles();
});
	
