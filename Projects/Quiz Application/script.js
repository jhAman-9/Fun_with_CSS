const start_quiz = document.querySelector(".Start");
const info_box = document.querySelector(".info-box");
const continue_quiz = document.querySelector(".continue");
const quiz_box = document.querySelector(".quiz-box");
const result_box = document.querySelector(".result-box");
const option_list = document.querySelector(".option-list");
const time_line = document.querySelector("header .time-line");
const timeText = document.querySelector(".timer .time-left-txt");
const timeCount = document.querySelector(".timer .time-sec");
const next_btn = document.querySelector("footer .next-btn");
const retart_quiz = document.querySelector(".buttons .replay");
const exit_quiz = document.querySelector(".buttons .quit");
// OnClick Next button These Happens
let userScore = 0;
let widthValue = 0
let ques_cnt = 0;
let ques_no = 1;
let timeVal = 15;

let counter;
let counterLine;
let ques_count = 0;
let tickIconTag = '<div class="icon tick"> <i class="fa-solid fa-check"></i> </div>';
let crossIconTag = '<div class="icon cross"> <i class="fa-solid fa-circle-xmark"></i> </div>';


start_quiz.onclick=()=>{
    info_box.classList.add("activeInfo");
}

exit_quiz.onclick=()=>{
    info_box.classList.remove("activeInfo");
}

// When Click On Continue
continue_quiz.onclick=()=>{
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
    startTimer(15);
    startTimerLine(0);
    questionCounter(1);
}

function showQuestions(index){
    const ques_text = document.querySelector(".ques-text");

    let ques_tag = `<span> ${index+1}. ${questions[index].question} </span>`;
    ques_text.innerHTML = ques_tag;

    let opt_list = `<div class="option"><span> ${questions[index].option[0]} </span></div> 
    <div class="option"><span> ${questions[index].option[1]} </span></div> 
    <div class="option"><span> ${ questions[index].option[2]} </span></div>
    <div class="option"><span>${questions[index].option[3]}  </span></div>`

    option_list.innerHTML = opt_list;

    const option = option_list.querySelector(".option");
    
    // Travering the options
    for(let i=0; i<option.length; i++){
        option[i].setAttribute('onclick', "optionSelected(this)")
    }
}


function startTimer(time){
    counter = setInterval(timer,1000);
    function timer(){
            timeCount.textContent = time;
            time--;
            if(time < 9){
                let addZero = timeCount.textContent;
                timeCount.textContent = '0' + addZero;
            }

            if(time < 0){
                clearInterval(counter);
                timeText.textContent  = "Time off";
                const allOptions = option_list.children.length;        // opt length
                let correctAns = questions[ques_count].answer;       // correct answer
                for(let i=0; i<allOptions; i++){
                    if(option_list.children[i].textContent == correctAns){
                        option_list.children[i].setAttribute("class","option Correct");
                        option_list.children[i].insertAdjacentHTML("beforeend",tickIconTag);
                        console.log("time off : auto selected correct answer");
                    }
                }

                for(let i = 0; i>allOptions; i++){
                    option_list.children[i].classList.add("disabled");
                }

                next_btn.classList.add("show");
            }
    }
}


function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    const allOptions = option_list.children.length;
    let correctAns = questions[ques_count].answer;
    if(userAns == correctAns){
        userScore += 1;
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIconTag);
    }
    else{
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend",crossIconTag);
        for(let i=0; i<allOptions; i++){
            if(option_list.children[i].textContent == correctAns){
                option_list.children[i].setAttribute("class","option Correct");
                option_list.children[i].insertAdjacentHTML("beforeend",tickIconTag);
                console.log("time off : auto select correct answer");
            }
        }
    }

    for(let i = 0; i>allOptions; i++){
        option_list.children[i].classList.add("disabled");
    }
    next_btn.classList.add("show")
}

function startTimerLine(time){
    counterLine = setInterval(()=>{
        time += 1;
        time_line.style.width = time+"px";
        if(time > 549){
            clearInterval(counterLine);
        }
    },29)
}

const question_counter = document.querySelector("footer .total-ques");
function questionCounter(index){
    let totalQuestionTag = `<span> <p> ${index} </p> of <p> ${questions.length} </p> Questions </span>`;
    question_counter.innerHTML = totalQuestionTag;
}



next_btn.onclick=()=>{
    if(ques_cnt < questions.length - 1){
        ques_cnt++;
        ques_no++;
        showQuestions(ques_cnt);
        questionCounter(ques_no)
        clearInterval(counter)
        clearInterval(counterLine)
        startTimer(15);
        startTimerLine(0);
        timeText.textContent = "Time Left"
        next_btn.classList.remove("show");
    }
    else{
        clearInterval(counter)
        clearInterval(counterLine)
        showResult();
    }
}

const showResult = ()=>{
    info_box.classList.remove('activeInfo');
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add('activeResult');

    const scoreText = document.querySelector(".score-txt");

    if(userScore > 5){
        const scoreTag = `<span> and congrats 👍, You Play WELL! <p> ${userScore} </p> ${questions.length} </p> </span>`;
        scoreText.innerHTML = scoreTag;
    }
    if(userScore > 3){
        const scoreTag = `<span> and Nice Play 😊, <p> ${userScore} </p> ${questions.length} </p> </span>`;
        scoreText.innerHTML = scoreTag;
    }
    if(userScore < 1){
        const scoreTag = `<span> You need to work hard,<p> ${userScore} </p> ${questions.length} </p> </span>`;
        scoreText.innerHTML = scoreTag;
    }  
}


// Restart Quiz
retart_quiz.onclick = () =>{
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult");
    userScore = 0; 
    widthValue = 0;
    ques_cnt = 0;
    ques_no = 1;
    timeVal = 15;
    showQuestions(ques_cnt);
    questionCounter(ques_no)
    clearInterval(counter)
    clearInterval(counterLine)
    startTimer(15);
    startTimerLine(0);
    timeText.textContent = "Time Left"
    next_btn.classList.remove("show");
}

// Quit Quiz
exit_quiz.onclick = ()=> {
    window.location.reload();
}


