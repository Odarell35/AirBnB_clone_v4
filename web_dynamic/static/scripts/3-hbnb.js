/*javascript for the Scritps*/
document.addEventListener('DOMContentLoaded', function () {
	fetch('http://0.0.0.0:5001/api/v1/places_search/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
    })
    .then(response => response.json())
    .then(data => {
        // Loop through the result and create article tags for each place
        data.forEach(place => {
            const placeArticle = document.createElement('article');
            placeArticle.innerHTML = `
                <div>
                    <h2>${place.name}</h2>
                    <p>${place.description}</p>
                    <!-- Additional place information as needed -->
                </div>
            `;
            document.querySelector('.places').appendChild(placeArticle);
        });
    })
    .catch(error => console.error('Error:', error));
});

