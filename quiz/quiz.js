// ================================
// NGÂN HÀNG CÂU HỎI
// ================================

// Câu 1 luôn cố định và không tính điểm
const introductionQuestion = {
    question: "Bạn biết đến trang website này qua đâu?",
    answers: [
        "Facebook",
        "Zalo",
        "Bạn bè giới thiệu",
        "Website",
        "Khác"
    ],
    scoring: false
};


// ================================
// 20 CÂU HỎI ĐÁNH GIÁ
// ================================

const questionBank = [

    {
        question: "Bạn có muốn tiếp tục sử dụng website này không?",
        answers: [
            "Chắc chắn có",
            "Có",
            "Chưa quyết định",
            "Không",
            "Chắc chắn không"
        ]
    },

    {
        question: "Bạn đánh giá chất lượng website này như thế nào?",
        answers: [
            "Rất tốt",
            "Tốt",
            "Bình thường",
            "Chưa tốt",
            "Rất kém"
        ]
    },

    {
        question: "Bạn đánh giá mức độ hài lòng với website như thế nào?",
        answers: [
            "Rất hài lòng",
            "Hài lòng",
            "Bình thường",
            "Không hài lòng",
            "Rất không hài lòng"
        ]
    },

    {
        question: "Bạn có dễ dàng tìm được nội dung mình muốn trên website không?",
        answers: [
            "Rất dễ",
            "Dễ",
            "Bình thường",
            "Khó",
            "Rất khó"
        ]
    },

    {
        question: "Bạn đánh giá giao diện website như thế nào?",
        answers: [
            "Rất đẹp",
            "Đẹp",
            "Bình thường",
            "Chưa đẹp",
            "Rất chưa đẹp"
        ]
    },

    {
        question: "Bạn cảm thấy nội dung trên website có hữu ích không?",
        answers: [
            "Rất hữu ích",
            "Hữu ích",
            "Bình thường",
            "Ít hữu ích",
            "Không hữu ích"
        ]
    },

    {
        question: "Bạn cảm thấy nội dung trên website có dễ hiểu không?",
        answers: [
            "Rất dễ hiểu",
            "Dễ hiểu",
            "Bình thường",
            "Khó hiểu",
            "Rất khó hiểu"
        ]
    },

    {
        question: "Bạn có cảm thấy website đáng tin cậy không?",
        answers: [
            "Rất đáng tin cậy",
            "Đáng tin cậy",
            "Bình thường",
            "Ít đáng tin cậy",
            "Không đáng tin cậy"
        ]
    },

    {
        question: "Bạn có muốn giới thiệu website này cho người khác không?",
        answers: [
            "Chắc chắn giới thiệu",
            "Có thể giới thiệu",
            "Chưa biết",
            "Có lẽ không",
            "Chắc chắn không"
        ]
    },

    {
        question: "Bạn có muốn quay lại website này trong thời gian tới không?",
        answers: [
            "Chắc chắn có",
            "Có",
            "Có thể",
            "Có lẽ không",
            "Chắc chắn không"
        ]
    },

    {
        question: "Bạn đánh giá tốc độ tải trang như thế nào?",
        answers: [
            "Rất nhanh",
            "Nhanh",
            "Bình thường",
            "Chậm",
            "Rất chậm"
        ]
    },

    {
        question: "Bạn đánh giá mức độ phong phú của nội dung như thế nào?",
        answers: [
            "Rất phong phú",
            "Phong phú",
            "Bình thường",
            "Chưa phong phú",
            "Rất ít"
        ]
    },

    {
        question: "Website có mang lại cho bạn cảm giác tích cực không?",
        answers: [
            "Rất tích cực",
            "Tích cực",
            "Bình thường",
            "Không tích cực",
            "Rất tiêu cực"
        ]
    },

    {
        question: "Bạn cảm thấy website có truyền cảm hứng cho mình không?",
        answers: [
            "Rất nhiều",
            "Nhiều",
            "Bình thường",
            "Ít",
            "Không"
        ]
    },

    {
        question: "Bạn đánh giá cách trình bày thông tin trên website như thế nào?",
        answers: [
            "Rất rõ ràng",
            "Rõ ràng",
            "Bình thường",
            "Chưa rõ ràng",
            "Khó hiểu"
        ]
    },

    {
        question: "Bạn có cảm thấy thoải mái khi sử dụng website không?",
        answers: [
            "Rất thoải mái",
            "Thoải mái",
            "Bình thường",
            "Không thoải mái",
            "Rất không thoải mái"
        ]
    },

    {
        question: "Bạn đánh giá trải nghiệm sử dụng website như thế nào?",
        answers: [
            "Rất tốt",
            "Tốt",
            "Bình thường",
            "Chưa tốt",
            "Rất kém"
        ]
    },

    {
        question: "Bạn có muốn website tiếp tục phát triển thêm nhiều nội dung mới không?",
        answers: [
            "Rất mong muốn",
            "Mong muốn",
            "Không quan trọng",
            "Không cần thiết",
            "Hoàn toàn không"
        ]
    },

    {
        question: "Bạn có cảm thấy thời gian dành cho website là xứng đáng không?",
        answers: [
            "Rất xứng đáng",
            "Xứng đáng",
            "Bình thường",
            "Không xứng đáng lắm",
            "Hoàn toàn không xứng đáng"
        ]
    },

    {
        question: "Bạn đánh giá tổng thể website này như thế nào?",
        answers: [
            "Rất tốt",
            "Tốt",
            "Bình thường",
            "Chưa tốt",
            "Rất kém"
        ]
    }

];


