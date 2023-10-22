const arr = [2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 5, 56, 2, 76, 2, 3, 4, 5, 6, 7, 8, 8];

const unqi = [...new Set(arr)].sort((a, b) => b - a);

console.log("unqi", unqi)
