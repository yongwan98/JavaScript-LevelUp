// JS 데이터

// String: "", '', ``
// Number
// Boolean: trun, false
// undefined
// null
// Array: []
// Object: {}

// const result = 'Hello world'.indexOf('world') // === String.prototype.indexOf()
// console.log(result)

// length
const str0 = '0123'
console.log('length : ', str0.length)

// indexOf
const str1 = 'Hello world!'
console.log('indexOf : ', str1.indexOf('world'))

// slice
const str2 = 'Hello world!'
console.log('slice : ', str2.slice(0, 3))

// replace
const str3 = 'Hello world!'
console.log('replace : ', str3.replace('world', 'Heropy'))

// match
const str4 = 'wyw1998@naver.com'
console.log('match : ', str4.match(/.+(?=@)/)[0])

// trim
const str5 = '    Hello world!     '
console.log('trim : ', str5.trim())