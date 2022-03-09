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
    it('increases age of pet by 1', () => {
      const pet = new Pet('Fido');

      pet.growUp();

      expect(pet.age).toEqual(1);
    });
    it('increases hunger of pet by 5', () => {
      const pet = new Pet('Fido');

      pet.growUp();

      expect(pet.hunger).toEqual(5);
    });
    it('decreases fitness of pet by 3', () => {
      const pet = new Pet('Fido');

      pet.growUp();

      expect(pet.fitness).toEqual(7);
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

  
  /*
  describe('checkUp', () => {
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
    it('lets you know if the pet is hungy and needs walking', () => {
      const pet = new Pet('Fido');

      pet.fitness = 3;
      pet.hunger = 5;
      pet.checkUp();

      expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
    }); 
  });
  */
  


