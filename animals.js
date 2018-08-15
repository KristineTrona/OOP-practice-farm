class Animal {
    constructor(ageInDays){
    this.ageInDays = ageInDays
    }      
}

class Pig extends Animal {
    constructor(ageInDays){
        super(ageInDays)
        this.price = 4
    }
    getWeightInKg(){
        return this.ageInDays * 2.3
    }
}

class Cow extends Animal {
    constructor(ageInDays){
        super(ageInDays)
        this.price = 5
    }
    getWeightInKg(){
        return this.ageInDays *1.5
    }
}

class Horse extends Animal {
    constructor(ageInDays){
        super(ageInDays)
        this.price = 10
    }
    getWeightInKg(){
       return this.ageInDays *1.7
    }
}

module.exports = {Animal, Pig, Cow, Horse}