const Dog = require("./Mixin");


describe("Mixin", () => {
    test("mixin is working correctly", () => {
        const goodBoy = new Dog("Rex");

        expect(goodBoy.name).toBe("Rex");
        expect(goodBoy.bark()).toBe("Woof!");
    });
});
