let foodCount = 0;
const fishContainer = document.getElementById('fish-container');
const foodCountDisplay = document.getElementById('food-count');

class Fish {
    constructor(name) {
        this.name = name;
        this.energy = Math.random() * 100;
        this.element = this.createFishElement();
        this.updateEnergy();
    }

    createFishElement() {
        const fishElement = document.createElement('div');
        fishElement.classList.add('fish');
        fishElement.innerText = this.name;
        fishContainer.appendChild(fishElement);
        return fishElement;
    }

    updateEnergy() {
        this.energy -= Math.random() * 10; // Decrease energy over time
        if (this.energy <= 0) {
            this.die();
        } else {
            setTimeout(() => this.updateEnergy(), 2000); // Update energy every 2 seconds
        }
    }

    die() {
        this.element.remove();
        alert(`${this.name} has died!`);
    }

    feed() {
        this.energy += 20;
        if (this.energy > 100) this.energy = 100;
    }
}

const fishNames = ['Goldfish', 'Betta', 'Guppy', 'Tetra'];
const fishes = fishNames.map(name => new Fish(name));

document.getElementById('play-game').addEventListener('click', () => {
    // Simple mini-game: Randomly earn food
    const earnedFood = Math.floor(Math.random() * 10) + 1;
    foodCount += earnedFood;
    foodCountDisplay.innerText = `Food: ${foodCount}`;
    alert(`You earned ${earnedFood} food!`);
});

setInterval(() => {
    if (foodCount > 0) {
        fishes.forEach(fish => fish.feed());
        foodCount--;
        foodCountDisplay.innerText = `Food: ${foodCount}`;
    }
}, 5000); // Feed fish every 5 seconds if food is available