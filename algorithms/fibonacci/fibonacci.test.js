const fibonacci = require('./Fibonacci')

describe("Fibonacci", () => {
    test("fibonacci is working correctly", () => {
        const firstResult = fibonacci(3);
        const secondResult = fibonacci(10);
        const thirdResult = fibonacci(1);

        expect(firstResult).toStrictEqual([0, 1, 1]);
        expect(secondResult).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
        expect(thirdResult).toStrictEqual([0]);
        expect(() => fibonacci(-1)).toThrow('Cannot be less than zero');
    });
});
