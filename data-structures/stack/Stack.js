class Stack {
    #storage = {};
    #count = 0;

    push(value) {
        this.#storage[this.#count] = value;
        this.#count += 1;
    }

    pop() {
        if (this.#count === 0) {
            return undefined;
        }
        this.#count -= 1;
        const value = this.#storage[this.#count];
        delete this.#storage[this.#count];
        return value;
    }

    isEmpty() {
        return this.#count === 0;
    }

    top() {
        if (this.#count === 0) {
            return undefined;
        }
        return this.#storage[this.#count - 1];
    }

    size() {
        return this.#count;
    }
}

module.exports = Stack;
