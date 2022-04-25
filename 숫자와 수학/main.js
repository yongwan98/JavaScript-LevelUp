const pi = 3.14159265358979
console.log(pi)

// toFixed = 소수점 몇번째 자리까지 유지할 것인지 인수로 지정, 문자데이터로 반환
const str = pi.toFixed(2)
console.log(str)
console.log(typeof str)

// parseInt = 문자 데이터를 숫자 데이터로 반환, 정수로 반환
const integer = parseInt(str)
// parseFloat = 문자 데이터를 숫자 데이터로 반환, 소수점까지 반환
const float = parseFloat(str)
console.log(integer)
console.log(float)
console.log(typeof integer ,typeof float)

// 메소드 활용
console.log('abs: ', Math.abs(-12))

console.log('min: ', Math.min(2, 8))

console.log('max: ', Math.max(2, 8))

console.log('ceil: ', Math.ceil(3.14))

console.log('floor: ', Math.floor(3.14))

console.log('round: ', Math.round(3.14))

console.log('random: ', Math.random())

