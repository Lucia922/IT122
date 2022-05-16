

const myCounter =  ( () => {
    let counter = 0;
    return {
        increment: (inc) => {
            counter += inc;
        },
        getValue: () => {
            return counter;
        }
    };
});

//const counter = myCounter()
//counter.increment(2)
//console.log(counter.getValue())

//counter.increment(3)
//console.log(counter.getValue())

//counter.increment(4)
//console.log(counter.getValue())



//Invoking **myCounter** returns an object with 2 methods that 
//can access the local variable **counter** after the myCounter has executed.

//===
let obj = {
    name : "jim",
    age : 34,
    classes : ["itc 298", "web 150", "cs 110"]
}

//console.log(obj["name"])

//console.log(JSON.stringify(obj))

//console.log(Object.keys(obj));

//console.log(Object.values(obj));

let students = [
    { name : "jim", age : 34, classes : ["itc 298", "web150", "cs110"] },
    { name : "mary", age : 32, classes : ["web150", "cs110", "web120"] },
    { name : "sue", age : 28, classes : ["web150", "web120"] }
];

// console.log(students[0])
// console.log(students[0]["name"])

// let student = students.pop()
// console.log(student["name"])
//console.log(students.length)
// console.log(students);

//let found = students.find((student) => {
//   return student.name === 'mary';
//});
//console.log(found);

//let found;
//for (val in students) {
//    if (students[val]['name'] === 'mary'){
//        found = students[val];
//        break;
//   }
//}

//console.log(found);

//with anonymous function
//let olderStudents = students.filter((student) => {
//    return student.age >30;
//});
//console.log(olderStudents)

// with a named function
//const findOlder = (student) => {
//    return student.age > 30;
//}

//let olderStudents = students.filter(findOlder);
//console.log(olderStudents);

//.sort()


// const byAgeAsc = (student1, student2) => {
//     // sorts students by aage in ascending order
//     return student1.age - student2.age;
// }

// console.log(students.sort(byAgeAsc));

