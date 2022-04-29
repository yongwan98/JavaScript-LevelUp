const user = {
  name: 'HEROPY',
  age: 85,
  emails: [
    'thesecon@gmail.com',
    'neo@zillinks.com'
  ]
}

const str = localStorage.getItem('user')
const obj = JSON.parse(str)
obj.age = 22
localStorage.setItem('user', JSON.stringify(obj))

// Local Storage에 데이터 내보내기
// localStorage.setItem('user', JSON.stringify(user))

// Local Storage저장된 데이터 읽기
// console.log(JSON.parse(localStorage.getItem('user')))

// Local Storage저장된 데이터 삭제
// localStorage.removeItem('user')