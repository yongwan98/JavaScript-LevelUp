// 원시형 데이터
let a = 1
let b = 4
console.log(a, b, a === b)
b = a
console.log(a, b, a === b)
a = 7
console.log(a, b, a === b)
let c = 1
console.log(b, c, b === c)

// 참조형 데이터
let a1 = { K: 1 }
let b1 = { K: 1 }
console.log(a1, b1, a1 === b1)
a1.k = 7
b1 = a1
console.log(a1, b1, a1 === b1)
a1.k = 2
console.log(a1, b1, a1 === b1)
let c1 = b1
console.log(a1, b1, c1, a1 === c1)
