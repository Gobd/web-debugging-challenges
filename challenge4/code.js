// given the following array, randomize it.

var students = [
    'Dan', 'Brack', 'Erin', 'Geordyn', 'Jess', 'Sarah', 'Andrew', 'Ryan', 'Tim', 'Stephen', 'David', 'Mark'
]

function randomArray(arr) {
  // random function that takes in max # arg
  // makea  copy of the array so we don't modify it
    let newArr = [],
        rand = (max) => Math.floor(Math.random() * max),
        copy = [].concat(arr);

// while our shuffled array is shorter than the original, keep shuffling
// we just splice out one number at a time until the lengths match
    while (newArr.length < arr.length) {
        newArr.push(copy.splice(rand(copy.length), 1)[0]);
    }
    return newArr;
}

console.log(randomArray(students));
// doesn't modify the original array!
// console.log(students);