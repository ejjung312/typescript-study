/*
 1) 객체 생성자 
 - 함수의 이름을 대문자로 시작
 - 새로운 객체 생성 시 new 키워드 사용
 - 같은 객체 생성자 함수를 사용하는 경우, 특정 함수 또는 값을 재사용 할 수 있는데 바로 프로토타입입니다.
*/
function Person(name, age) {
    this.name = name;
    this.age = age;
}
var zzang1 = new Person('짱구1', 22);

//////////////////////////////////////////////////////////////////
// 2)
class Person {
    constructor(name, age) {
        // 생성자
        console.log('생성 되었습니다.');
        this.name = name;
        this.age = age;
    }
}

var zzang = new Person('짱구', 21);
console.log(zzang);