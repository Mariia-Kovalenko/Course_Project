"use strict";

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const completeButton = document.getElementById('complete-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonElement  = document.getElementById('answer-buttons');
const headingElement = document.getElementById('heading');


let shuffledQuestions; 
let currentQuestionIndex;
let questionType;

export let professions = [
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
        if(answer.text == 'Так'){
            button.classList.add('btn-yes');
        } else if (answer.text == 'Ні'){
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
        completeButton.innerText = 'Завершити';
        completeButton.classList.remove('hide');
        // startButton.innerText = 'Restart';
        // startButton.classList.remove('hide');
    }
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
    console.log(professions);
    //window.location.href = 'results.html';
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

// function showResults(professions){
//     window.location.href = 'results.html';
//     professions.forEach((profession) => {
//     });

// }

const questions =[
    {
        question: 'Мені подобається бачити візуальний результат своєї роботи',
        clasification: "Visualisation",
        answers: [
            {
                text: 'Так', 
                points: 1,
            },
            {
                text: 'Ні', 
                points: 0,
            }
        ]
    },
    {
        question: 'У мене добре розвинена уява',
        clasification: "Imagination",
        answers: [
            {
                text: 'Так', 
                points: 1,
            },
            {
                text: 'Ні', 
                points: 0,
            }
        ]
    },
    {
        question: 'Мене надихає створення чогось нового',
        clasification: "Creativity",
        answers: [
            {
                text: 'Так', 
                points: 1,
            },
            {
                text: 'Ні', 
                points: 0,
            }
        ]
    },
    {
        question: 'В мене добре виходить вирішувати задачі чи кросворди',
        clasification: "Logic",
        answers: [
            {
                text: 'Так', 
                points: 1,
            },
            {
                text: 'Ні', 
                points: 0,
            }
        ]
    },
    {
        question: 'Я добре знаю математику',
        clasification: "Maths",
        answers: [
            {
                text: 'Так', 
                points: 1,
            },
            {
                text: 'Ні', 
                points: 0,
            }
        ]
    },
    {
        question: 'Мені легко працювати з іншими людьми над одним проектом',
        clasification: "Team",
        answers: [
            {
                text: 'Так', 
                points: 1,
            },
            {
                text: 'Ні', 
                points: 0,
            }
        ]
    },
    {
        question: 'Я легко знаходжу нові знайомства',
        clasification: "Communication",
        answers: [
            {
                text: 'Так', 
                points: 1,
            },
            {
                text: 'Ні', 
                points: 0,
            }
        ]
    },
    {
        question: 'Якщо необхідно вирішити задачу, її потрібно спочатку проаналізувати у загалному вигляді',
        clasification: "Analytics",
        answers: [
            {
                text: 'Так', 
                points: 1,
            },
            {
                text: 'Ні', 
                points: 0,
            }
        ]
    },
    {
        question: 'Люди часто звертаються до мене за порадою, якщо зіштовхуються із проблемами',
        clasification: "Motivation",
        answers: [
            {
                text: 'Так', 
                points: 1,
            },
            {
                text: 'Ні', 
                points: 0,
            }
        ]
    },
    {
        question: 'Я привітний та дружелюбний',
        clasification: "Ethic",
        answers: [
            {
                text: 'Так', 
                points: 1,
            },
            {
                text: 'Ні', 
                points: 0,
            }
        ]
    },
    {
        question: "Я - впевнений користувач комп'ютерними пристроями",
        clasification: "CompTech",
        answers: [
            {
                text: 'Так', 
                points: 1,
            },
            {
                text: 'Ні', 
                points: 0,
            }
        ]
    },
    {
        question: 'Мене важко відволікти, якщо я концентруюсь на завданні',
        clasification: "Focus",
        answers: [
            {
                text: 'Так', 
                points: 1,
            },
            {
                text: 'Ні', 
                points: 0,
            }
        ]
    },
    {
        question: 'Я знаю мову (мови) програмування',
        clasification: "CompSciense",
        answers: [
            {
                text: 'Так', 
                points: 1,
            },
            {
                text: 'Ні', 
                points: 0,
            }
        ]
    },
    {
        question: 'Я можу довго не покидати своє робоче місце, доки не завершу виконувати завдання',
        clasification: "Persistance",
        answers: [
            {
                text: 'Так', 
                points: 1,
            },
            {
                text: 'Ні', 
                points: 0,
            }
        ]
    },
    {
        question: "Я б з радістю тестував(ла) нові комп'ютерні ігри",
        clasification: "Testing",
        answers: [
            {
                text: 'Так', 
                points: 1,
            },
            {
                text: 'Ні', 
                points: 0,
            }
        ]
    },
    {
        question: 'Я можу знайти та виправити чиюсь помилку в роботі',
        clasification: "Troubleshooting",
        answers: [
            {
                text: 'Так', 
                points: 1,
            },
            {
                text: 'Ні', 
                points: 0,
            }
        ]
    },
    {
        question: 'Мені подобається працювати з великими обсягами даних',
        clasification: "BigData",
        answers: [
            {
                text: 'Так', 
                points: 1,
            },
            {
                text: 'Ні', 
                points: 0,
            }
        ]
    },
    {
        question: "Мені подобається розв'язувати нестандартні",
        clasification: "Puzzles",
        answers: [
            {
                text: 'Так', 
                points: 1,
            },
            {
                text: 'Ні', 
                points: 0,
            }
        ]
    },
    {
        question: 'Я добре орієнтуюсь та вмію знаходити потрібну інформацію серед великої кількості іншої',
        clasification: "DataAnaliz",
        answers: [
            {
                text: 'Так', 
                points: 1,
            },
            {
                text: 'Ні', 
                points: 0,
            }
        ]
    },
    {
        question: "Я знайомий(а) з будовою комп'ютера",
        clasification: "CompSystems",
        answers: [
            {
                text: 'Так', 
                points: 1,
            },
            {
                text: 'Ні', 
                points: 0,
            }
        ]
    },
    {
        question: "Я знаю особливості роботи з різними операційними системами",
        clasification: "OperatingSystems",
        answers: [
            {
                text: 'Так', 
                points: 1,
            },
            {
                text: 'Ні', 
                points: 0,
            }
        ]
    },
];

