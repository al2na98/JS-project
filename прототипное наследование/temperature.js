class Temperature {
    constructor(temp) {
        this.tempC = temp;
        this.tempF = Math.round(temp * (9 / 5) + 32);
    }

    get celsius() {
        return this.tempC;
    }

    get fahrenheit() {
        return this.tempF;
    }

    set celsius(num) {
        this.tempC += num;
    }

    set fahrenheit(num) {
        this.tempF += num;
    }

    static fromFahrenheit(temp){
        return new Temperature(Math.round((fahrenheit - 32) * 5 / 9))
    }
}

const day1 = new Temperature(25);
console.log(day1.celsius);
console.log(day1.fahrenheit);

day1.celsius = 26;
day1.fahrenheit = 67;

console.log(new Temperature(24));


console.log(Temperature.fromFahrenheit(88));