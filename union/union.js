//Iteration 1 - without reduce:
const union = (...arrays) => {
    let uniqueNumbers = new Set();

    for (let i=0; i<arrays.length; i++) {
        let eachArray = arrays[i];
        for (let ii=0; ii<eachArray.length; ii++) {
            uniqueNumbers.add(eachArray[ii]);
        }
    }
    return Array.from(uniqueNumbers);

};

//Iteration 2 - with reduce 
const union = (...arrays) => {
    let uniqueNumbers = new Set();
    let finder = arrays.reduce((acc, val) => {
        val.forEach(function(element){      
            return uniqueNumbers.has(val) ? acc : uniqueNumbers.add(element);
        })
    }, 0)
     return Array.from(uniqueNumbers);
};

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));