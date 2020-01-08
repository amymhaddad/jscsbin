
let allNumbers = [[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]];
for (let i=0; i<allNumbers.length; i++) {
    let intersect = new Set([...allNumbers[i]].filter(number => new Set(allNumbers[i+1]).has(number)));
    console.log(intersect);
}   
