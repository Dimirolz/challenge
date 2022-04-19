const LinkedList = require("./LinkedList");

describe("Linked list", () => {
    test("append working correct", () => {
        const linkedList = new LinkedList();

        linkedList.append(10);
        linkedList.append(25);
        const first = linkedList.find(10);

        expect(first.next.value).toBe(25)
    });
    test("prepend working correct", () => {
        const linkedList = new LinkedList();

        linkedList.append(10);
        linkedList.prepend(25);
        const first = linkedList.find(25);

        expect(first.next.value).toBe(10)
    });
    test("size working correct", () => {
        const linkedList = new LinkedList();

        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(4);

        expect(linkedList.size()).toBe(4);
    });
    test("find work correct", () => {
        const linkedList = new LinkedList();

        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(4);

        expect(linkedList.find(3).next.value).toBe(4);
    });
});
