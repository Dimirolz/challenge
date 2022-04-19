const quickSort = require('./QuickSort')

describe("Quick sort", () => {
    test("quick sort is working correctly", () => {
        const first = quickSort([2, 3, 1, 4]);
        const second = quickSort([]);
        const third = quickSort([5, 4, 3, 2, 1]);

        expect(first).toStrictEqual([1, 2, 3, 4]);
        expect(second).toStrictEqual([]);
        expect(third).toStrictEqual([1, 2, 3, 4, 5]);
    });
});
