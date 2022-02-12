let count = 0;

const counter = {
    increment() {
        return ++count;
    },
    decrement() {
        return --count;
    }
}

const singletonObject = Object.freeze(counter);

export default singletonObject;


