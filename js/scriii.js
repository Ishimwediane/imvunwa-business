// Get the portfolio filters and container
const portfolioFilters = document.querySelectorAll('.portfolio-filters li a');
const portfolioContainer = document.querySelector('.portfolio-container');
const seeMoreButton = document.createElement('button'); // Create the "See More" button
 // seeMoreButton.textContent = 'See More project';//Set button text
seeMoreButton.classList.add('btn', 'btn-primary', 'see-more-button'); // Add classes
//portfolioContainer.insertAdjacentElement('afterend', seeMoreButton); // Insert button after portfolio container

// Show all portfolio items by default
portfolioContainer.querySelectorAll('.portfolio-item').forEach((item) => {
  item.classList.remove('hidden');
});

// Add event listener to the "See More" button
//seeMoreButton.addEventListener('click', () => {
 // const hiddenItems = portfolioContainer.querySelectorAll('.portfolio-item.hidden');
  //hiddenItems.forEach((item) => {
    //item.classList.remove('hidden');
  //});
  
//});

// Add event listeners to the filters
portfolioFilters.forEach((filter) => {
  filter.addEventListener('click', (e) => {
    e.preventDefault(); // prevent default link behavior
    const filterValue = filter.getAttribute('data-filter');
    console.log(`Filter clicked: ${filterValue}`);

    // Hide all portfolio items
    portfolioContainer.querySelectorAll('.portfolio-item').forEach((item) => {
      item.classList.add('hidden');
    });

    // Show only the items that match the filter value
    if (filterValue === 'all') {
      portfolioContainer.querySelectorAll('.portfolio-item').forEach((item) => {
        item.classList.remove('hidden');
      });
      seeMoreButton.style.display = 'block'; // Show "See More" button when showing all items
    } else {
      portfolioContainer.querySelectorAll(`.portfolio-item.${filterValue}`).forEach((item) => {
        item.classList.remove('hidden');
      });
     
    }
  });
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
          if (index >= currentIndex && index < currentIndex + visibleItems) {
              box.classList.add('visible');
          } else {
              box.classList.remove('visible');
          }
      });

      // Enable or disable buttons based on the current index
      prevButton.disabled = currentIndex === 0;
      nextButton.disabled = currentIndex >= totalServices - visibleItems;
  }

  nextButton.addEventListener('click', function () {
      if (currentIndex < totalServices - visibleItems) {
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
