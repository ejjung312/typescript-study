// 타입추론

interface Dropdown<T> {
  value: T;
  title: string;
}

var item: Dropdown<string> = {
  value: 'abc',
  title: 'def'
};

//////////////////////////////////////////////

interface Dropdown2<T> {
  value: T;
  title: string;
}

interface DetailedDropDown2<T> extends Dropdown2<T> {
  description: string;
  tag: T;
  /*
  extends로 Dropdown2를 했기 때문에 암묵적으로 value와 title 존재
  value,
  title
  */
}

var detailedItem: DetailedDropDown2<string> = {
  value: 'abc',
  title: 'def',
  description: 'ab',
  tag: 'a'
};

//////////////////////////////////////////////

// Best Common Type - 타입스크립트가 타입을 추론하는 알고리즘
// 배열에 있는 타입들을 유니온 타입으로 지정
var arr = [1, 2, true]; // var arr: (number | boolean)[]

