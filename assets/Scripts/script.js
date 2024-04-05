function handleMouseEnter(){
    this.classList.add('s-card-hover');
    document.body.id = `${this.id}-hover`;
};

function handleMouseLeave(){
    this.classList.remove('s-card-hover')
    document.body.id = '';
};
function addEventListenersToCards() {
    const cardsElements = document.getElementsByClassName('s-card')

    for(let i = 0; i < cardsElements.length; i++) {
        const card = cardsElements[i]
        card.addEventListener('mouseenter',handleMouseEnter) 
          card.addEventListener('mouseleave',handleMouseLeave)
        
    }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false)


function selectCarrouselItem(selectedButtonElement) {
    const selectedItem  = selectedButtonElement.id;
    const carrousel = document.querySelector('.s-cards-carrousel');
     const transform =carrousel.style.transform;
     const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
     const rotateYDeg = -120 * (Number(selectedItem) - 1);
     const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);
     
     carrousel.style.transform = newTransform;

     const activeButtonElement = document.querySelector('s-controllerbutton--active');
     activeButtonElement.classList.remove('s-controllerbutton--active');
     selectedButtonElement.classList.add('s-controllerbutton--active');

     

     
}

