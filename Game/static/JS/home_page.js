const playBtn = document.getElementById("play-btn")
const modeSelector = document.getElementById("mode-selector")
const onlinebtn = document.getElementById("online")
const offlineBtn = document.querySelectorAll(".offline")
const onlineModal = document.getElementById("online-player")
const review = document.getElementById("review")
const firstReview = document.getElementById("review1")
const secondReview = document.getElementById("review2")
const thirdReview = document.getElementById("review3")
const closeBtns = document.querySelectorAll(".close-btns")
const r1Yes = document.getElementById("r1yes")
const r1No = document.getElementById("r1no")
const r2Yes = document.getElementById("r2yes")
const r2No = document.getElementById("r2no")
const howToPLayBtn = document.getElementById("how-to-btn")
const howToPLay = document.getElementById("how-to")
const creditsModal = document.getElementById("credits-modal")
const creditsBtn = document.getElementById("credits")

playBtn.addEventListener("click", ()=>{
    modeSelector.showModal()
})
onlinebtn.addEventListener('click', ()=>{
    modeSelector.close()
    onlineModal.showModal()
})
offlineBtn.forEach(btn => btn.addEventListener("click", ()=>{
    window.location.href = gameUrl;
}))

creditsBtn.addEventListener("click", ()=>{
    creditsModal.showModal()
})

review.addEventListener("click", ()=>{
    firstReview.showModal();
})

closeBtns.forEach(btn => 
    btn.addEventListener("click", ()=>{
        btn.closest("dialog").close();
}))

r1Yes.addEventListener("click", ()=> {
    firstReview.close();
    thirdReview.showModal();
})
r1No.addEventListener("click", ()=> {
    firstReview.close();
    secondReview.showModal();
})
r2Yes.addEventListener("click", ()=> {
    secondReview.close();
    thirdReview.showModal();
})
r2No.addEventListener("click", ()=> {
    secondReview.close();
})

howToPLayBtn.addEventListener("click", ()=>{
    howToPLay.showModal();
})