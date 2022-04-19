class Observer {
    #observers = []

    subscribe(func) {
        this.#observers.push(func);
    }

    notify(data) {
        this.#observers.forEach(observer => observer(data));
    }
}

module.exports = Observer;
