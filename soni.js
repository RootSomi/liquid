const arr = [1, 2, 3, 4, 5]
let soni = document.getElementById('soni')
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    document.write(`
    <h2>${arr[i]}</h2>
    `
    )
}
