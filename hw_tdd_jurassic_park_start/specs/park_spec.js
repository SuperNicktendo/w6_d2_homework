const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;

  beforeEach(function () {
    park = new Park("Jurassic Park", 75)
    dino1 = new Dinosaur("Velociraptor", "carnivore", 500)
    dino2 = new Dinosaur("Barney", "herbivore", 750)
    dino3 = new Dinosaur("Velociraptor", "carnivore", 75)
  })

  it('should have a name', function(){
    const actual = park.name
    assert.strictEqual(actual, "Jurassic Park")
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice
    assert.strictEqual(actual, 75)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs
    assert.deepEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dino1)
    const actual = park.numberOfDinosaurs()
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dino1)
    park.removeDinosaur();
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 0);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    const actual = park.dinoWithMostVisitors();
    assert.strictEqual(actual, dino2);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dino1)
    park.addDinosaur(dino2)
    park.addDinosaur(dino3)
    const actual = park.findSameSpecies("Velociraptor")
    assert.deepStrictEqual(actual, [dino1, dino3])

  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinosaur(dino1)
    park.addDinosaur(dino2)
    const actual = park.numberOfVisitors()
    assert.strictEqual(actual, 1250)
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addDinosaur(dino1)
    park.addDinosaur(dino2)
    const actual = park.numberOfVisitorsPerYear()
    assert.strictEqual(actual, 456250)
  });


  it('should be able to calculate total revenue for one year', function(){
    park.addDinosaur(dino1)
    park.addDinosaur(dino2)
    const actual = park.annualRevenue()
    assert.strictEqual(actual, 34218750)
  });

  it('should be able to remove all dinosaurs by species', function(){
    park.addDinosaur(dino1)
    park.addDinosaur(dino2)
    park.addDinosaur(dino3)
    const actual = park.removeSpecies('Velociraptor')
    assert.strictEqual(actual, 1)
  })

});
