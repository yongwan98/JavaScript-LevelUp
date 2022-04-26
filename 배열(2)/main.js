const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

// .filter()
// const a = numbers.map(number => {
//   return number < 3
// })
// 화살표 함수 간소화
const a = numbers.map(number => number < 3)
console.log('.map(): ', a)

// const b = numbers.filter(number => {
//   return number < 3
// })
// 화살표 함수 간소화
const b = numbers.filter(number => number < 3)
console.log('.filter(): ', b)

// .find()
// const a1 = fruits.find(fruit => {
//   return /^B/.test(fruit)
// })
// console.log('.find(): ', a1)
// 화살표 함수 간소화
const a1 = fruits.find(fruit => /^B/.test(fruit))
console.log('.find(): ', a1)

// .findIndex()
// const b1 = fruits.findIndex(fruit => {
//   return /^B/.test(fruit)
// })
// console.log('.findIndex(): ', b1)
// 화살표 함수 간소화
const b1 = fruits.findIndex(fruit => /^B/.test(fruit))
console.log('.findIndex(): ', b1)

// .includes()
const a2 = numbers.includes(3)
console.log('.includes(): ', a2)

const b2 = fruits.includes('Heropy')
console.log('.includes(): ', b2)

// .push()
// 원본 수정됨!
// numbers.push(5)
// console.log('.push(): ', numbers)

// .unshift()
// 원본 수정됨!
// numbers.unshift(0)
// console.log('.unshift(): ', numbers)

// .reverse()
// 원본 수정됨!
// numbers.reverse()
// fruits.reverse()
// console.log('.reverse(): ', numbers)
// console.log('.reverse(): ', fruits)

// .splice()
// 원본 수정됨!
// numbers.splice(0, 1)
// console.log('.splice(): ', numbers)