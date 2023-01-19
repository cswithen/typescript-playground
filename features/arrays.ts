// use type annotations for empty arrays
const carMakers: string[] = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

// use type annotations for empty arrays
const carsByMake: string[][] = [["f150"], ["corolla"], ["camero"]];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map', 'forEach', 'reduce'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];
importantDates.push("2031-11-11");
importantDates.push(new Date());
importantDates.push(100);
