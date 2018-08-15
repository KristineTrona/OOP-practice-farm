class Crop {
    constructor(acres) {
      this.acres = acres
    }
    getYieldInEuros(){
        return (this.getYieldInKg() * this.price)
    }
    getCosts(){
        return this.costs
    }
  }

class Wheat extends Crop {
    constructor(acres){
        super(acres)
        this.price = 1.5
        this.costs = 340*acres
    }
    getYieldInKg() {
      return Math.pow(this.acres * 1.5, 1.3)
    }
  }

  class Sugarcane extends Crop {
    constructor(acres){
        super(acres)
        this.price = 2
        this.costs = 166*acres
    }

    getYieldInKg() {
        return Math.pow(this.acres * 2.6, 1.1)
    }  
  }

  module.exports = { Crop, Wheat, Sugarcane }
