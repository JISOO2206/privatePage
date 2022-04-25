const h1 = document.querySelector("h1");

function handleMouseEnter() {
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue"){
        newColor = "tomato";
    }
    else {
        newColor = "blue";
    }
    h1.style.color = newColor;
    /* 이 함수의 궁금증 : let 변수로만 선언해서 사용해도 문제 없이 작동한다. 분리해줘야 하는 이유가 있을까?
    *  ->  찾아본 결과 의미상의로 차이가 확연하게 분리되기 때문에 나누어 주는 것이 좋다고 한다.
    *       그래서 단순 복사값이자 getter로 사용되는 건 const 변수로 선언해주고,
    *       if/else 문안에서 변경될 수 있는(setter) 변수는 let으로 선언해주는 것.
    * */
}

function handleTitleClick() {
    const clickedClass = "active title-font";
    if(h1.className === clickedClass){
        h1.className = "";
    } else {
        h1.className = clickedClass
    }
    console.log(h1.className);
}

h1.addEventListener("click", handleTitleClick);