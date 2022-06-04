var user = { name: 'ej', age: 100 };
var admin = {};
admin.__proto__ = user; // user의 객체 속성을 상속 받음

console.log(admin); // {}
console.log(admin.name); // 'ej'
console.log(admin.age); // 100

admin.role = 'admin';
console.log(admin.role); // 'admin'
console.log(admin); // { role: 'admin' }