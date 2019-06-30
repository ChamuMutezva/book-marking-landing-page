let openClose = Array.from(document.querySelectorAll(".openClose"));
let modal = document.getElementById("modal");
console.log(openClose);
console.log(modal);


for (let opened of openClose) {
    opened.addEventListener("click", function () {
        console.log(this);
        modal.classList.toggle("show");

    })
}
