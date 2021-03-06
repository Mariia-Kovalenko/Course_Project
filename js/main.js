"use strict";

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const completeButton = document.getElementById('complete-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonElement  = document.getElementById('answer-buttons');
const headingElement = document.getElementById('heading');

//----progress bars
const circle = document.querySelectorAll('.progect-ring__circle');
const percentage = document.querySelectorAll('.percentage');
const professionName = document.querySelectorAll('.profession');
const radius = 30;
const circumference = 2* Math.PI * radius;

const againButton = document.getElementById('againButton');
const tomainButton = document.getElementById('toMainButton');
const resultsContainer = document.querySelector('.results__container');
const testContainer = document.querySelector('.test__container');
const headingForTest = document.querySelector('.describ__heading');

let shuffledQuestions; 
let currentQuestionIndex;
let questionType;

let professions = [
    {
        //prof[0]
        profession: "Designer",
        traits: [
            {
                trait: "Creativity",
                points: 0,
            }, 
            {
                trait: "Imagination",
                points: 0,
            },
            {
                trait: "Visualisation",
                points: 0,
            },
            {
                trait: "Communication",
                points: 0,
            }
        ],
        score: 0,
    },
    {
        //prof[1]
        profession: "Business Analyst",
        traits: [
            {
                trait: "Logic",
                points: 0,
            }, 
            {
                trait: "Maths",
                points: 0,
            },
            {
                trait: "Team",
                points: 0,
            },
            {
                trait: "Analytics",
                points: 0,
            },
        ],
        score: 0,
    },
    {
        //prof[2]
        profession: "HR",
        traits: [
            {
                trait: "Communication",
                points: 0,
            }, 
            {
                trait: "CompTech",
                points: 0,
            },
            {
                trait: "Ethic",
                points: 0,
            },
            {
                trait: "Motivation",
                points: 0,
            }
        ],
        score: 0,
    },
    {
        //prof[3]
        profession: "Web Developer",
        traits: [
            {
                trait: "Visualisation",
                points: 0,
            }, 
            {
                trait: "Focus",
                points: 0,
            },
            {
                trait: "Computer tech",
                points: 0,
            },
            {
                trait: "Team",
                points: 0,
            },
        ],
        score: 0,
    },
    {
        profession: "Software developer",
        traits: [
            {
                trait: "CompSciense",
                points: 0,
            },
            {
                trait: "Persistance",
                points: 0,
            },
            {
                trait: "Logic",
                points: 0,
            },
            {
                trait: "Team",
                points: 0,
            },
        ],
        score: 0,
    },
    {
        profession: "QA",
        traits: [
            {
                trait: "Testing",
                points: 0,
            },
            {
                trait: "Troubleshooting",
                points: 0,
            },
            {
                trait: "CompScience",
                points: 0,
            },
            {
                trait: "Team",
                points: 0,
            },
        ],
        score: 0,
    },
    {
        profession: "Database administrator",
        traits: [
            {
                trait: "BigData",
                points: 0,
            },
            {
                trait: "Logic",
                points: 0,
            },
            {
                trait: "CompScience",
                points: 0,
            },
            {
                trait: "Team",
                points: 0,
            },
        ],
        score: 0,
    },
    {
        profession: "Security Manager",
        traits: [
            {
                trait: "Puzzles",
                points: 0,
            },
            {
                trait: "BigData",
                points: 0,
            },
            {
                trait: "DataAnaliz",
                points: 0,
            },
            {
                trait: "Focus",
                points: 0,
            },
        ],
        score: 0,
    },
    {
        profession: "Embedded Engineer",
        traits: [
            {
                trait: "CompSyst",
                points: 0,
            },
            {
                trait: "OperatingSystems",
                points: 0,
            },
            {
                trait: "Focus",
                points: 0,
            },
            {
                trait: "CompScience",
                points: 0,
            },
        ],
        score: 0,
    },

];



if(startButton){
    startButton.addEventListener('click', startTest);
}
if(nextButton){
    nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
    });
}
if(completeButton){
    completeButton.addEventListener('click', calculatePoints);
}
if(againButton){
    againButton.addEventListener('click', restart);
}
if(toMainButton){
    // toMainButton.addEventListener('click', window.location.href = 'index.html');
}


