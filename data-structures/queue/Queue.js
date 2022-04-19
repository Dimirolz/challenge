class Queue {
    #items = [];

    enqueue(value) {
        this.#items.push(value);
    }

    dequeue() {
        return this.#items.shift();
    }

    isEmpty() {
        return this.#items.length === 0;
    }

    size() {
        return this.#items.length;
    }
}

module.exports = Queue;
