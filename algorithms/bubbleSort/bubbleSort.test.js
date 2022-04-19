const bubbleSort = require('./BubbleSort')

describe("Bubble sort", () => {
    test("bubble sort is working correctly", () => {
        const first = bubbleSort([2, 3, 1, 4]);
        const second = bubbleSort([]);
        const third = bubbleSort([5, 4, 3, 2, 1]);

        expect(first).toStrictEqual([1, 2, 3, 4]);
        expect(second).toStrictEqual([]);
        expect(third).toStrictEqual([1, 2, 3, 4, 5]);
    });
});
