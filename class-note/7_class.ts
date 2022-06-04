/*
    클래스 최상단에 멤버변수를 정의해야 함
*/
class Person {
    private name: string;
    public age: number;
    protected skill: string;
    readonly log: string; // 읽기만 가능한 속성

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}