//portfolio
const portfolioFilters = document.querySelectorAll('.portfolio-filters li a');
const portfolioContainer = document.querySelector('.portfolio-container');
const showAllPortfolioItems = () => {
    portfolioContainer.querySelectorAll('.portfolio-item').forEach(item => {
        item.classList.remove('hidden'); 
    });
};
showAllPortfolioItems();
portfolioFilters.forEach(filter => {
    filter.addEventListener('click', (e) => {
        e.preventDefault(); 
        const filterValue = filter.getAttribute('data-filter');
        console.log(`Filter clicked: ${filterValue}`);
        portfolioContainer.querySelectorAll('.portfolio-item').forEach(item => {
            item.classList.add('hidden'); 
        });
        if (filterValue === 'all') {
            showAllPortfolioItems(); 
        } else {
           
            portfolioContainer.querySelectorAll(`.portfolio-item.${filterValue}`).forEach(item => {
                item.classList.remove('hidden'); 
            });
        }
    });
});

const seeMoreButton = document.createElement('button'); 
seeMoreButton.textContent = 'See More Projects'; 
seeMoreButton.classList.add('btn', 'btn-primary', 'see-more-button'); 
portfolioContainer.insertAdjacentElement('afterend', seeMoreButton); 
seeMoreButton.addEventListener('click', () => {
    const hiddenItems = portfolioContainer.querySelectorAll('.portfolio-item.hidden');
    hiddenItems.forEach(item => {
        item.classList.remove('hidden'); 
    });
    seeMoreButton.style.display = 'none'; 
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
          serviceBoxes.forEach((box, index) => {
          box.classList.remove('visible'); 
          if (currentIndex === totalServices - 2) {
                        if (index >= currentIndex) {
                  box.classList.add('visible');
              }
          } else if (index >= currentIndex && index < currentIndex + visibleItems) {
                           box.classList.add('visible');
          }
      });
      prevButton.disabled = currentIndex === 0;
      nextButton.disabled = currentIndex >= totalServices - 2; 
  }
  nextButton.addEventListener('click', function () {
      if (currentIndex < totalServices - 2) { 
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
  updateCarousel();
});


function toggleSubcategory(category) {
        const subcategoryList = document.getElementById(category);
       subcategoryList.classList.toggle('hidden');
    }
    function showImages(galleryId) {
        var gallery = document.getElementById(galleryId);
        console.log('Showing images for gallery:', galleryId, gallery);
        if (gallery.classList.contains('hidden')) {
            gallery.classList.remove('hidden');
        } else {
            gallery.classList.add('hidden');
        }
    }
    