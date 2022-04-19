const PersonProxy = require("./Proxy");


describe("Proxy", () => {
    test("proxy is working correctly", () => {
        const person = {
            name: "Dima",
            age: 24,
            planet: "Earth"
        }
        const personProxy = new PersonProxy(person);

        personProxy.age = 25;
        personProxy.name = "Max";

        expect(personProxy.age).toBe(33);
        expect(personProxy.name).toBe("Jesus");
        expect(personProxy.planet).toBe("Mars");
    });
});