function startTest(){
    console.log('Started');
    startButton.classList.add('hide');
    headingElement.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question){
    questionElement.innerText = question.question;
    
    //to pass the question type
    questionType = question.clasification;
    // console.log(`Question type is ${questionType}`);

    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;

        button.classList.add('btn');
        if(answer.text == '??????'){
            button.classList.add('btn-yes');
        } else if (answer.text == '????'){
            button.classList.add('btn-no');
        }
        if(answer.points){
            button.dataset.points = answer.points;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonElement.appendChild(button);
    });
}

function resetState(){
    nextButton.classList.add('hide');
    while(answerButtonElement.firstChild){
        answerButtonElement.removeChild(answerButtonElement.firstChild);
    }
}

function selectAnswer(e){
    const selectButton = e.target;

    let points = +selectButton.dataset.points;
    console.log(`Question type is ${questionType}`);

    completeCareer(questionType, points);
    
    if(shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide');
    }else{
        completeButton.innerText = '??????????????????';
        completeButton.classList.remove('hide');
        // startButton.innerText = 'Restart';
        // startButton.classList.remove('hide');
    }
}

function restart(){
    for (let i=0; i< questions.length; i++){
        questions[i].score = 0;
    }
    document.location.reload();
}

function completeCareer(qType, points){
    
    switch(qType){
        case "Creativity":
            if(points > 0){
                //designer creativity
                professions[0].traits[0].points += 40;
                console.log(`Adding to ${professions[0].traits[0].trait}.`);
            }
            break;
        case "Imagination":
            if(points > 0){
                
                //designer imagination
                professions[0].traits[1].points += 30;
                console.log(`Adding to ${professions[0].traits[1].trait}.`);
            }
            break;
        case "Visualisation":
            if(points > 0){
                
                //designer visualisation
                professions[0].traits[2].points += 20;
                console.log(`Adding to ${professions[0].traits[2].trait}.`);
            
                //web-dev visualisation
                professions[3].traits[0].points += 35;
                console.log(`Adding to ${professions[3].traits[0].trait}.`);
            }
            break;
        case "Logic":
            if(points > 0){
                
                //analyst logic
                professions[1].traits[0].points += 40;
                console.log(`Adding to ${professions[1].traits[0].trait}.`);

                //software-dev
                professions[4].traits[2].points += 30;
                console.log(`Adding to ${professions[4].traits[2].trait}.`);

                //DB admin
                professions[6].traits[1].points += 25;
                console.log(`Adding to ${professions[6].traits[1].trait}.`);
            }
            break;
        case "Maths":
            if(points > 0){

                //analyst maths
                professions[1].traits[1].points += 30;
                console.log(`Adding to ${professions[1].traits[1].trait}.`);
            }
            break;
        case "Team":
            if(points > 0){

                //analyst team
                professions[1].traits[2].points += 10;
                console.log(`Adding to ${professions[1].traits[2].trait}.`);

                //web-dev
                professions[3].traits[3].points += 10;
                console.log(`Adding to ${professions[3].traits[3].trait}.`);

                //software-dev
                professions[4].traits[3].points += 20;
                console.log(`Adding to ${professions[4].traits[3].trait}.`);

                //QA
                professions[5].traits[3].points += 10;
                console.log(`Adding to ${professions[5].traits[3].trait}.`);

                //DB admin
                professions[6].traits[3].points += 10;
            }
            break;
        case "Communication":
            if(points > 0){

                //HR communication
                professions[2].traits[0].points += 50;

                //designer communication
                professions[0].traits[3].points += 35;
                console.log(`Adding to ${professions[2].traits[0].trait}.`);
            }
            break;
        case "Analytics":
            if(points > 0){

                //analyst
                professions[1].traits[3].points += 20;
            }
            break;
        case "Motivation":
            if(points > 0){
                
                //HR 
                professions[2].traits[3].points += 30;
            }
            break;
        case "Ethic":
            if(points > 0){

                //HR 
                professions[2].traits[2].points += 25;
            }
            break;
        case "CompTech":
            if(points > 0){

                //HR 
                professions[2].traits[1].points += 10;

                //web-dev
                professions[3].traits[2].points += 30;
            }
            break;
        case "Focus":
            if(points > 0){
                
                //web-dev
                professions[3].traits[1].points += 25;

                //security
                professions[7].traits[3].points += 10;

                //embedded
                professions[8].traits[2].points += 10;
            }
            break;
        case "CompSciense":
            if(points > 0){
                
                //software-dev
                professions[4].traits[0].points += 50;

                //QA
                professions[5].traits[2].points += 20;

                //DB admin
                professions[6].traits[2].points += 40;

                //embedded
                professions[8].traits[3].points += 25;
            }
            break;
        case "Persistance":
            if(points > 0){

                //software-dev
                professions[4].traits[1].points += 10;
            }
            break;
        case "Testing":
            if(points > 0){
                
                //QA
                professions[5].traits[0].points += 40;
            }
            break;
        case "Troubleshooting":
            if(points > 0){
                //QA
                professions[5].traits[1].points += 30;
            }
            break;
        case "BigData":
            if(points > 0){
                
                //DB admin
                professions[6].traits[0].points += 35;

                //security
                professions[7].traits[1].points += 30;
            }
            break;
        case "Puzzles":
            if(points > 0){
                
                //security
                professions[7].traits[0].points += 40;
            }
            break;
        case "DataAnliz":
            if(points > 0){
                
                //security
                professions[7].traits[2].points += 20;
            }
            break;
        case "CompSystems":
            if(points > 0){
                
                //embedded
                professions[8].traits[0].points += 35;
            }
            break;
        case "OperatingSystems":
            if(points > 0){
                //embedded
                professions[8].traits[0].points += 30;
            }
            break;
    }

}


