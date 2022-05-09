let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

const regexp = /fox/gi

// 정규식에서 찾는 fox값을 찾아 배열로 반환. 플래그 gi는 전체영역에서 대소문자를 가리지 않고 검색
console.log(str.match(regexp))

// replace는 정규식에서 찾는 fox값을 AAA로 변환(문자데이터)
// 만약 str에 할당하지 않게 되면 원본데이터는 수정되지 않는다.
str = str.replace(regexp, 'AAA')
console.log(str)

// 정규식에 있는 값과 일치하는 데이터면 true 아니면 false를 출력하는 Boolean데이터
// 원본데이터를 기준으로 함.
console.log(regexp.test('AAA'))