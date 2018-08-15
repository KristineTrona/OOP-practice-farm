class Crop {
    constructor(acres) {
      this.acres = acres
    }
  }

class Wheat extends Crop {
    getYieldInKg() {
      return Math.pow(this.acres * 1.5, 1.3)
    }
  }

  class Sugarcane extends Crop {
    getYieldInKg() {
        return Math.pow(this.acres * 2.6, 1.1)
    }  
  }

  module.exports = { Crop, Wheat, Sugarcane }
  