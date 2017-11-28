import { HungryBear } from './../js/hungrybear.js';

describe('HungryBear', function() {
  let fuzzy = new HungryBear("Fuzzy");

  beforeEach(function() {
    let fuzzy = new HungryBear("Fuzzy");
    fuzzy.setHunger();
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function() {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
  });


  it('should have a food level of 7 after 3001 milliseconds', function() {
    console.log(fuzzy.foodLevel);
    fuzzy.setHunger();
    jasmine.clock().tick(3001);
    console.log(fuzzy.foodLevel);

    expect(fuzzy.foodLevel).toEqual(7);
  });

  it('should get very hungry if the food level drops below zero', function() {
    fuzzy.foodLevel = 0;
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should get very hungry if 10 seconds pass without feeding', function() {
    jasmine.clock().tick(10001);

    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should have a food level of ten if it is fed', function() {
    jasmine.clock().tick(9001);

    fuzzy.feed();

    expect(fuzzy.foodLevel).toEqual(10);

  });
});
