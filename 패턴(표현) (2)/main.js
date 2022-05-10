let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
hxyp
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`
// 알파벳 소문자, 대문자, 한글, 숫자 구분할 것!

// a 또는 b 또는 c
// 지정한 문자들과 동일한 값만 찾는다.
console.log(
  str.match(/[abc]{3}/g)
)

// a부터 z사이의 문자 구간에 일치(영어 소문자)
// 범위를 지정할 수 있다.
console.log(
  str.match(/[a-b]/g)
)

// A부터 Z사이의 문자 구간에 일치(영어 대문자)
// 범위를 지정할 수 있다.
console.log(
  str.match(/[A-Z]/g)
)

// 0부터 9 사이의 문자 구간에 일치(숫자)
// 범위를 지정할 수 있다.
console.log(
  str.match(/[0-9]/g)
)

// 가부터 힣 사이의 문자 구간에 일치(한글)
// 범위를 지정할 수 있다.
console.log(
  str.match(/[가-힣]/g)
)

console.log('-------------------------------------------------')

// 63개 문자(Word, 대소영문52개 + 숫자10개 + _)에 일치: 한글은 포함안됨
console.log(
  str.match(/\w/g)
)

// 63개 문자에 일치하지 않는 문자 경계(Boundary): 특수기호 및 띄어쓰기 부분의 경계를 기준으로 찾는다.
console.log(
  // str.match(/\b/g)
  // 63개 문자가 아닌 경계에서 시작해서 f로 시작하는 63개 문자가 1개 이상 오는 연속 일치 후 63개 문자가 아닌 경계에서 끝난다.
  str.match(/\bf\w{1,}\b/g)
)

// 숫자(Digit)에 일치: 0부터 9
console.log(
  str.match(/\d/g)
)

// 공백(Space, Tab 등)에 일치: Enter는 \n으로 표시됨. Space 하나당 '', Tab는 '',''
console.log(
  str.match(/\s/g)
)

const h = ` hello   world   ! 

`
// h안의 공백문자를 검색해 ''로 대체한다.
console.log(
  h.replace(/\s/g, '')
)

console.log('-------------------------------------------------')

// 앞쪽 일치(Lookahead)
// @를 기준으로 앞쪽의 모든 문자데이터의 1이상의 문자를 찾는다.
console.log(
  str.match(/.{1,}(?=@)/g)
)

// 뒤쪽 일치(Lookbehind)
// @를 기준으로 뒤쪽의 모든 문자데이터의 1이상의 문자를 찾는다.
console.log(
  str.match(/(?<=@).{1,}/g)
)