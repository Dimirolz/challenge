class Item {
    next = null;
    value = null;

    constructor(value) {
        this.value = value;
    }
}

class LinkedList {
    #head = null;
    #tail = null;

    append(value) {
        const item = new Item(value);
        if (!this.#head) {
            this.#head = item;
            this.#tail = item;
        } else {
            this.#tail.next = item;
            this.#tail = item;
        }
    }

    prepend(value) {
        const item = new Item(value);
        item.next = this.#head;
        this.#head = item;
        if (!this.#tail) {
            this.#tail = item;
        }
    }

    size() {
        let item = this.#head;
        if (!item) {
            return 0;
        }
        let count = 1;
        while ((item = item.next)) {
            count += 1;
        }
        return count;
    }

    find(value) {
        let item = this.#head;
        if (!item) {
            return null;
        }

        do {
            if (item.value === value) {
                return item;
            }
        } while ((item = item.next));

        return null;
    }
}

module.exports = LinkedList;
