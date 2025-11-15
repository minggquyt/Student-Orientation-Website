const allBoxes = document.querySelectorAll('.box-content');

allBoxes.forEach(function(box) {
  
  box.addEventListener('click', function() {
    
    const cardContainer = box.querySelector('.card-container');

    if (cardContainer) { 
      cardContainer.classList.toggle('is-flipped');
    }
  });
});