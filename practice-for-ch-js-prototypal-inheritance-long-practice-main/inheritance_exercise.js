function SurrogateShip (){
    function SurrogateShip() {}
    SurrogateShip.prototype = MovingObject.prototype;
    Ship.prototype = new SurrogateShip();
    Ship.prototype.constructor = Ship 

}

function SurrogateAsteroid (){
    function SurrogateAsteroid() {}
    SurrogateAsteroid.prototype = MovingObject.prototype;
    Asteroid.prototype = new SurrogateAsteroid();
    Asteroid.prototype.constructor = Asteroid 

}

Function.prototype.inherits = function(ParentClass) {
    function Surrogate () {
    }
    Surrogate.prototype = ParentClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
}

// Object.create
// Function.prototype.inherits2 = function(ParentClass) {;
//     this.prototype = Object.create(ParentClass.prototype);
//     this.prototype.constructor = this;
// }

class MovingObject {
    constructor(velocity, mass) {
        this.speed = velocity;
        this.mass = mass;
    } 
    momentum() {
        console.log(this.velocity * this.mass)
    }
}

class Ship {
    constructor(capacity, destination, passengers, velocity, mass) {
        // super(velocity, mass);
        this.velocity = velocity;
        this.mass = mass;
        this.capacity = capacity;
        this.destination = destination;
        this.passengers = passengers; 
    }
    survivors() {
        console.log(`${this.passengers} people have made it to ${this.destination}`)
    }

    notSurvivors() {
        console.log(this.capacity - this.passengers)
    }

    noLongerPassenger() {
        this.passengers -- 
    }
}

class Asteroid {
    constructor(hitCount, temperature, velocity, mass) {
        // super(velocity, mass);
        this.velocity = velocity;
        this.mass = mass;
        this.hitCount = hitCount;
        this.temperature = temperature;
    }

    targets() {
        this.hitCount ++ 
    }
}

// Ship.inherits(MovingObject)
SurrogateShip()
SurrogateAsteroid()

const ApolloNitty = new Ship(10, "App Academy", 10, 10000, 50 )
const ShannasComet = new Asteroid(0, 100, 100000, 100 )


console.log(ApolloNitty.momentum())
console.log(ShannasComet)
