// ---- Example of generics with Classes ----
// specific class 1
class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

// specific class 2
class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

// generic class that can cover both specifics
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything<string>(["a", "b", "c"]);

// ---- Example of generics with functions ----
// specific class 1
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// specific class 2
function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// generic function that can cover both specifics
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(["a", "b", "c"]);

// Generic Constraints

class Car {
  print() {
    console.log("I am a car");
  }
}

class House {
  print() {
    console.log("I am a house");
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car>([new Car(), new Car()]);
