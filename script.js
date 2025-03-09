//your JS code here. If required.
function manipulateArray() {
    return new Promise((resolve) => {
        setTimeout(() => resolve([1, 2, 3, 4]), 3000);
    })
    .then((array) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const evenNumbers = array.filter(num => num % 2 === 0);
                document.getElementById("output").textContent = evenNumbers.join(",");
                resolve(evenNumbers);
            }, 1000);
        });
    })
    .then((filteredArray) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const multipliedArray = filteredArray.map(num => num * 2);
                document.getElementById("output").textContent = multipliedArray.join(",");
                resolve(multipliedArray);
            }, 2000);
        });
    });
}

manipulateArray();
