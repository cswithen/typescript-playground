import "reflect-metadata";

const plane = {
  color: "red",
};


Reflect.defineMetadata("note", "hi there", plane);
Reflect.defineMetadata("height", 10, plane);

const note = Reflect.getMetadata('note', plane)
const height = Reflect.getMetadata('height', plane)

console.log(note)
console.log(height)

// apply meta data to a property
Reflect.defineMetadata('note', 'nested meta data!', plane, 'color')

const nestedMeta = Reflect.getMetadata('note', plane, 'color')

console.log(nestedMeta)

// apply to class
@printMetadata
class Plane {
  color: string = 'red'
  
  @markFunction("SHHH ITS A SECRET")
  fly(): void {
    console.log('vrrrrrr');
  }
}

function markFunction(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key)
  }
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly')
console.log(secret)

// this decorator is for the whole class and will rn last
function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
  const secret = Reflect.getMetadata('secret', target.prototype, key)
  console.log(secret)
  }
}