const {Farm} = require('./index');
const {Wheat, Sugarcane} = require('./crops');
const {Pig, Horse, Cow} = require('./animals')


test('A new Farm can be created', () => {
  const farm = new Farm()
  expect(farm).toBeTruthy()
})

test('A Farm can have a name', () => {
    const farm = new Farm('TEST_NAME')
    expect(farm.name).toBe('TEST_NAME')
  })


  test('We can add a crop to our farm', () => {
    const farm = new Farm('TEST_NAME')
    farm.addCrop(new Wheat(100))
  })



test('The income of an empty farm is 0', () => {
    const farm = new Farm('TEST_NAME')
    expect(farm.calculateIncome()).toBe(0)
  })

test('The income of a 100 Wheat + 100 Sugarcane farm is X', () => {
    const farm = new Farm('TEST_NAME')
    farm.addCrop(new Wheat(100))
    farm.addCrop(new Sugarcane(100))
    expect(farm.calculateIncome()).toBeCloseTo(1918.37, 1)
  })


  test('Animals can be added to the farm', () => {
    const farm = new Farm()
    farm.addAnimal(new Cow(100))
  })
  
  test('Animals will be taken into account for calculateIncome', () => {
    const farm = new Farm()
    farm.addAnimal(new Cow(100))
    expect(farm.calculateIncome()).not.toBe(0)
  })

// FINAL TESTS
  test('Farm value is calculated properly', () =>{
      const farm = new Farm()
      farm.addCrop(new Wheat(100))
      farm.addCrop(new Sugarcane(200))
      farm.addAnimal(new Horse(20))
      farm.addAnimal(new Cow (10))
      farm.addAnimal(new Pig(100))
      expect(farm.calculateIncome()).toBeCloseTo(4290.32,2)
  })

  test('Farm report:', () =>{
    const farm = new Farm()
    farm.name = "Carrotville"
    farm.addCrop(new Wheat(100))
    farm.addCrop(new Sugarcane(200))
    farm.addAnimal(new Horse(20))
    farm.addAnimal(new Cow (10))
    farm.addAnimal(new Pig(100))
    console.log(farm.printReport())
})


