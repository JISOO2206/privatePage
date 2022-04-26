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
    const clickedClass = "active";
    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
    console.log(h1.className);
    /*
    * "className" or InstanceName를 '변수명'으로 명명한다.
    *
    * 기존 class를 유지하면서 새로운 class를 추가 하고 싶다면,
    * class.add(변수명)를 사용하면 된다.
    * => console.log(변수명)로 확인하면 기존 클래스명 + 추가 클래스명으로 출력된다.
    *
    * 추가한 class를 제거하고 싶다면
    * 1. 먼저 추가한 class가 존재하는지 확인한다. 그게 => classList.contains(변수명)
    * 2. 확인이 됐다면 지우는 방법은 add와 마찬가지로 classList.remove(변수명)으로 사용하면 추가한 변수명이 삭제된다.
    *
    */
}

function handleContentClick(){
    const clickedClass = "active";
    h1.classList.toggle(clickedClass);
    console.log(h1.className);
    /*
        handleTitleClick에서 html class를 추가하는 것과 지우는 것을 알아봤다.
        하지만 것보다 더 간단한 방법은 toggle()를 이용하는 방법이다.
        toggle()은 add()와 remove() 메서드를 한 번에 쓸 수 있는 합쳐진 개념이다.
        코드는 간결할수록 좋다.
     */
}

h1.addEventListener("click", handleContentClick);