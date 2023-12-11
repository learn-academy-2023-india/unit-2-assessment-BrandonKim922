// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.
describe("multiplier", () => {
    it("returns multiplied values", () => {
      expect(multiplier(6, 7, 8, 9, 10)).toEqual(18, 21, 24, 27, 30)
      expect(multiplier(24, 27, 30, 33, 36)).toEqual(72, 81, 90, 99, 108)
    })
  })

const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.
const multiplier = (array) => {
  return array * 3
}
// Pseudo code:
//Input: An array of numbers
//Output: A new array of multiplied by 3
//Write a jest for testing
//Write a function to generate any input number miltiplied by 3

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.
describe("divisbleBy", () => {
  it("is a function called divisibleBy that takes a number as arguments and returns whether the number is evenly divisible by three", () => {
    expect(divisbleBy(15)).toEqual("15 is evenly divisible by three")
    expect(divisbleBy(0)).toEqual("0 is evenly divisible by three")
    expect(divisbleBy(-7)).toEqual("-7 is not evenly divisible by three")
  })
})

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.
const divisbleBy = (a) => {
  if(a % 3 === 0)
  return `${a} is evenly divisible by three`
  else {
      return `${a} is not evenly divisible by three`
  }
}
// Pseudo code: 
//Input: An object with number
//Output: A statement stating if the given number is evenly divisible by three
//Write a jest for testing
//Write a function to see if given number is divisible by 3, and set each possible cases and have different return statement

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
describe("capitalizer", () => {
  it("is a function called capitalizer that takes in an array of words and returns an array with all the words capitalized", () => {
    expect(capitalizer(["streetlamp", "potato", "teeth", "conclusion", "nephew"])).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(capitalizer(["temperature", "database", "chopsticks", "mango"])).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
  })
})
// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.
const capitalizer = (array) => {
  return array.map((value) => {
    return value[0].toUpperCase() + value.substring(1)
  })
}
// Pseudo code:
//Input: An array of words
//Output: An array of all the workds capitalized
//Write a jest for testing
//Write a function to make each strings in array with upper case for the first letter and remaining letters as it is.
//use Map function to have the same number of arrays