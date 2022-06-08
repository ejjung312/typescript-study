interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 1) Pick 타입
/* 
  Product 의 일부 속성만 사용
  Pick<Product, 'id' | 'name' | 'price'>
  Product의 속성 중 id, name, price만 뽑아서 사용
*/
function displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>) {

}



// 2) Partial 타입
// 특정 타입의 부분 집합을 만족하는 타입을 정의
// 모든 속성을 optional하게 바꿈
/*
interface Address {
  email?: string;
  address?: string;
}
*/
interface Address {
  email: string;
  address: string;
}

type MayHaveEmail = Partial<Address>;
const me: MayHaveEmail = {}; // 가능
const you: MayHaveEmail = { email: "aaa@adsf.com" }; // 가능
const all: MayHaveEmail = { email: "bbb@asdf.com", address: "asdfasdf" };



// 3) Omit 타입
// 특정 타입에서 지정된 속성만 제거한 타입을 정의
interface AddressBook {
  name: string;
  phone: number;
  address: string;
  company: string;
}

const phoneBook: Omit<AddressBook, 'address'> = {
  name: '재택근무',
  phone: 123123123,
  company: '내 방'
};

const chingtao: Omit<AddressBook, 'address' | 'company'> = {
  name: '중국집',
  phone: 123123123123,
};