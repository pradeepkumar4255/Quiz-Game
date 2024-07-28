const quizdata = [
    {
    question: 'What is the smallest country in the world with an area of only 0.49 square kilometres?',
    options: [' Monaco', ' Vatican','Andorra'],
    answer: ' Vatican'
},
{
    question: 'What is the second-largest country in the world after Russia?',
    options: ['China','USA','Canada'],
    answer: 'Canada'
},
{
    question: 'Which of the following is a landlocked country, meaning it is not bordered by the sea or ocean?',
    options: ['Kazakhstan','Madagascar','Turkey'],
    answer: 'Kazakhstan'
},
{
    question: ' Which of the following countries is not in Central America?',
    options: ['Cuba', ' Mexico', 'Uruguay'],
    answer: 'Uruguay'
},
{
    question: 'Which of the following countries has the largest Muslim population in the world?',
    options: [' Saudi Arabia', 'Indonesia', ' Iran'],
    answer: 'Indonesia'
},


    ];

    let currentquestion = 0;
    let marks = 0;
    let timeleft=90 ;
    const timer=document.getElementById('time');
    const timeinterval=setInterval(function(){
        timeleft--;
        timer.textContent=timeleft;

        if (timeleft<=0){
            clearInterval(timeinterval);
            alert('time is over');
        }
    },500);

    const lenght = quizdata.length;
    // console.log(lenght);

    // console.log(quizdata.length);
    function loadquestion() {
        const question_conatiner = document.getElementById('question_conatiner');
        const option_container = document.getElementById('option_container');
        const number = document.getElementById('number');

        question_conatiner.innerHTML = quizdata[currentquestion].question;

        option_container.innerHTML = '';
        quizdata[currentquestion].options.forEach(option => {
            const button = document.createElement("button");
            button.innerText = option;
            button.addEventListener('click', () => {
                button.style.backgroundColor = 'rgb(63, 197, 241)';
                button.style.color = 'white';
            })
            button.addEventListener('click', () => selectanswer(option));
            option_container.appendChild(button);
        })

        number.innerHTML = `${[currentquestion+1]} / ${lenght}`;

       
    }

    function selectanswer(selectedoption) {
        const answer = quizdata[currentquestion].answer;

        if (selectedoption === answer) {

            display.innerHTML = selectedoption + ': <h4>your answer is correct</h4>';
            marks++
            const mark = document.getElementById('marks').innerHTML= `${marks} / 5`;
        } else {

            display.innerHTML = selectedoption + ':<h4> answer is wrong </h4> <br> The correct Answer is :' + answer;
           
        }
        const answerButtons = document.querySelectorAll('#option_container button');
answerButtons.forEach(button => {
    button.disabled = true;
});

        currentquestion++;
    }



    function nextquestion() {

       
        display.innerHTML = '';
        if (currentquestion < quizdata.length) {
            loadquestion();
        } else {
            submitanswer();
        }
    }

    function submitanswer() {
        const printscore = document.getElementById('result');
        printscore.innerhtml=`<h4> your total marks is ${score} out of 5 </h4>`;

        // alert('your total marks is = ', score);
    }

    loadquestion();