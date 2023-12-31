const quizData = [
    {
        question: "Sizda 1 ta olma va 1 kg go`sht bor olmaning og`irligi 1000gr ikkalasini o`rta arifmetigi nechiga teng ?",
        a: "1000",
        b: "1100",
        c: "2000",
        d: "1200",
        correct: "a",   
    },
    {
        question: "Yo’llari bor, yurib bo’lmaydi, yerlari bor – ekib bo’lmaydi, yam-yashil o’tloq bor – yulishni iloji yo’q, dengiz, daryo ko’llari bor, ammo suvi yo’q.?",
        a: "Rasm",
        b: "Xarita",
        c: "Oy",
        d: "Tush",
        correct: "b",
    },
    {
        question: "Yerdan osonlikcha ko’tarish mumkin, lekin uni uzoqqa otib bo’lmaydi. Bu nima?",
        a: "Barg",
        b: "Qush pati",
        c: "Tosh",
        d: "Paxta",
        correct: "b",
    },
    {
        question: "Kichkina, kulranggina, filga o’xshaydi. ?",
        a: "Filning bolasi.",
        b: "Shaxmat donasi",
        c: " tog`ri javob yo`q",
        d: " fil rasmi ",
        correct: "a"
    }, 
    {

        question: "Misr ehromlarining eng kattasi qaysi ?",
        a: "Xufu",
        b: "Sorkafak",
        c: " Menkuara",
        d: "Xafra",
        correct: "a"
    }, 
    {

        question: "Js da nechta Data type bor ?",
        a: "7",
        b: "6",
        c: " 8",
        d: "9",
        correct: "c"
    }, 
    {

        question: "O`zbek Alifbosida nechtaharf mavjud ?",
        a: "30",
        b: "28",
        c: " 29",
        d: "27",
        correct: "c"
    }
    , 
    {

        question: "Har bir tejab qolingan pul ishlab topilgan pul bilan barobar bu jumlalar kimga tegishli?",
        a: "Benjimin franklin ",
        b: "Mag`rur Tarkvinniy",
        c: "Tom Kruz",
        d: "Yosir Arofat",
        correct: "a"
    }
    , 
    {

        question: "Inson tanasida nechta suyak bo`lda ?",
        a: "270 dan ortiq",
        b: "206 dan ortiq",
        c: "500 ta",
        d: "250 ta",
        correct: "b"
    }, 
    {

        question: "O`zbekiston Respusublikasi bayrog`ining standart o`lchamini toping ?",
        a: "Uzunligi : 250 sm, Kengligi 140sm",
        b: "Uzunligi : 200 sm, Kengligi 140sm",
        c: " Uzunligi : 250 sm, Kengligi 125sm",
        d: "Uzunligi : 250 sm, Kengligi 135sm",
        correct: "c"
    }
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score} / ${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})