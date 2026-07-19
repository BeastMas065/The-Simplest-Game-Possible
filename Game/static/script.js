const review = document.getElementById("review");
const review_modal = document.getElementById("review1");
const no_review1 = document.getElementById("no-review");
const proceed_review1 = document.getElementById("proceed2review1");
const proceed_review2 = document.getElementById("proceed2review2");
const review_modal2 = document.getElementById("review2");
const no_review2 = document.getElementById("no-review2");


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