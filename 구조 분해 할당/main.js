// 구조 분해 할당 (Destructuring assignment)
// 비구조화 할당

const user = {
  name: 'Heropy',
  age: 85,
  email: 'thesecon@gmail.com',
  address: 'USA'
}
const { name: yong, age, email, address = 'Korea' } = user
// E.g, user.address
// const heropy = name

console.log(`사용자의 이름은 ${yong}입니다.`)
console.log(`${yong}의 나이는 ${age}세입니다.`)
console.log(`${yong}의 이메일 주소는 ${email}입니다.`)
console.log(address)

const fruits = ['Apple', 'Banana', 'Cherry']
const [, b, c, d] = fruits
console.log(b, c, d)