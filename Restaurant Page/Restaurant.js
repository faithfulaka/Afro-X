document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector('input[placeholder="Restaurant Name..."]');
    const restaurants = document.querySelectorAll('.grid .info');

    searchInput.addEventListener('keypress', function(event) {
        // Check if the pressed key is 'Enter'
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission or other default actions
            const searchText = searchInput.value.toLowerCase().trim();
            let found = false;

            restaurants.forEach(function(info) {
                const restaurantName = info.querySelector('h4').textContent.toLowerCase().trim();
                const restaurantDiv = info.parentElement;
                if (restaurantName.startsWith(searchText)) {
                    restaurantDiv.style.display = ''; // Show the restaurant
                    found = true;
                } else {
                    restaurantDiv.style.display = 'none'; // Hide the restaurant
                }
            });

            // If no restaurant matches the search, show an alert and reset visibility
            if (!found && searchText.length > 0) {
                alert("Restaurant Not Found");

                // Reset visibility to show all restaurants
                restaurants.forEach(function(info) {
                    const restaurantDiv = info.parentElement;
                    restaurantDiv.style.display = ''; // Show all restaurants
                });
            }
        }
    });
});



window.onload = function() {
    // List of pairs where each pair contains the restaurant and pin IDs
    var pairs = [
        { restaurant: 'restaurant-1', pin: 'pin-1' },
        { restaurant: 'restaurant-2', pin: 'pin-2' },
        { restaurant: 'restaurant-3', pin: 'pin-3' },
        { restaurant: 'restaurant-4', pin: 'pin-4' },
        { restaurant: 'restaurant-5', pin: 'pin-5' },
        { restaurant: 'restaurant-6', pin: 'pin-6' },
        { restaurant: 'restaurant-7', pin: 'pin-7' }
    ];

    // Loop through each pair and set up hover events
    pairs.forEach(function(pair) {
        // Get restaurant and pin elements by their IDs
        var restaurant = document.getElementById(pair.restaurant);
        var pin = document.getElementById(pair.pin);

        // Check if both elements exist to avoid errors
        if (restaurant && pin) {
            // On hover enter, add the green class to the pin
            restaurant.addEventListener('mouseenter', function() {
                pin.classList.add('green-marker');
            });

            // On hover exit, remove the green class from the pin
            restaurant.addEventListener('mouseleave', function() {
                pin.classList.remove('green-marker');
            });
        }
    });
}

