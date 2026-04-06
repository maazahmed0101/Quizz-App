const questions = [
    {
        question: "What does HTML stand for?",
        option1: "Hyper Text Markup Language",
        option2: "Home Tool Markup Language",
        option3: "Hyperlinks and Text Markup Language",
        correctAnswer: "Hyper Text Markup Language",
    },
    {
        question: "Which HTML element is used for the largest heading?",
        option1: "<h6>",
        option2: "<h1>",
        option3: "<header>",
        correctAnswer: "<h1>",
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        option1: "<br>",
        option2: "<lb>",
        option3: "<break>",
        correctAnswer: "<br>",
    },
    {
        question:
            "Which attribute is used to provide an alternative text for an image?",
        option1: "alt",
        option2: "title",
        option3: "src",
        correctAnswer: "alt",
    },
    {
        question: "What is the correct way to make a checkbox in HTML?",
        option1: "<input type='checkbox'>",
        option2: "<checkbox>",
        option3: "<input type='box'>",
        correctAnswer: "<input type='checkbox'>",
    },
    {
        question: "Which HTML tag is used to create an unordered list?",
        option1: "<ul>",
        option2: "<ol>",
        option3: "<list>",
        correctAnswer: "<ul>",
    },
    {
        question: "What does the <title> element define?",
        option1: "The document's body",
        option2: "The document's title in the browser toolbar",
        option3: "The main heading",
        correctAnswer: "The document's title in the browser toolbar",
    },
    {
        question: "Which tag is used to define a hyperlink in HTML?",
        option1: "<link>",
        option2: "<href>",
        option3: "<a>",
        correctAnswer: "<a>",
    },
    {
        question:
            "What is the correct syntax for adding a background color in HTML?",
        option1: "<body bg='color'>",
        option2: "<body style='background-color: color;'>",
        option3: "<background color='color'>",
        correctAnswer: "<body style='background-color: color;'>",
    },
    {
        question: "How can you make text bold in HTML?",
        option1: "<strong>",
        option2: "<b>",
        option3: "Both <strong> and <b>",
        correctAnswer: "Both <strong> and <b>",
    },
];
let index = 0;
let score = 0;
const inputing = document.querySelector('.inputing')
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
let button = document.querySelector('.button')
const names = document.getElementsByName('input')
let resulNextHtml = document.querySelector('.resulNextHtml')
function next(){
    let body = document.querySelector('body')
   let newHtml = document.createElement('div')
   body.innerHTML = `<h1 class = resulting >your result is : ${score} </h1>
   <button>Start Again</button>`
   
   body.append(newHtml)
}


// let opc1dec = option1.innerHTML = `hi`
// let opc2dec = option2.innerHTML = `hi`
// let opc3dec = option3.innerHTML = `hi`

// if (inputname[i].checked) {
//     console.log(inputname);
//     let inputname = names
// console.log(inputname.value);



function clicking() {

    if (index === questions.length) {
        // function clicking(){
            // return `<a href="result.html"></a>`
            // }
            // Swal.fire({
                //     title: "Done!",
                //     text: `Score: ${score}`,
                //     icon: "success",
                //     background: "#1e1e2f",
                //     color: "#fff",
                //     confirmButtonColor: "#764ba2"
                
                // });
                return  next()
    }


    for (let i = 0; i < names.length; i++) {
        if (names[i].checked) {
            // console.log(names);
            let one = names[i].value
            let correctAnswer = questions[index - 1]['correctAnswer']
            let user = questions[index - 1][`option${one}`]
            let result = '';
            if (user === correctAnswer) {
                score += 10
            }

            console.log(score);

            names[i].checked = false
            console.log(result);

        }
        // let values = names.values
        // console.log(values);

        // button.disabled = false
    }

    // console.log(questions[0]['option1']);

    // for (let i = 0; i < questions.length - 1; i++) {
    inputing.innerText = questions[index]['question']
    option1.innerText = questions[index]['option1']
    option2.innerText = questions[index]['option2']
    option3.innerText = questions[index]['option3']
    // }
    index++
    button.disabled = true;

}
clicking()

function enable() {
    // button.disabled = true;
    button.disabled = true;
    button.disabled = false
}