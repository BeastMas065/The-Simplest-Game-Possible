const back = document.getElementById("back");
const backModal = document.getElementById("exit-selector");
const backModalNo = document.querySelectorAll(".stay");
const ExitBtn = document.querySelectorAll(".exit");
const drawn = document.getElementById("drawn");

back.addEventListener("click", ()=>{
    backModal.showModal();
});

backModalNo.forEach(btn => btn.addEventListener("click", ()=>{
    backModal.close();
}));

ExitBtn.forEach(btn => btn.addEventListener("click", ()=>{
    window.location.href = MenuUrl;
}));

const text = document.getElementById("text");
const countEle = document.getElementById("count");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const xButton = document.getElementById("right");
const oButton = document.getElementById("left");
const result = document.getElementById("result")
const resultPara = document.getElementById("resultpara")
let count = 0;

const append = (btn) => {
    count += 1;
    if (count === 30) draw()
    text.innerText += btn;
    countEle.innerText = count;
    player1.classList.toggle("active");
    player2.classList.toggle("active");
    let text1 = new RegExp(text.innerText.slice(-5), 'g')
    let text2 = new RegExp(text.innerText.slice(-3), 'g')

    let count1 = (text.innerText.match(text1)||[]).length;
    let count2 = (text.innerText.match(text2)||[]).length;
    if (count1 === 2 && count2 === 4) draw();
    else if (count1 === 2){
        win('player 1')
    }
    else if (count2 === 4){
        win('player 2')
    }
};

const draw = () => {
    drawn.showModal()
};
const win = (para) => {
    result.showModal();
    resultPara.innerText = para + " has won";
};

xButton.addEventListener("click", () => append("X"));
oButton.addEventListener("click", () => append("O"));