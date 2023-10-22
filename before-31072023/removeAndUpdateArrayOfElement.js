const array = [
    { id: 1, name: 'test' },
    { id: 2, name: 'test2' },
    { id: 3, name: 'test3' },
    { id: 4, name: 'test4' },
    { id: 5, name: 'test5' },
];

const removeObject = (arr, id) => {
    const removed = arr.filter((i) => i.id !== id);
    const resetArray = removed.map((item, i) => ({ ...item, id: i + 1 }))
    return resetArray;
};

const result = removeObject(array, 2);
console.log("result", result);

