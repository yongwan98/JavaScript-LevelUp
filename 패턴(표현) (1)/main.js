let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
hxyp
http://localhost:1234
`

// ab$ | 줄(Line) 끝에 있는 ab와 일치
console.log(
  str.match(/d$/gm)
)

// ^ab | 줄(Line) 시작에 있는 ab와 일치
console.log(
  str.match(/^t/gim)
)

// . | 임의의 한 문자와 일치
// 문자데이터의 모든 글자를 각각의 배열테이터로 만든다.
console.log(
  str.match(/./g)
)
// 임의로 설정한 시작과 끝 h, p 사이에 ..에는 어떤 문자도 들어올 수 있다.
console.log(
  str.match(/h..p/g)
)

// a|b | a 또는 b와 일치
// 또는의 개념이기 때문에 플래그 g를 제거하게 되면 먼저 찾아지게 되는 데이터 fox만 출력한다.
// | 양 옆으로 순서를 바꿔도 둘 중 먼저 찾아지는 데이터를 출력한다.
console.log(
  str.match(/dog|fox/g)
)

// ab? | b가 없거나 b와 일치
// ?를 사용하면 찾으려는 값의 끝값 's'는 있을수도 있고 없을수도 있다는 전제를 한다.
console.log(
  str.match(/https?/g)
)

// {3} | 3개 연속 일치
console.log(
  str.match(/d{2}/g)
)

// {3,} | 3개 이상 연속 일치
console.log(
  str.match(/d{2,}/g)
)

// {3,5} | 3개 이상 5개 이하(3~5개) 연속 일치
console.log(
  str.match(/d{2,4}/g)
)

// 1번째 코드: 숫자와 알파벳이 2개 이상 3개 이하인 모든 데이터를 찾는다.
// 2번째 코드: 특수문자를 경계로 해서 숫자와 알파벳이 2개 이상 3개이하인 데이터만 찾는다.
console.log(
  // str.match(/\w{2,3}/g)
  str.match(/\b\w{2,3}\b/g)
)