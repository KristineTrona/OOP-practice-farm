class Farm {
    constructor(name) {
      this.name = name
      this.crops = []
      this.animals = []
    }

    addCrop(crop) {
        this.crops.push(crop)
      }
    
    calculateIncome(){
        const incomeCrops = this.crops
        .map(crop => crop.getYieldInEuros())
        .reduce((a,b) => a+b, 0)

        const incomeAnimals = this.animals
        .map(animal => animal.getValueInEuros())
        .reduce((a,b) => a+b, 0)

        return incomeCrops+ incomeAnimals
        
    }  

    addAnimal(animal){
        this.animals.push(animal)
    }

    printReport(){
        console.log(
            `
             - Farm: ${this.name}   -
             - No.of crops: ${this.crops.length} - 
             - No. of animals: ${this.animals.length} -
             - Income from crops: ${parseFloat(this.crops
                .map(crop => crop.getYieldInEuros())
                .reduce((a,b) => a+b, 0).toFixed(2))} - 
             - Income from animals: ${parseFloat(this.animals
                .map(animal => animal.getValueInEuros())
                .reduce((a,b) => a+b, 0)).toFixed(2)} -     
             - Total income: ${parseFloat(this.calculateIncome().toFixed(2))} -
            `
        )
    }
  }

  module.exports.Farm = Farm
  