// get list of people who are aged more than 30

// output ["cdd", "bbdls", "poiuy"]

let users = [
    {firstName: "abc", age: 22},
    {firstName: "cdd", age: 44},
    {firstName: "bbdls", age: 50},
    {firstName: "poiuy", age: 60}
]

let output = users.reduce((arr, curr) => {
    if(curr.age > 30) arr.push(curr.firstName)
    return arr
}, [])

console.log(output)

let output2 = users.filter(a => a.age > 30).map(a => a.firstName)

console.log(output2)