// ================================
// SỐ CÂU ĐƯỢC CHỌN MỖI LẦN
// ================================

const QUESTIONS_PER_QUIZ = 9;


// ================================
// CÁC PHẦN TỬ HTML
// ================================

const startBtn = document.getElementById("startBtn");

const welcomeBox = document.getElementById("welcomeBox");

const quizBox = document.getElementById("quizBox");

const nextBtn = document.getElementById("nextBtn");

const resultBox = document.getElementById("resultBox");

const resultText = document.getElementById("resultText");

const restartBtn = document.getElementById("restartBtn");

const questionNumber = document.getElementById("questionNumber");

const questionText = document.getElementById("questionText");

const answersBox = document.getElementById("answers");

const homeBtn = document.getElementById("homeBtn");


// ================================
// BIẾN KHẢO SÁT
// ================================

let currentQuestion = 0;

let userAnswers = [];

let selectedQuestions = [];


// Lưu các câu đã xuất hiện ở lần khảo sát trước
let previousQuestionIndexes = [];


// ================================
// HÀM XÁO TRỘN MẢNG
// ================================

function shuffle(array) {

    const newArray = [...array];

    for (let i = newArray.length - 1; i > 0; i--) {

        const randomIndex = Math.floor(
            Math.random() * (i + 1)
        );

        [
            newArray[i],
            newArray[randomIndex]
        ] = [
            newArray[randomIndex],
            newArray[i]
        ];

    }

    return newArray;
}


// ================================
// CHỌN 9 CÂU HỎI
// ================================

function selectQuestions() {

    const allIndexes = questionBank.map(function(question, index) {
        return index;
    });


    // Những câu chưa xuất hiện ở lần trước
    const unusedIndexes = allIndexes.filter(function(index) {

        return !previousQuestionIndexes.includes(index);

    });


    let selectedIndexes = [];


    /*
     * Ưu tiên lấy câu chưa xuất hiện.
     */

    if (unusedIndexes.length >= QUESTIONS_PER_QUIZ) {

        selectedIndexes = shuffle(unusedIndexes)
            .slice(0, QUESTIONS_PER_QUIZ);

    } else {

        /*
         * Nếu số câu chưa dùng không đủ,
         * lấy toàn bộ câu chưa dùng trước.
         */

        selectedIndexes = shuffle(unusedIndexes);


        /*
         * Sau đó lấy thêm từ toàn bộ ngân hàng.
         */

        const remainingIndexes = allIndexes.filter(function(index) {

            return !selectedIndexes.includes(index);

        });


        const needed =
            QUESTIONS_PER_QUIZ - selectedIndexes.length;


        selectedIndexes = selectedIndexes.concat(
            shuffle(remainingIndexes).slice(0, needed)
        );

    }


    /*
     * Lưu lại bộ câu hỏi vừa sử dụng
     * để lần sau ưu tiên câu khác.
     */

    previousQuestionIndexes = [...selectedIndexes];


    /*
     * Tạo bộ câu hỏi thực tế:
     *
     * Câu 1 cố định
     * +
     * 9 câu ngẫu nhiên
     */

    selectedQuestions = [
        introductionQuestion,
        ...selectedIndexes.map(function(index) {
            return questionBank[index];
        })
    ];

}


// ================================
// BẮT ĐẦU KHẢO SÁT
// ================================

