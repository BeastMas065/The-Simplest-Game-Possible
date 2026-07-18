const review = document.getElementById("review");
const review_modal = document.getElementById("review1");

console.log(review);
console.log(review_modal);

review.addEventListener("click", () => {
    console.log("clicked");
    review_modal.classList.add("open");
});

/*review.addEventListener("click", () => {
    review_modal.classList.add("open");
});*/