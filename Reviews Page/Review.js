function postReview() {
    var restaurantSelect = document.getElementById('restaurantSelect');
    var restaurantName = restaurantSelect.options[restaurantSelect.selectedIndex].value;
    var reviewText = document.getElementById('reviewText').value.trim();
  
    // Validation: Ensure a restaurant is selected
    if (restaurantName === "Select Restaurant") {
      alert("Please select a restaurant before submitting your review.");
      return;
    }
  
    // Validation: Check if the review text meets the minimum character requirement (50 characters)
    if (reviewText.length < 50) {
      alert("Please write a review with at least 50 characters.");
      return;
    }
  
    // Create a new review card element
    var newCard = document.createElement('div');
    newCard.className = 'col-md-4 mb-5 mb-md-0 d-flex align-items-stretch'; // Ensure the card has 'col-md-4'
  
    // Set the inner HTML of the card
    newCard.innerHTML = `
      <div class="card">
        <div class="card-up" style="background-color: #1abc9c;"></div>
        <div class="card-body">
          <h4>${restaurantName}</h4>
          <hr/>
          <p>"${reviewText}"</p>
        </div>
      </div>`;
  
    // Append the new card to the existing reviews container
    var reviewsContainer = document.querySelector('.row.text-center.d-flex.align-items-stretch');
    reviewsContainer.appendChild(newCard);
  
    // Close the modal window using Bootstrap's modal instance method
    var reviewModalElement = document.getElementById('reviewModal');
    var reviewModalInstance = bootstrap.Modal.getInstance(reviewModalElement);
    reviewModalInstance.hide();
  
    // Reset the form fields after submission
    document.getElementById('reviewForm').reset();
  }
  