let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// 이스케이프 문자 \를 통해 .을 문자데이터로 인식한다.
// $는 문자데이터의 끝에 있는 .을 찾는다. console: null
// 플래그 m을 사용하면 문자데이터의 각 줄마다를 시작과 끝으로 인식한다. console: [.]
console.log(str.match(/\.$/gim))
