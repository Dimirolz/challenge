let bubbleSort = (inputArr) => {

    const len = inputArr.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                [inputArr[j], inputArr[j + 1]] = [inputArr[j + 1], inputArr[j]];
            }
        }
    }

    return inputArr;
};

module.exports = bubbleSort;

