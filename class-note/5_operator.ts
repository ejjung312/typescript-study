/* 유니온 타입
- 하나의 타입 이상을 쓸 수 있게
*/
var seho: string | number | boolean;
function logMessage(value: string | number) {
    // console.log(value);

    // 타입가드 - 특정 타입으로 타입의 범위를 좁혀나가는(필터링 하는) 과정
    if (typeof value === 'number') {
        // 타입 추론이 가능
        // number의 API 속성이 보여짐
        value.toLocaleString();
    }

    if (typeof value === 'string') {
        value.toString();
    }

    throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);



interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeone(someone: Developer | Person) {
    // 공통된 속성만 접근이 가능
    someone.name;
    // someone.skill; // 오류남
    // someone.age; // 오류남
}
askSomeone({ name: '디벨로퍼', skill: '웹 개발' });
askSomeone({ name: 'ejej', age: 40 });


///////////////////////////////////////////////////////////////////////////////

// 인터섹션 타입

var ejej: string | number | boolean;
var capt: string & number & boolean;

function askSomeone2(someone: Developer & Person) {
    // 전체 속성 접근이 가능
    someone.name;
    someone.skill;
    someone.age;
}
// 오류 - 모든 속성을 다 정의해야 함
// askSomeone2({ name: '디벨로퍼', skill: '웹 개발' });
// askSomeone2({ name: 'ejej', age: 40 });

// 정상동작
askSomeone2({ name: '디벨로퍼', skill: '웹 개발', age: 40 });