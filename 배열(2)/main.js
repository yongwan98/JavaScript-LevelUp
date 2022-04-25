// .filter()
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

// const a = numbers.map(number => {
//   return number < 3
// })
// 화살표 함수 간소화
const a = numbers.map(number => number < 3)
console.log(a)

// const b = numbers.filter(number => {
//   return number < 3
// })
// 화살표 함수 간소화
const b = numbers.filter(number => number < 3)
console.log(b)

// .finde()
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