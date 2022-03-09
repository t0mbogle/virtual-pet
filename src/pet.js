function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
}

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};
Pet.prototype.walk = function() {
    const maxFitness = 10;
    if ((this.fitness + 4) <= maxFitness) {
        this.fitness += 4;
    } else {
        this.fitness = maxFitness;
    }
};
Pet.prototype.feed = function() {
    const minHunger = 0;
    if ((this.hunger - 3) >= minHunger) {
        this.hunger -= 3;
    } else {
        this.hunger = minHunger;
    }
};


Pet.prototype.checkUp = function() {
    if (this.fitness <= 3 && this.hunger >= 5) {
        return 'I am hungry AND I need a walk';
    } else if (this.fitness <= 3 && this.hunger < 5) {
        return 'I need a walk';
    } else if (this.fitness > 3 && this.hunger >= 5) {
        return 'I am hungry';
    } else {
        return 'I feel great!'
    }
};

/* Add variables to checkUp() function to make it more readable */



module.exports = Pet;