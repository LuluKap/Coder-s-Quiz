generateBtn = document.querySelector("#start");

function startQuiz(){
    

}

generateBtn.addEventListener("click", startQuiz);




let questions = [
    {
        number: 1, 
        question: "What does HTML stand for?",
        choices: 
        ["Hyper Text Markup Language", 
        "Hyper Teen Madeup  Language", 
        "Hard Trained Machine Language", 
        "Hybrid Text Media Language"],
        answer: "Hyper Text Markup Language",
        },
    {  
        number: 2,
        question: "What does CSS stand for?",
        choices: 
        ["Cascading Style Sheet", 
        "Creating Style Sheet", 
        "Creative Styles Sheet", 
        "Crazy Super Styles"],
        answer: "Cascading Style Sheet",
        },  
    {
        number: 3,
        question: "What does JS stand for?",
        choices:
        ["Jar Script",
        "Jello Store",
        "Javascript",
        "JustSimple"],
        answer: "Javascript",
        },
    {
        number: 4,
        question: "What should you put in the <head> tag?",
        choices:
        ["<title>",
        "<body>",
        "<aisde>",
        "<p>"],
        answer: "<title>",
        },
    {
        number: 5,
        question: "What tag is used to define an image?",
        choices:
        ["<p>",
        "<div>",
        "<img>",
        "<h1>"],
        answer: "<img>",
        },
    ]