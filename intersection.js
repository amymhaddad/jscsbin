
const intersection = (...arrays) => {
    let allNumbers = [...arrays];
    let i = 0;
    let intersect = new Set([...allNumbers[i]].filter(number => new Set(allNumbers[i+1]).has(number)));
    i += 1;
    const total = [...intersect];
    return total;

};

console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));