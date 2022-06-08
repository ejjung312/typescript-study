interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return { name: 'Tody', age: 34, skill: 'nodejs' };
}

var tony = introduce(); // function introduce(): Developer | Person
console.log(tony.name);  // 공통된 타입이므로 정상 동작
// console.log(tony.skill); // 에러 - 공통된 타입만 접근이 가능함

if ((tony as Developer).skill) { // 타입을 단언하면서 skill 속성에 접근
    console.log((tony as Developer).skill);
} else if ((tony as Person).age) {
    console.log((tony as Person).age);
}

// 타입 가드 정의
// target is Developer => target이 Developer 타입인지
function isDeveloper(target: Developer | Person): target is Developer  {
    return (target as Developer).skill !== undefined;
}

// 19 ~ 23줄이 아래와 같이 간략해짐
if (isDeveloper(tony)) {
    tony.skill;
} else {
    tony.age;
}