function startQuiz() {

    currentQuestion = 0;

    userAnswers = [];

    selectQuestions();

    welcomeBox.style.display = "none";

    resultBox.style.display = "none";

    quizBox.style.display = "block";

    showQuestion();

}


// ================================
// NÚT BẮT ĐẦU
// ================================

startBtn.addEventListener("click", function () {

    startQuiz();

});


// ================================
// HIỂN THỊ CÂU HỎI
// ================================

function showQuestion() {

    const question = selectedQuestions[currentQuestion];


    questionNumber.textContent =
        "Câu " +
        (currentQuestion + 1) +
        " / " +
        selectedQuestions.length;


    questionText.textContent =
        question.question;


    answersBox.innerHTML = "";


    question.answers.forEach(function(answer, index) {

        const label = document.createElement("label");

        label.className = "answer";


        label.innerHTML = `
            <input 
                type="radio" 
                name="answer" 
                value="${index}"
            >

            <span>${answer}</span>
        `;


        answersBox.appendChild(label);

    });

}


// ================================
// NÚT TIẾP TỤC
// ================================

nextBtn.addEventListener("click", function () {

    const selectedAnswer = document.querySelector(
        'input[name="answer"]:checked'
    );


    if (!selectedAnswer) {

        alert("Vui lòng chọn một đáp án!");

        return;

    }


    userAnswers[currentQuestion] =
        Number(selectedAnswer.value);


    currentQuestion++;


    if (
        currentQuestion <
        selectedQuestions.length
    ) {

        showQuestion();

    } else {

        finishQuiz();

    }

});


// ================================
// TÍNH ĐIỂM
// ================================

function calculateScore() {

    let score = 0;

    let maxScore = 0;


    selectedQuestions.forEach(function(question, index) {

        /*
         * Câu 1 không tính điểm.
         */

        if (index === 0) {

            return;

        }


        const answerIndex =
            userAnswers[index];


        if (answerIndex === undefined) {

            return;

        }


        /*
         * Đáp án đầu tiên = điểm cao nhất.
         */

        const points =
            question.answers.length -
            answerIndex;


        score += points;


        maxScore +=
            question.answers.length;

    });


    return {
        score: score,
        maxScore: maxScore
    };

}


// ================================
// NHẬN XÉT KẾT QUẢ
// ================================

function getResultComment(score, maxScore) {

    const percentage =
        (score / maxScore) * 100;


    if (percentage >= 90) {

        return "Mức độ đánh giá rất tích cực. Cảm ơn bạn đã dành thời gian và có những phản hồi rất tích cực cho chương trình.";

    }


    if (percentage >= 75) {

        return "Mức độ đánh giá tích cực. Những phản hồi của bạn là nguồn động viên rất quý giá.";

    }


    if (percentage >= 60) {

        return "Mức độ đánh giá khá tích cực. Hy vọng website sẽ ngày càng hoàn thiện hơn.";

    }


    if (percentage >= 40) {

        return "Mức độ đánh giá ở mức trung bình. Những góp ý của bạn sẽ giúp chương trình có thêm cơ hội cải thiện.";

    }


    return "Mức độ đánh giá chưa cao. Cảm ơn bạn đã đưa ra phản hồi chân thành. Đây là những thông tin rất hữu ích để cải thiện chương trình.";

}


// ================================
// HOÀN THÀNH KHẢO SÁT
// ================================

function finishQuiz() {

    quizBox.style.display = "none";

    resultBox.style.display = "block";


    const result =
        calculateScore();


    const comment =
        getResultComment(
            result.score,
            result.maxScore
        );


    resultText.innerHTML =
        "Bạn đã hoàn thành tất cả các câu hỏi." +
        "<br><br>" +

        "<strong>Điểm của bạn: " +
        result.score +
        " / " +
        result.maxScore +
        "</strong>" +

        "<br><br>" +

        comment;

}


// ================================
// LÀM LẠI KHẢO SÁT
// ================================

restartBtn.addEventListener("click", function () {

    /*
     * Không reset previousQuestionIndexes.
     *
     * Vì chúng ta muốn lần khảo sát mới
     * ưu tiên những câu chưa xuất hiện.
     */

    currentQuestion = 0;

    userAnswers = [];

    selectQuestions();

    resultBox.style.display = "none";

    quizBox.style.display = "block";

    showQuestion();

});


// ================================
// VỀ TRANG CHÍNH
// ================================

homeBtn.addEventListener("click", function () {

    location.href = "../index.html";

});