///--- functions for showing results

function drawCircles(){
    for(let i = 0; i < circle.length; i++){
        //console.log(circle.item(i));
        circle.item(i).style.strokeDasharray = `${circumference} ${circumference}`;
        circle.item(i).style.strokeDashoffset = circumference;
    }
}

function setProgress(index, percent){
    const offset = circumference - percent / 100 * circumference;
    circle.item(index).style.strokeDashoffset = offset;
    percentage.item(index).innerHTML = `${percent}%`;
}

function showResults(){
    for (let i = 0; i < 6; i++){
        setProgress(i, professions[i].score);
        professionName.item(i).innerHTML = professions[i].profession;
    }
}


// ----- calculationg points and showing results

function calculatePoints(){
    professions.forEach((profession) =>{
        let sum = 0;
        for(let i = 0; i< profession.traits.length; i++){
            sum += profession.traits[i].points;
        }
        profession.score += sum;
        console.log(`Points for profession ${profession.profession}: ${profession.score}`);
    });
    professions = professions.sort(compare);
    testContainer.classList.add('hide');
    resultsContainer.classList.remove('hide');
    headingForTest.innerText = '???????? ????????????????????';
    // console.log(professions);
    drawCircles();
    showResults();
}



function sortProfessions(){
    let maxScore = professions[0].score;
    // let yourProfession = "";
    professions.forEach((item)=>{
        if(item.score > maxScore) {
            maxScore = item.score;
        }
        //yourProfession = item.profession;
    });
    //console.log(`Your profession is ${yourProfession} with points ${maxScore}`);
}

function compare(a, b){
    if (a.score > b.score) return -1;
    if (a.score < b.score) return 1;
    return 0;
}


