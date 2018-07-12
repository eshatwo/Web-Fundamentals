var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

console.log(users[1].age); //John's age
console.log(users[0].name); // name of the first object
for (var i=0; i<users.length; i++){ //name and age of each user using a for loop
    console.log(users[i].name) -
    console.log(users[i].age);
}
