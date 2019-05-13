class Carousel {
    constructor() {
        this.buttonR = document.querySelector('.right-button');
        this.buttonL = document.querySelector('.left-button');
        this.images = document.querySelectorAll('.carousel img');
        this.currentIndex = 0;
        this.images[0].style.display = 'block';
        this.buttonR.addEventListener('click', () => this.nextR());
        this.buttonL.addEventListener('click', () => this.nextL());
    }

    nextR() {
        if (this.currentIndex < this.images.length - 1) {
            this.currentIndex++;
            this.images[this.currentIndex - 1].style.display = 'none';
            this.images[this.currentIndex].style.display = 'block';
        }
    }

    nextL() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.images[this.currentIndex + 1].style.display = 'none';
            this.images[this.currentIndex].style.display = 'block';
        }
    }
}

let carousel = document.querySelector('.carousel');
carousel = new Carousel;

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/