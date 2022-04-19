const Stack = require("./Stack");

describe("Stack", () => {
    test("stack size working correct", () => {
        const stack = new Stack();

        stack.push(1);
        stack.push(2);

        expect(stack.size()).toBe(2);
    });
    test("stack top working correct", () => {
        const stack = new Stack();

        stack.push(1);
        stack.push(10);

        expect(stack.top()).toBe(10);
    });
    test("stack push working correct", () => {
        const stack = new Stack();

        stack.push(1);
        stack.push(10);

        expect(stack.size()).toBe(2);
        expect(stack.top()).toBe(10);
    });
    test("stack pop working correct", () => {
        const stack = new Stack();

        stack.push(2);
        stack.push(4);

        expect(stack.pop()).toBe(4);
        expect(stack.pop()).toBe(2);
    });
    test("stack pop working correct when stack empty", () => {
        const stack = new Stack();

        expect(stack.pop()).toBe(undefined);
    });
    test("stack isEmpty working correct when stack empty", () => {
        const stack = new Stack();

        stack.push(2);
        stack.pop();

        expect(stack.isEmpty()).toBe(true)
    });

    test("stack isEmpty working correct when stack is not empty", () => {
        const stack = new Stack();

        stack.push(2);

        expect(stack.isEmpty()).toBe(false)
    });
});
