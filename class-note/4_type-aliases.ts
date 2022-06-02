/*
  type
  - 정의한 타입에 대해 쉽게 참고할 수 있게 이름을 부여
  - 확장이 불가능

  인터페이스
  - 확장 가능 => extends 인터페이스

  type보다는 interface로 선언해서 사용
*/

interface Person {
  name: string;
  age: number;
}

// type Person = {
//   name: string;
//   age: number;
// }

var ej: Person = {
  name: '은지',
  age: 33
}

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string, title: string, done: boolean };
function getTodo(todo: Todo) {

}