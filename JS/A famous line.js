const famousLines = [
    {
        line: "형, 전화 끝어요 지금부터 중요한 이야기 할 거니까.",
        title: "Semantic Error"
    },
    {
        line: "머리론 형 보내줘야 된다는 건 아는데 그럼 이런 말 다 소용없는 거 아는데 " +
            "그런 거 다 알면서도 좋아한다구요 형이... 좋아요 좋아해요",
        title: "Semantic Error"
    },
    {
        line: "I love Complicated",
        title: "Kill Your Darlings"
    },
    {
        line: "First thought, best thought.",
        title: "Kill Your Darlings"
    },
    {
        line: "Some things, once you've loved them, become yours forever and if you try to let them go they circle back and return to you, they become part of who you are or they destroy you",
        title: "Kill Your Darlings"
    },
    {
        line: "But we're not like other people. We love each other in our own way, and we can have the life together that we want.",
        title: "The Imitation Game"
    },
    {
        line: "Sometimes it is the people no one imagines anything of who do the things that no one can imagine.",
        title: "The Imitation Game"
    }
];

const movieLine = document.querySelector('#famousLines span:first-child');
const movieAuthor = document.querySelector('#famousLines span:last-child');

console.log(famousLines[7-1]);

const  famousLines = famousLines [Math.floor(Math.random() * famousLines.length)];

quote.innerText = famousLines.line;
author.innerText = famousLines.author;