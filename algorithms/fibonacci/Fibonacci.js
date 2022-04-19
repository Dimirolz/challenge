function fibonacci(nums) {
    let fib = [0, 1];

    if (nums < 0) {
        throw new Error('Cannot be less than zero');
    }

    if (nums < 2) {
        fib = fib.slice(0, nums)
    }

    for (let i = 2; i < nums; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib;
}

module.exports = fibonacci;
