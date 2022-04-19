const quickSort = (originalList) => {
    const arr = [...originalList]

    if (arr.length < 2) {
        return arr
    }

    const pivot = arr[0]

    const smaller = arr.filter((item) => item < pivot)
    const bigger = arr.filter((item) => item > pivot)

    return [...quickSort(smaller), pivot, ...quickSort(bigger)]
}

module.exports = quickSort;
