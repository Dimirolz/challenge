const Queue = require("./Queue");

describe("Queue", () => {
    test("enqueue working correct", () => {
        const queue = new Queue();

        queue.enqueue(5);

        expect(queue.size()).toBe(1);
        expect(queue.dequeue()).toBe(5);
    });
    test("dequeue working correct", () => {
        const queue = new Queue();

        queue.enqueue(7);

        expect(queue.dequeue()).toBe(7);
    });
    test("isEmpty working correct when empty", () => {
        const queue = new Queue();

        queue.enqueue(7);
        queue.dequeue();

        expect(queue.isEmpty()).toBe(true);
    });
    test("isEmpty working correct when not empty", () => {
        const queue = new Queue();

        queue.enqueue(7);

        expect(queue.isEmpty()).toBe(false);
    });
    test("size working correct", () => {
        const queue = new Queue();

        queue.enqueue(7);
        queue.enqueue(10);

        expect(queue.size()).toBe(2);
    });
});
