const famousLines = [
    {
        line: "하지마, 고백",
        title: "Semantic Error"
    },
    {
        line: "좋아하는 거 열심히 해보자, 우리",
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

const movieLineSpace = document.querySelector('#famousLines span:first-child');
const movieAuthor = document.querySelector('#famousLines span:last-child');
const todayFamousLine = famousLines [Math.floor(Math.random() * famousLines.length)];

movieLineSpace.innerText = todayFamousLine.line;
movieAuthor.innerText = todayFamousLine.title;