const minHunger = 0;
const maxFitness = 10;

class Pet {
    constructor(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.children = [];
    }

    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }

    growUp() {
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
        }
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
    }

    walk() {
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
        }
        if ((this.fitness + 4) <= maxFitness) {
            this.fitness += 4;
        } else {
            this.fitness = maxFitness;
        } 
    }

    feed() {
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
        }
        if ((this.hunger - 3) >= minHunger) {
            this.hunger -= 3;
        } else {
            this.hunger = minHunger;
        }
    }

    checkUp() {
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
    }

    adoptChild(child) {
        const baby = new Pet(child)
        this.children.push(baby);
    }
}




module.exports = Pet;