const questions =[
    {
        question: '???????? ?????????????????????? ???????????? ???????????????????? ?????????????????? ?????????? ????????????',
        clasification: "Visualisation",
        answers: [
            {
                text: '??????', 
                points: 1,
            },
            {
                text: '????', 
                points: 0,
            }
        ]
    },
    {
        question: '?? ???????? ?????????? ?????????????????? ????????',
        clasification: "Imagination",
        answers: [
            {
                text: '??????', 
                points: 1,
            },
            {
                text: '????', 
                points: 0,
            }
        ]
    },
    {
        question: '???????? ?????????????? ?????????????????? ???????????? ????????????',
        clasification: "Creativity",
        answers: [
            {
                text: '??????', 
                points: 1,
            },
            {
                text: '????', 
                points: 0,
            }
        ]
    },
    {
        question: '?? ???????? ?????????? ???????????????? ???????????????????? ???????????? ???? ??????????????????',
        clasification: "Logic",
        answers: [
            {
                text: '??????', 
                points: 1,
            },
            {
                text: '????', 
                points: 0,
            }
        ]
    },
    {
        question: '?? ?????????? ???????? ????????????????????',
        clasification: "Maths",
        answers: [
            {
                text: '??????', 
                points: 1,
            },
            {
                text: '????', 
                points: 0,
            }
        ]
    },
    {
        question: '???????? ?????????? ?????????????????? ?? ???????????? ???????????? ?????? ?????????? ????????????????',
        clasification: "Team",
        answers: [
            {
                text: '??????', 
                points: 1,
            },
            {
                text: '????', 
                points: 0,
            }
        ]
    },
    {
        question: '?? ?????????? ???????????????? ???????? ????????????????????',
        clasification: "Communication",
        answers: [
            {
                text: '??????', 
                points: 1,
            },
            {
                text: '????', 
                points: 0,
            }
        ]
    },
    {
        question: '???????? ?????????????????? ???????????????? ????????????, ???? ???????????????? ???????????????? ???????????????????????????? ?? ?????????????????? ??????????????',
        clasification: "Analytics",
        answers: [
            {
                text: '??????', 
                points: 1,
            },
            {
                text: '????', 
                points: 0,
            }
        ]
    },
    {
        question: '???????? ?????????? ?????????????????????? ???? ???????? ???? ??????????????, ???????? ?????????????????????????? ???? ????????????????????',
        clasification: "Motivation",
        answers: [
            {
                text: '??????', 
                points: 1,
            },
            {
                text: '????', 
                points: 0,
            }
        ]
    },
    {
        question: '?? ?????????????????? ???? ??????????????????????',
        clasification: "Ethic",
        answers: [
            {
                text: '??????', 
                points: 1,
            },
            {
                text: '????', 
                points: 0,
            }
        ]
    },
    {
        question: "?? - ?????????????????? ???????????????????? ????????'???????????????? ????????????????????",
        clasification: "CompTech",
        answers: [
            {
                text: '??????', 
                points: 1,
            },
            {
                text: '????', 
                points: 0,
            }
        ]
    },
    {
        question: '???????? ?????????? ????????????????????, ???????? ?? ???????????????????????? ???? ????????????????',
        clasification: "Focus",
        answers: [
            {
                text: '??????', 
                points: 1,
            },
            {
                text: '????', 
                points: 0,
            }
        ]
    },
    {
        question: '?? ???????? ???????? (????????) ??????????????????????????',
        clasification: "CompSciense",
        answers: [
            {
                text: '??????', 
                points: 1,
            },
            {
                text: '????', 
                points: 0,
            }
        ]
    },
    {
        question: '?? ???????? ?????????? ???? ???????????????? ???????? ???????????? ??????????, ???????? ???? ?????????????? ???????????????????? ????????????????',
        clasification: "Persistance",
        answers: [
            {
                text: '??????', 
                points: 1,
            },
            {
                text: '????', 
                points: 0,
            }
        ]
    },
    {
        question: "?? ?? ?? ?????????????? ????????????????(????) ???????? ????????'???????????? ????????",
        clasification: "Testing",
        answers: [
            {
                text: '??????', 
                points: 1,
            },
            {
                text: '????', 
                points: 0,
            }
        ]
    },
    {
        question: '?? ???????? ???????????? ???? ?????????????????? ?????????? ?????????????? ?? ????????????',
        clasification: "Troubleshooting",
        answers: [
            {
                text: '??????', 
                points: 1,
            },
            {
                text: '????', 
                points: 0,
            }
        ]
    },
    {
        question: '???????? ?????????????????????? ?????????????????? ?? ???????????????? ???????????????? ??????????',
        clasification: "BigData",
        answers: [
            {
                text: '??????', 
                points: 1,
            },
            {
                text: '????', 
                points: 0,
            }
        ]
    },
    {
        question: "???????? ?????????????????????? ????????'?????????????? ????????????????????????",
        clasification: "Puzzles",
        answers: [
            {
                text: '??????', 
                points: 1,
            },
            {
                text: '????', 
                points: 0,
            }
        ]
    },
    {
        question: '?? ?????????? ???????????????????? ???? ???????? ?????????????????? ???????????????? ???????????????????? ?????????? ?????????????? ?????????????????? ??????????',
        clasification: "DataAnaliz",
        answers: [
            {
                text: '??????', 
                points: 1,
            },
            {
                text: '????', 
                points: 0,
            }
        ]
    },
    {
        question: "?? ????????????????(??) ?? ?????????????? ????????'??????????",
        clasification: "CompSystems",
        answers: [
            {
                text: '??????', 
                points: 1,
            },
            {
                text: '????', 
                points: 0,
            }
        ]
    },
    {
        question: "?? ???????? ?????????????????????? ???????????? ?? ?????????????? ???????????????????????? ??????????????????",
        clasification: "OperatingSystems",
        answers: [
            {
                text: '??????', 
                points: 1,
            },
            {
                text: '????', 
                points: 0,
            }
        ]
    },
];

