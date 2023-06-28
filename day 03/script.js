  const jsonStr1 = '{"name" : "Person 1" , "age" : "5"}';
const jsonStr2 = '{"age" : "5" ,  "name" : "Person 1" }';

// Step 1: Parse JSON strings into JavaScript objects
const obj1 = JSON.parse(jsonStr1);
const obj2 = JSON.parse(jsonStr2);

// Step 2: Convert JavaScript objects back to JSON strings with sorted properties
const sortedJsonStr1 = JSON.stringify(obj1, Object.keys(obj1).sort());
const sortedJsonStr2 = JSON.stringify(obj2, Object.keys(obj2).sort());

// Step 3: Compare the sorted JSON strings
if (sortedJsonStr1 === sortedJsonStr2) {
  console.log("The JSON objects are equal.");
} else {
  console.log("The JSON objects are not equal.");
}

