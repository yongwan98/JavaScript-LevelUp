export function random() {
  // floor을 통해 내림 처리를 한다.
  // random을 통해 난수가 생성된다.
  // 난수는 소수점값만 나오기 때문에 * 10을 통해 정수도 값이 나올 수 있게 한다.
  return Math.floor(Math.random() * 10)
}

export let information = {
  name: 'Heropy',
  age: 85,
  email: 'wyw1998@naver.com'
}

export default 123