// Get the portfolio filters and container
const portfolioFilters = document.querySelectorAll('.portfolio-filters li a');
const portfolioContainer = document.querySelector('.portfolio-container');

// Show all portfolio items by default
const showAllPortfolioItems = () => {
    portfolioContainer.querySelectorAll('.portfolio-item').forEach(item => {
        item.classList.remove('hidden'); // Remove hidden class to show all items
    });
};

// Show all items on initial load
showAllPortfolioItems();

// Add event listeners to the filters
portfolioFilters.forEach(filter => {
    filter.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        const filterValue = filter.getAttribute('data-filter');
        console.log(`Filter clicked: ${filterValue}`);

        // Hide all portfolio items
        portfolioContainer.querySelectorAll('.portfolio-item').forEach(item => {
            item.classList.add('hidden'); // Add hidden class to all items
        });

        // Show items based on the selected filter
        if (filterValue === 'all') {
            showAllPortfolioItems(); // Show all items if 'All' is clicked
        } else {
            // Show items that match the selected filter
            portfolioContainer.querySelectorAll(`.portfolio-item.${filterValue}`).forEach(item => {
                item.classList.remove('hidden'); // Remove hidden class to show items that match the filter
            });
        }
    });
});

// Create the "See More" button
const seeMoreButton = document.createElement('button'); // Create the "See More" button
seeMoreButton.textContent = 'See More Projects'; // Set button text
seeMoreButton.classList.add('btn', 'btn-primary', 'see-more-button'); // Add classes
portfolioContainer.insertAdjacentElement('afterend', seeMoreButton); // Insert button after portfolio container

// Add event listener to the "See More" button
seeMoreButton.addEventListener('click', () => {
    const hiddenItems = portfolioContainer.querySelectorAll('.portfolio-item.hidden');
    hiddenItems.forEach(item => {
        item.classList.remove('hidden'); // Show hidden items
    });
    seeMoreButton.style.display = 'none'; // Hide the "See More" button after showing all items
});


document.addEventListener('DOMContentLoaded', function () {
  const servicesContainer = document.querySelector('.services-container');
  const serviceBoxes = document.querySelectorAll('.service-box');
  const totalServices = serviceBoxes.length;
  const visibleItems = 3;
  let currentIndex = 0;

  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');

  

  function updateCarousel() {
      // Hide all items
      serviceBoxes.forEach((box, index) => {
          box.classList.remove('visible'); // Hide all items initially

          // Handle the case where we are at the last slide
          if (currentIndex === totalServices - 2) {
              // Show only the last two items
              if (index >= currentIndex) {
                  box.classList.add('visible');
              }
          } else if (index >= currentIndex && index < currentIndex + visibleItems) {
              // Show three items normally
              box.classList.add('visible');
          }
      });

      // Enable or disable buttons based on the current index
      prevButton.disabled = currentIndex === 0;
      nextButton.disabled = currentIndex >= totalServices - 2; // Updated condition for two items at the end
  }

  nextButton.addEventListener('click', function () {
      if (currentIndex < totalServices - 2) { // Updated condition to stop at the last two items
          currentIndex++;
      }
      updateCarousel();
  });

  prevButton.addEventListener('click', function () {
      if (currentIndex > 0) {
          currentIndex--;
      }
      updateCarousel();
  });

  // Initialize carousel position
  updateCarousel();
});



