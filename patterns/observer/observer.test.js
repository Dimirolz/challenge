const Observer = require("./Observer");


describe("Observer", () => {
    test("observer is working correctly", () => {
        let first;
        let second;
        const observer = new Observer();
        const firstFunc = (num) => first = num + 10;
        const secondFunc = (num) => second = num;

        observer.subscribe(firstFunc);
        observer.subscribe(secondFunc);
        observer.notify(1);

        expect(first).toBe(11);
        expect(second).toBe(1);
    });
});
