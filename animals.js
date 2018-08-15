class Animal {
    constructor(ageInDays){
    this.ageInDays = ageInDays
    }
    getValueInEuros(){
        return (this.price*this.getWeightInKg())
    }      
}

class Pig extends Animal {
    constructor(ageInDays){
        super(ageInDays)
        this.price = 4
    }
    getWeightInKg(){
        return Math.min((this.ageInDays * 2.3), 700)
    }
}

class Cow extends Animal {
    constructor(ageInDays){
        super(ageInDays)
        this.price = 5
    }
    getWeightInKg(){
        return Math.min((this.ageInDays *1.5),1200)
    }
}

class Horse extends Animal {
    constructor(ageInDays){
        super(ageInDays)
        this.price = 10
    }
    getWeightInKg(){
       return Math.min((this.ageInDays *1.7),1000)
    }
}

module.exports = {Animal, Pig, Cow, Horse}

