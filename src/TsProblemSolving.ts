
// Problem No 1 =====
// Create a function that takes an array of numbers as input and returns the sum of all the numbers in the array. Make sure to define the types for the input parameter and return value.

function sumArray(numbers: number[]): number {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}
const numbers: number[] = [1, 2, 3, 4, 5];
const result: number = sumArray(numbers);
console.log(result);  // Output: 15

// Problem No 2 =====
// Define an interface called Person that has the following properties: name (string), age (number), and email (string). Create an object based on this interface and print out its properties.

interface Person {
  name: string;
  age: number;
  email: string;
}

const person: Person = {
  name: "John Doe",
  age: 25,
  email: "john.doe@example.com",
};

console.log(person.name);   // Output: John Doe
console.log(person.age);    // Output: 25
console.log(person.email);  // Output: john.doe@example.com

// Problem No 3 =====
// Write a function called calculateArea that takes the length and width of a rectangle as parameters and returns its area. Define the types for the input parameters and return value.

const length: number = 5;
const width: number = 10;
const area: number = calculateArea(length, width);
console.log(area);  // Output: 50

// Problem No 4 =====
// Implement a generic function called reverseArray that takes an array of any type and returns the reversed version of the array. Test it with different types of arrays (e.g., numbers, strings) to ensure it works correctly.

function reverseArray<T>(array: T[]): T[] {
  return array.reverse();
}
const numbers: number[] = [1, 2, 3, 4, 5];
console.log(reverseArray(numbers));  // Output: [5, 4, 3, 2, 1]

const strings: string[] = ["apple", "banana", "cherry"];
console.log(reverseArray(strings));  // Output: ["cherry", "banana", "apple"]


// Problem No 5 =====
// Create a generic interface called Repository that represents a generic data repository. It should have methods like getAll, getById, create, update, and delete. Define the types for the methods and create a class that implements this interface.

interface Repository<T> {
  getAll(): T[];
  getById(id: number): T | undefined;
  create(item: T): void;
  update(item: T): void;
  delete(id: number): void;
}

