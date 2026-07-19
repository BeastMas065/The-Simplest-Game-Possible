const review = document.getElementById("review");
const review_modal = document.getElementById("review1");
const no_review1 = document.getElementById("no-review");
const proceed_review1 = document.getElementById("proceed2review1");
const proceed_review2 = document.getElementById("proceed2review2");
const review_modal2 = document.getElementById("review2");
const no_review2 = document.getElementById("no-review2");
const mode_selector = document.getElementById("play-button");
const mode_modal = document.getElementById("game-mode");
const online = document.getElementById("online");
const local = document.getElementById("local");
const troll001 = document.getElementById("troll001");
const play = document.getElementById("play");
const rules = document.getElementById("rules");
const credits = document.getElementById("credits");

mode_selector.addEventListener("click", () => {
    mode_modal.classList.add("open");
});

online.addEventListener("click", ()=> {
    mode_modal.classList.remove("open");
    troll001.classList.add("open");
});

local.addEventListener("click", ()=> {
    mode_modal.classList.remove("open");
    window.location.href = "/game";
});

play.addEventListener("click", () => {
    troll001.classList.remove("open");
    window.location.href = '/game';
});

rules.addEventListener("click", () => {
    window.location.href = '/rules';
});

credits.addEventListener("click", () => {
    window.location.href = '/credits';
});

review.addEventListener("click", () => {
    review_modal.classList.add("open");
});

no_review1.addEventListener("click", () => {
    review_modal.classList.remove("open");
    review_modal2.classList.add("open");
});

proceed_review1.addEventListener("click", () => {
    review_modal.classList.remove("open");
    window.location.href = "/Review";
});

proceed_review2.addEventListener("click", () => {
    review_modal2.classList.remove("open");
    window.location.href = "/Review";
});

no_review2.addEventListener("click", () => {
    review_modal2.classList.remove("open");
});