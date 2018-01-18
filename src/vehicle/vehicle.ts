function modifyName(target: object, propertyKey: string, propDesc: PropertyDescriptor): any {
    // console.log('Target is', target);
    // console.log('prop key is', propertyKey);
    // console.log('prop desc is', propDesc);
    let oldValue = propDesc.value;

    propDesc.value = function () {

        return 'AUDI' + arguments[0];
    };

    return propDesc;
}

function priceDec(target: object, propKey: string) {

    let val = target[propKey];
    let getter = function () {
        return '500000';
    };
    var setter = function (newVal) {
        val = newVal;
    };
    Object.defineProperty(target, propKey, {
        set: setter,
        get: getter
    });

    console.log(Object.getOwnPropertyDescriptor(target, propKey));
}

export class Vehicle {

    name: string;

    @priceDec
    price: string;
    color: string;
    type: number;
    fuelType: string;
    maxSpeed: number;

    constructor(name: string,
                price: string,
                color: string) {
        this.name = name;
        this.color = color;
        this.price = price;
    }

    run(runCondition: boolean): any {
        return runCondition;
    }

    idle(runCondition: boolean): boolean {
        return runCondition;
    }

    @modifyName
    myName(param) {
        return this.name + param;
    }

    myPrice() {
        return this.price;
    }
}

