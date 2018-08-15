const {Farm} = require('./index');
const {Wheat} = require('./crops');
const {Sugarcane} = require('./crops');

test('A new Farm can be created', () => {
  const farm = new Farm()
  expect(farm).toBeTruthy()
})

test('A Farm can have a name', () => {
    const farm = new Farm('TEST_NAME')
    expect(farm.name).toBe('TEST_NAME')
  })


test('The Wheat class can calculate a yield', () => {
  const wheat = new Wheat(100)
  expect(wheat.getYieldInKg()).toBeDefined()
})

test('The Wheat class calculates the proper yield', () => {
  const wheat = new Wheat(100)
  expect(wheat.getYieldInKg()).toBeCloseTo(674.4, 2)
})

test('The Sugarcane class can calculate a yield', () => {
    const sugarcane = new Sugarcane(100)
    expect(sugarcane.getYieldInKg()).toBeDefined()
  })
  
  test('The Sugarcane class calculates the proper yield', () => {
    const sugarcane = new Sugarcane(100)
    expect(sugarcane.getYieldInKg()).toBeCloseTo(453.38, 2)
  })