"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function modifyName(target, propertyKey, propDesc) {
    // console.log('Target is', target);
    // console.log('prop key is', propertyKey);
    // console.log('prop desc is', propDesc);
    let oldValue = propDesc.value;
    propDesc.value = function () {
        return 'AUDI' + arguments[0];
    };
    return propDesc;
}
function priceDec(target, propKey) {
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
class Vehicle {
    constructor(name, price, color) {
        this.name = name;
        this.color = color;
        this.price = price;
    }
    run(runCondition) {
        return runCondition;
    }
    idle(runCondition) {
        return runCondition;
    }
    myName(param) {
        return this.name + param;
    }
    myPrice() {
        return this.price;
    }
}
__decorate([
    priceDec
], Vehicle.prototype, "price", void 0);
__decorate([
    modifyName
], Vehicle.prototype, "myName", null);
exports.Vehicle = Vehicle;
//# sourceMappingURL=vehicle.js.map