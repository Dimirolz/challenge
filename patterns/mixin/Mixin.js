class Dog {
    constructor(name) {
        this.name = name;
    }
}

const dogFunctionality = {
    bark: () => "Woof!",
};

Object.assign(Dog.prototype, dogFunctionality);

module.exports = Dog;
