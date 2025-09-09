//Q1
const getter = (myArray, counter)=>{
    let greetText = 'Hello ';
    for(let index in myArray){
        console.log(greetText + myArray[index])
    }
}

//Q2
const capitalize = (str)=>{
    let [firstLetter, ...rest] = str
    return firstLetter.toUpperCase() + rest.join('').toLowerCase()
}

//Q3
const colors = ['red', 'green', 'blue']
const upper= colors.map((x) => capitalize(x))

//Q4
const values = [1,60,34,,30,20,5]
const Bigger20 = values.filter((x)=>x<20)

//Q5
const array = [1,2,3,4]
const calculateSum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);
const calculateProduct = array.reduce(
    (accumulator, currentValue) => accumulator * currentValue
);

//Q6
class Car{
    constructor(Model, Year) {
        this.model = Model
        this.year = Year

    }
    details(){
        return `Model: ${this.model} Engine ${this.year}`
    }
}

class Sedan extends Car{
    constructor(Model, Year, Balance) {
        super(Model, Year);
        this.balance = Balance

    }
    info(){
        return `${this.model} as a balance of $${this.balance}`
    }
}

const car2 = new Car('Pontiac Firebird', 1976)
console.log(car2.details())

const sedan = new Sedan('Volvo SD', 2018, 3000)
console.log(sedan.info())