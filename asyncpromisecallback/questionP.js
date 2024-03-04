const arr = [
    {
        name: 'shrey',
        age: 25
    },
    {
        name: 'shrey',
        age: 30
    },
    {
        name: 'Yogesh',
        age: 25
    },
    {
        name: 'Yogesh',
        age: 30
    }
];

// Create an object to store the highest age for each unique name
const maxAgeByName = {};

// Iterate through the array
for (const obj of arr) {
    const { name, age } = obj;
    
    if (!(name in maxAgeByName) || age > maxAgeByName[name]) {
        maxAgeByName[name] = age;
    }
}

// Filter the array to get unique names with ages greater than the duplicate values
const uniqueObjects = arr.filter(obj => obj.age > maxAgeByName[obj.name]);

console.log(uniqueObjects);
console.log(maxAgeByName)
const Names = Object.keys(maxAgeByName)
const Names1 = maxAgeByName.shrey;
console.log(Names1)


