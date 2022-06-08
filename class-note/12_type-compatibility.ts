// 인터페이스
interface Developer1 {
    name: string;
    skill: string;
}

interface Person1 {
    name: string;
}

class Person2{
    name: string;
}

var developer: Developer1;
var person: Person1;

// developer = person; // 속성이 더 많은 객체에는 할당이 안됨 => 호환 안됨
person = developer; // 속성이 더 적은 객체에는 할당이 됨 -> 호환
// developer = new Person2(); // class로 선언된 객체도 할당이 안됨, developer의 속성이 더 많기 때문
                              // class나 interface 같이 타입이 맞지 않아도 되며, class나 interface의 내부적으로 존재하는 속성과 타입을 비교



// 함수
var add = function (a: number) {
    // ...
};
var sum = function (a: number, b: number) {
    // ...
};

sum = add; // 호환 됨
// add = sum; // 호환 안됨



// 제네릭
interface Empty<T> {
    // ...
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;

interface NotEmpty<T> {
    data: T;
}
var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;
// notEmpty1 = notEmpty2; // 타입의 속성이 달라지기 때문에 호환되지 않음
// notEmpty2 = notEmpty1; // 타입의 속성이 달라지기 때문에 호환되지 않음



// enum
// 이넘 타입은 number 타입과 호환되지만 이넘 타입끼리는 호환되지 않습니다.
enum Status { Ready, Waiting };
enum Color { Red, Blue, Green };

let status1 = Status.Ready;
// status1 = Color.Green;  // Error

let status2: number = Status.Waiting;
status2 = Color.Blue;