// Array Basic
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// console.log(numbers[1])
// console.log(fruits[2])

// .length
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

console.log('numbers.length: ' ,numbers.length)
console.log('fruits.length: ' ,fruits.length)
console.log('[1, 2].length: ' ,[1, 2].length)
console.log('[].length: ' ,[].length)

// .concat()
const numbers1 = [1, 2, 3, 4]
const fruits1 = ['Apple', 'Banana', 'Cherry']

console.log('numbers1.concat(fruits1): ' ,numbers1.concat(fruits1))
console.log('numbers1: ' ,numbers1)
console.log('fruits1: ' ,fruits1)

// .forEach()
const numbers2 = [1, 2, 3, 4]
const fruits2 = ['Apple', 'Banana', 'Cherry']

fruits2.forEach(function (element, index, array) {
  console.log('fruits2.forEach: ' ,element, index, array)
})

// .map()
const numbers3 = [1, 2, 3, 4]
const fruits3 = ['Apple', 'Banana', 'Cherry']

// const a = fruits3.forEach(function (fruit, index) {
//   console.log(`${fruit}-${index}`)
// })

// 화살표 함수 변환
const a = fruits3.forEach((fruit, index) => {
  console.log(`${fruit}-${index}`)
})
console.log(a)

// const b = fruits3.map(function (fruit, index) {
//   // return `${fruit}-${index}`
//   return {
//     id: index,
//     name: fruit
//   }
// })

// 화살표 함수 변환
const b = fruits3.map((fruit, index) => ({
  id: index,
  name: fruit
}))
console.log(b)