class GenericRepository<T> implements Repository<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  getAll(): T[] {
    return this.items;
  }

  getById(id: number): T | undefined {
    return this.items.find((item: any) => item.id === id);
  }

  create(item: T): void {
    this.items.push(item);
  }

  update(item: T): void {
    const index = this.items.findIndex((existingItem: any) => existingItem.id === item.id);
    if (index !== -1) {
      this.items[index] = item;
    }
  }

  delete(id: number): void {
    const index = this.items.findIndex((item: any) => item.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}

// Example usage
interface User {
  id: number;
  name: string;
  age: number;
}

const userRepository = new GenericRepository<User>();

userRepository.create({ id: 1, name: "John Doe", age: 25 });
userRepository.create({ id: 2, name: "Jane Smith", age: 30 });

const allUsers = userRepository.getAll();
console.log(allUsers);

const user = userRepository.getById(1);
console.log(user);
userRepository.update({ id: 1, name: "John Doe", age: 26 });
userRepository.delete(2);


// Problem No 6 =====
// Define a type alias called Coordinates that represents the latitude and longitude of a location. It should be an object with latitude and longitude properties, both of which are numbers. Create a variable of type Coordinates and assign some sample values to it.

type Coordinates = {
  latitude: number;
  longitude: number;
};

const location: Coordinates = {
  latitude: 40.7128,
  longitude: -74.0060,
};

console.log(location);  // Output: { latitude: 40.7128, longitude: -74.0060 }


// Problem No 7 =====
// Define an enum called Color with values representing different colors (e.g., Red, Green, Blue). Create a function that takes a Color value as input and prints out a corresponding message (e.g., "You selected Red").


enum Color {
  Red = "Red",
  Green = "Green",
  Blue = "Blue",
}

function printColorMessage(color: Color): void {
  switch (color) {
    case Color.Red:
      console.log("You selected Red");
      break;
    case Color.Green:
      console.log("You selected Green");
      break;
    case Color.Blue:
      console.log("You selected Blue");
      break;
    default:
      console.log("Unknown color");
  }
}
const selectedColor: Color = Color.Red;
printColorMessage(selectedColor);  // Output: "You selected Red"


// Problem No 8 =====
// Create a base class called Shape with a method calculateArea that returns the area of the shape. Extend this class to create subclasses for specific shapes like Rectangle and Circle. Implement the calculateArea method in each subclass and test it with different dimensions.


abstract class Shape {
  abstract calculateArea(): number;
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

// Test the classes
const rectangle = new Rectangle(5, 10);
console.log(rectangle.calculateArea());  // Output: 50

const circle = new Circle(3);
console.log(circle.calculateArea());  // Output: 28.274333882308138


// Problem No 9 =====
// Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes objects of type Car and Driver and returns an object with the combined properties of both types.

interface Car {
  make: string;
  model: string;
  year: number;
}

interface Driver {
  name: string;
  licenseNumber: string;
}

function combineCarAndDriver(car: Car, driver: Driver): { car: Car, driver: Driver } {
  return {
    car: car,
    driver: driver
  };
}

// Example usage
const myCar: Car = {
  make: "Toyota",
  model: "Camry",
  year: 2022
};

const myDriver: Driver = {
  name: "John Doe",
  licenseNumber: "ABC123"
};

const combinedData = combineCarAndDriver(myCar, myDriver);
console.log(combinedData);


// Problem No 10 =====
// Create a function that takes a parameter which can be either a string or an array of strings. If it's a string, return the uppercase version of the string. If it's an array of strings, return an array with each string in uppercase.



function convertToUppercase(input: string | string[]): string | string[] {
  if (typeof input === 'string') {
    return input.toUpperCase();
  } else if (Array.isArray(input)) {
    return input.map((str) => str.toUpperCase());
  } else {
    throw new Error('Invalid input');
  }
}
const strResult = convertToUppercase('hello');
console.log(strResult);  // Output: "HELLO"

const arrResult = convertToUppercase(['apple', 'banana', 'cherry']);
console.log(arrResult);  // Output: ["APPLE", "BANANA", "CHERRY"]



// Problem No 11 =====
// Declare a variable with an initial value of null and type it as string. Use type assertion to assign a string value to this variable and then print its length.


let myString: string | null = null;
myString = "Hello, TypeScript!" as string;
console.log(myString.length);


// Problem No 12 =====
// Create a function that takes an input parameter of type unknown. Inside the function, implement type guards to check if the input is of type string or number and perform different operations based on the type.



function processInput(input: unknown): void {
  if (typeof input === 'string') {
    console.log(`Input is a string: ${input.toUpperCase()}`);
  } else if (typeof input === 'number') {
    console.log(`Input is a number: ${input * 2}`);
  } else {
    console.log('Unknown input type');
  }
}
processInput("hello");  // Output: "Input is a string: HELLO"
processInput(5);  // Output: "Input is a number: 10"
processInput(true);  // Output: "Unknown input type"


// Problem No 13 =====
// Create a generic function that takes an array of elements and returns the first element of the array. Add a constraint to ensure that the generic type can be compared using the > operator.


function getFirstElement<T extends number | string>(arr: T[]): T | undefined {
  if (arr.length > 0) {
    return arr[0];
  } else {
    return undefined;
  }
}
const numbers: number[] = [1, 2, 3, 4, 5];
const firstNumber = getFirstElement(numbers);
console.log(firstNumber);  // Output: 1

const strings: string[] = ["apple", "banana", "cherry"];
const firstString = getFirstElement(strings);
console.log(firstString);  // Output: "apple"


// Problem No 14 =====
// Create a function that takes two parameters: one can be either a string or number, and the other can be either a boolean or an array of strings. Implement logic in the function to perform different operations based on the types of the parameters.


function performOperations(param1: string | number, param2: boolean | string[]): void {
  if (typeof param1 === 'string' && Array.isArray(param2)) {
    console.log('Performing operation 1');
    console.log(`Param1: ${param1.toUpperCase()}`);
    console.log(`Param2 Length: ${param2.length}`);
  } else if (typeof param1 === 'number' && typeof param2 === 'boolean') {
    console.log('Performing operation 2');
    console.log(`Param1 Squared: ${param1 * param1}`);
    console.log(`Param2: ${param2}`);
  } else {
    console.log('Invalid parameter types');
  }
}
performOperations("hello", ["apple", "banana"]);  // Output: Performing operation 1 ... Param1: HELLO ... Param2 Length: 2
performOperations(5, true);  // Output: Performing operation 2 ... Param1 Squared: 25 ... Param2: true
performOperations(10, ["apple", "banana"]);  // Output: Invalid parameter types



// Problem No 15 =====
// Create a generic function called filterArray that takes an array of any type and a predicate function as parameters. The function should return a new array that contains only the elements for which the predicate function returns true. Ensure that the function is flexible enough to work with different types of arrays.


function filterArray<T>(arr: T[], predicate: (value: T) => boolean): T[] {
  const filteredArray: T[] = [];

  for (const element of arr) {
    if (predicate(element)) {
      filteredArray.push(element);
    }
  }

  return filteredArray;
}
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);
console.log(evenNumbers);  // Output: [2, 4]

const names = ['Alice', 'Bob', 'Charlie', 'Dave'];
const longNames = filterArray(names, (name) => name.length > 4);
console.log(longNames);  // Output: ['Alice', 'Charlie']

// Problem No 16 =====
// Create a TypeScript program that declares a function that takes two parameters, a string and a number. The function should log the string parameter repeated the number of times specified by the number parameter. If the number parameter is not provided, it should default to 3.

function repeatString(str: string, num: number = 3) {
  for (let i = 0; i < num; i++) {
    console.log(str);
  }
}

repeatString("Programming Hero", 6);
repeatString("Thank You");

// Porblem No 17 =====
// Write a function that takes in an array of objects with properties name and age, and returns only the objects where the person's age is greater than or equal to 18,

type Person = {
  name: string;
  age: number;
};

const persons: Person[] = [
  { name: "abdullah", age: 25 },
  { name: "masud", age: 17 },
  { name: "tanjil", age: 20 },
];

const adultPerson = (persons: Person[]): Person[] =>
  persons.filter((person) => person.age >= 18);

const adults: Person[] = adultPerson(persons);
console.log(adults);

// Problem No 18 =====
// Create a TypeScript program that uses a generic function to reverse an array of strings, and takes a variable number of strings to the array using rest parameters. Provide an example of calling the function with a variable number of strings.

function reverseArray<T>(...string: T[]): T[] {
  return string.reverse();
}

const reversedArray = reverseArray("male", "female", "bts");
console.log(reversedArray);

// Problem No 19 =====
// Create a TypeScript class called Person that has private properties name and age, and a public method getDetails that returns a string with the person's name and age. Use parameter properties to define and initialize the properties in the constructor.

// Create a TypeScript class called Student that extends the Person class and has an additional private property grade. Define a public method getGrade that returns the student's grade. Use the super keyword to call the constructor of the Person class and initialize the name and age properties.

class PersonData {
  constructor(private name: string, private age: number) {}

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

class Student extends PersonData {
  constructor(name: string, age: number, private grade: string) {
    super(name, age);
  }

  getGrade(): string {
    return `Grade: ${this.grade}`;
  }
}

const student = new Student("MdAbdullah", 18, "A");

const details = student.getDetails();
const grade = student.getGrade();
console.log(details);


// Problem No 20 =====
// Create a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message.


const stringGuard = (param: unknown): void => {
  if (typeof param === "string") {
    console.log(param);
  } else {
    console.log("param is not a string");
  }
};

stringGuard("Hello, world!");
stringGuard(123);




