export declare class Vehicle {
    name: string;
    price: string;
    color: string;
    type: number;
    fuelType: string;
    maxSpeed: number;
    constructor(name: string, price: string, color: string);
    run(runCondition: boolean): any;
    idle(runCondition: boolean): boolean;
    myName(param: any): string;
    myPrice(): string;
}
