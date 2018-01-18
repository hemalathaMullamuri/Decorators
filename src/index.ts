import {Vehicle} from './vehicle/vehicle';

let gowthamsCar = new Vehicle('Stang', '400000', 'blue');

console.log(gowthamsCar.myName(' from Ford'));
console.log('Price is ', gowthamsCar.myPrice());


// Decorators
/**
 * 1. Method Decorator
 * sig:
 * function(target: object, propertyKey: string, propDesc:PropDesc ) {
 * }
 * 2. Property Decorator
 * sig:
 * function(target: object, propertyKey: string) {
 * }
 * 3. Class Decorators
 * sig:
 * function(target: object ) {
 * }
 * 4. Parameter Decorators
 * sig:
 * function(target: object, propertyKey: string, index: number ) {
 * }
 */
