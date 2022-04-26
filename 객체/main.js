// Object.assign()
const userAge = {
  // key: value
  name: 'Heropy',
  age: 85
}
const userEmail = {
  name: 'Heropy',
  email: 'thesecon@gmail.com'
}

const target = Object.assign(userAge, userEmail)
console.log('target(assign): ', target)
console.log('userAge(assign): ', userAge)
console.log('target === userAge(assign): ', target === userAge)

const a = { k: 123 }
const b = { k: 123 }
console.log('a === b(assign): ', a === b)

// Object.keys()
const user = {
  name: 'Heropy',
  age: 85,
  email: 'thesecon@gmail.com'
}
const keys = Object.keys(user)
console.log('keys(keys): ', keys)
// ['name', 'age', 'email']
console.log('user[\'email\'](keys): ', user['email'])

const values = keys.map(key => user[key])
console.log('values(map): ', values)