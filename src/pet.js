function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
}

Pet.prototype = {
    get isAlive() {
      return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
};

Pet.prototype.growUp = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.walk = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }
    const maxFitness = 10;
    if ((this.fitness + 4) <= maxFitness) {
        this.fitness += 4;
    } else {
        this.fitness = maxFitness;
    }
};

Pet.prototype.feed = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }
    const minHunger = 0;
    if ((this.hunger - 3) >= minHunger) {
        this.hunger -= 3;
    } else {
        this.hunger = minHunger;
    }
};

Pet.prototype.checkUp = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }
    if (this.fitness <= 3 && this.hunger >= 5) {
        return 'I am hungry AND I need a walk';
    } 
    if (this.fitness <= 3 && this.hunger < 5) {
        return 'I need a walk';
    } 
    if (this.fitness > 3 && this.hunger >= 5) {
        return 'I am hungry';
    }
  return 'I feel great!'
};

/* Check logic of project makes sense in Node REPL, 
check all posibilities with all different functions. 
Edit any issues. :) */



module.exports = Pet;