const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
      const pet = new Pet('Fido');
  
      expect(pet.name).toEqual('Fido');
    });
    it('pet has an initial age of 0', () => {
      const pet = new Pet('Fido');

      expect(pet.age).toEqual(0);
    });
    it('pet has an initial hunger of 0', () => {
      const pet = new Pet('Fido');

      expect(pet.hunger).toEqual(0);
    });
    it('pet has an initial fitness of 10', () => {
      const pet = new Pet('Fido');

      expect(pet.fitness).toEqual(10);
    });
  });

describe('growUp', () => {
    it('throws an error if the pet is not alive', () => {
      const pet = new Pet('Fido');

      pet.hunger = 10;

      expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
    });
    it('growUp increases age of pet by 1', () => {
      const pet = new Pet('Fido');

      pet.age = 0;
      pet.growUp();

      expect(pet.age).toEqual(1);
    });
    it('growUp increases hunger of pet by 5', () => {
      const pet = new Pet('Fido');

      pet.hunger = 0;
      pet.growUp();

      expect(pet.hunger).toEqual(5);
    });
    it('growUp decreases fitness of pet by 3', () => {
      const pet = new Pet('Fido');

      pet.fitness = 10;
      pet.growUp();

      expect(pet.fitness).toEqual(7);
    });
  });

describe('walk', () => {
    it('throws an error if the pet is not alive', () => {
      const pet = new Pet('Fido');

      pet.fitness = 0;

      expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
    });
    it('increases fitness of pet by 4', () => {
      const pet = new Pet('Fido');

      pet.fitness = 4;
      pet.walk();

      expect(pet.fitness).toEqual(8);
      });
    it('increases fitness to a maximum of 10', () => {
      const pet = new Pet('Fido');

      pet.fitness = 8;
      pet.walk();

      expect(pet.fitness).toEqual(10);
    });
  });

describe('feed', () => {
    it('throws an error if the pet is not alive', () => {
      const pet = new Pet('Fido');

      pet.age = 30;

      expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });  
    it('decreases the pets level of hunger by 3', () => {
      const pet = new Pet('Fido');

      pet.hunger = 3;
      pet.feed();

      expect(pet.hunger).toEqual(0);
    });
    it('decreases the pets level of hunger, but should not go below 0', () => {
      const pet = new Pet('Fido');

      pet.hunger = 1;
      pet.feed();

      expect(pet.hunger).toEqual(0);
    });
  });

  
  describe('checkUp', () => {
    it('throws an error if the pet is not alive', () => {
      const pet = new Pet('Fido');

      pet.age = 30;

      expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(');
    });
    it('pet needs walking if fitness is 3 or below', () => {
      const pet = new Pet('Fido');

      pet.fitness = 3;
      pet.hunger = 1;
      pet.checkUp();

      expect(pet.checkUp()).toEqual('I need a walk');
    });
    it('pet needs feeding if hunger is 5 or more', () => {
      const pet = new Pet('Fido');

      pet.hunger = 5;
      pet.fitness = 5;
      pet.checkUp();

      expect(pet.checkUp()).toEqual('I am hungry')
    });
    it('pet is hungy and needs walking', () => {
      const pet = new Pet('Fido');

      pet.fitness = 3;
      pet.hunger = 5;
      pet.checkUp();

      expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
    });
    it('pet feels great, pet.hunger < 5 and pet.fitness > 3', () => {
      const pet = new Pet('Fido');

      pet.fitness = 4;
      pet.hunger = 4;
      pet.checkUp();

      expect(pet.checkUp()).toEqual('I feel great!');
    });
  });

  describe('isAlive', () => {
    it('checks if pet is alive', () => {
      const pet = new Pet('Fido');

      pet.age = 10;
      pet.hunger = 5;
      pet.fitness = 5;

      expect(pet.isAlive).toEqual(true);
    });
    it('checks if pet is not alive, old', () => {
      const pet = new Pet('Fido');

      pet.age = 30;
      pet.hunger = 5;
      pet.fitness = 5;

      expect(pet.isAlive).toEqual(false);
    });
    it('checks if pet is not alive, hunger', () => {
    const pet = new Pet('Fido');

    pet.age = 10;
    pet.hunger = 10;
    pet.fitness = 5;

    expect(pet.isAlive).toEqual(false);
    });
    it('checks if pet is not alive, unfit', () => {
      const pet = new Pet('Fido');

      pet.age = 10;
      pet.hunger = 5;
      pet.fitness = 0;

    expect(pet.isAlive).toEqual(false);
    });
    it('checks if pet is not alive, all values', () => {
      const pet = new Pet('Fido');

      pet.age = 30;
      pet.hunger = 10;
      pet.fitness = 0;

      expect(pet.isAlive).toEqual(false);
    });
  });
