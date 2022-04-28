// import lodash from 'lodash'
import _ from 'lodash'

// 얕은 복사(Shallow copy), 깊은 복사(Deep copy)
const user = {
  name: 'Heropy',
  age: 85,
  emails: ['thesecon@gmail.com']
}
// 같은 메모리 주소를 바라보게 된다.
// const copyUser = user

// 새로운 메모리 주소에 값을 복사하게 된다.
// const copyUser = Object.assign({}, user)
// const copyUser = {...user}

// lodash를 사용한 깊은 복사
const copyUser = _.cloneDeep(user)
console.log(copyUser === user)

user.age = 22
console.log('user: ', user)
console.log('copyUser: ', copyUser)

console.log('------')
console.log('------')

user.emails.push('neo@zillinks.com')
console.log(user.emails === copyUser.emails)
console.log('user: ', user)
console.log('copyUser: ', copyUser)