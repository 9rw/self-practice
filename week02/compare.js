function shallowEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }
  
  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  if (
    typeof obj1 !== "object" || obj1 === null ||
    typeof obj2 !== "object" || obj2 === null
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (
      keys2.includes(key) === false ||
      deepEqual(obj1[key], obj2[key]) === false
    ) {
      return false;
    }
  }

  return true;
}

const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };
const obj3 = { a: 1, b: 2, c: 3 };
const obj4 = { a: 1, b: { c: 2 } }; // nested object
const obj5 = { a: 1, b: { c: 2 } }; // nested object

console.log("shallowEqual")
console.log('shallowEqual(obj1, obj2):', shallowEqual(obj1, obj2)); // true
console.log('shallowEqual(obj1, obj3):', shallowEqual(obj1, obj3)); // false
console.log('shallowEqual(obj4, obj5):', shallowEqual(obj4, obj5)); // false (different references)
console.log("\ndeepEqual")
console.log('deepEqual(obj1, obj2):', deepEqual(obj1, obj2)); // true
console.log('deepEqual(obj1, obj3):', deepEqual(obj1, obj3)); // false
console.log('deepEqual(obj4, obj5):', deepEqual(obj4, obj5)); // true