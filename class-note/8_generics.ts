function logText2(text) {
    console.log(text);
    return text;
}
logText2(10); // function logText2(text: any): any
logText2('hi');
logText2(true);



function logText3(text: string | number) {
    console.log(text);
    // text. -> 타입 추론이 string과 number 둘다 됨
    return text;
}

const a = logText3('a');
// a.split('') // 타입 추론이 되지 않기 때문에 string API를 쓸 경우 에러 발생



//////////////////////////////////////////////////////
// 제네릭으로 타입 선언
// 함수 호출 시점에 타입을 지정함
function logText<T>(text: T): T {
    console.log(text); 
    return text;
}

const str = logText<string>('hi'); // function logText<string>(text: string): string
str.split(''); // 타입 추론이 string으로 되므로 string API 사용 가능

logText<number>(10); // function logText<number>(text: number): number

const flag = logText<boolean>(true); // function logText<boolean>(text: boolean): boolean



//////////////////////////////////////////////////////
// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown<T> {
    value: T;
    selected: boolean;
}

const obj1: Dropdown<string> = { value: 'zlzl', selected: true };
const obj2: Dropdown<number> = { value: 123, selected: false };



//////////////////////////////////////////////////////
// 제네릭의 타입 제한

// 타입힌트를 주어 length 오류를 해결, 타입을 배열로 제한 => T[]
function logTextLength<T>(text: T[]): T[] {
    console.log(text.length); // 타입추론이 되지 않아 오류 발생
    return text;
}
logTextLength<string>(['hi', 'abc']);


// 정의된 타입 이용하기
interface LengthType {
    length: number;
}

function logTextLength2<T extends LengthType>(text: T): T {
    text.length; // 타입추론이 되지 않아 오류 발생, extends LengthType을 함으로써 오류 해결
    return text;
}

logTextLength2('a'); // 오류 안남
// logTextLength2(10); // 오류남, number는 length API가 없음
logTextLength2({ length: 20 }); // length 속성이 있으므로 오류 안남


// keyof로 제네릭의 타입 제한
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

// 제네릭의 타입의 범위를 줄임
// keyof ShoppingItem 로 인해 name, price, stock만 올 수 있음
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption("name");
getShoppingItemOption("price");
getShoppingItemOption("stock");
// getShoppingItemOption("skill"); // 오류