let cars = [

    {model: "SUV",
    Brand: "Volvo",
    FuelType: "Methane"}, 

    {model: "SUV",
    Brand: "Ford",
    FuelType: "Propane"}, 

    {model: "SUV",
    Brand: "Wolksvagen",
    FuelType: "diesel"}, 

    {model: "SUV",
    Brand: "Mitsubishi",
    FuelType: "diesel"},

    {model: "SUV",
    Brand: "Ferrari",
    FuelType: "gas"},

    {model: "SUV",
    Brand: "Maserati",
    FuelType: "gas"},

    {model: "SUV",
    Brand: "Fiat",
    FuelType: "gas"}, 

    {model: "Limousine",
    Brand: "BMW",
    FuelType: "electric"},

    {model: "SUV",
    Brand: "Lada",
    FuelType: "electric"},

    {model: "SUV",
    Brand: "Chevrolet",
    FuelType: "electric"},

]

const gasCar = cars.filter(checkGas);
const dieselCar = cars.filter(checkdiesel);
const electricCar = cars.filter(checkElectric);

function checkGas(car) {
    return car.FuelType == "gas";
}
console.log(gasCar)

function checkdiesel(car) {
    return car.FuelType == "diesel";
}
console.log(dieselCar)

function checkElectric(car) {
    return car.FuelType == "electric";
}
console.log(electricCar)