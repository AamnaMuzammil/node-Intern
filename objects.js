class car{
    constructor(brand,color,speed){
        this.brand = brand;
        this.color = color;
        this.speed = speed;
    }

    drive(){
        console.log("The car is driving at a speed of " + this.speed + " km/h");
    }

    stop(){
        console.log("The car has stopped.");
    }
}
const myCar = new car("Toyota", "Red", 120);
myCar.drive();
myCar.stop();
console.log("Car brand: " + myCar.brand);
console.log("Car color: " + myCar.color);
console.log("Car speed: " + myCar.speed);