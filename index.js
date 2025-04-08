//Number 1

function rearranges(string1) {
    let arranged = string1.map(item => item.toLowerCase().split('').sort((a, b) => b.localeCompare(a)).join('')).sort();
    return arranged
  }

console.log(rearranges(['Betty', 'Arsema', 'Gebremichael', 'Rebecca']));


//Number 2

function integerCheck(arr) {
    return arr.map(num => {
        if (num > 0) {
            return `${num} is positive`;
        } else if (num < 0) {
            return `${num} is negative`;
        } else {
            return `${num} is zero`;
        }
    });
}
console.log(integerCheck([1, 2, -1, -2]));

//Number 3

function sortEmployeesBySalary(employees) {
    return [...employees].sort((a, b) => a.salary - b.salary);
}

let employeesList = [
    { id: 1, name: "Arsema", salary: 1000 },
    { id: 2, name: "Merciline", salary: 1200 },
    { id: 3, name: "Amuor", salary: 800 }
];

let sortedEmployeesBySalary = sortEmployeesBySalary(employeesList);
console.log(sortedEmployeesBySalary);



//Number 4

function numberTimesTwo(arr) {
    arr.forEach(item => console.log(item * 2));
}
numberTimesTwo([10, 20, 30, 40, 50]);


//Number 5

function formatedArray(numbers) {
    let newArray = [];
    for (let i = 0; i < 4 && i < numbers.length; i++) {
        newArray[i] = numbers[i] * 8;
    }
    for (let i = 4; i < numbers.length - 2; i++) {
        newArray[i] = numbers[i];
    }
    for (let i = numbers.length - 2; i < numbers.length && i >= 0; i++) {
        newArray[i] = numbers[i] + 5;
    }
    console.log(newArray);
}

formatedArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
