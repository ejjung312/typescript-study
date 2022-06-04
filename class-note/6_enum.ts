enum Shoes {
    Nike,
    Adidas,
}

var myShoes = Shoes.Adidas;
console.log(myShoes); // 1

enum Shoes2 {
    Nike = '나이키',
    Adidas = '아디디스',
}

var myShoes2 = Shoes2.Adidas;
console.log(myShoes2); // "아디다스"

////////////////////////////////////////////////////////

// enum을 사용한 파라미터 타입 설정
enum Answer {
    Yes = "Y",
    No = "N"
}

function askQuestion(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log('정답입니다.');        
    }

    if (answer === Answer.No) {
        console.log('오답입니다.');
    }
}

askQuestion(Answer.Yes);