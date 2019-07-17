let openClose = Array.from(document.querySelectorAll(".openClose"));
let modal = document.getElementById("modal");
console.log(openClose);
console.log(modal);


for (let opened of openClose) {
    opened.addEventListener("click", function () {
        console.log(this);
        modal.classList.toggle("show");
        openModal();
    })
}

/*$('#modal').on('shown', function () {
    $('body').css('overflow', 'hidden');
}).on('hidden', function () {
    $('body').css('overflow', 'auto');
})*/

function openModal() {
    if (modal.classList.contains("show")) {
        document.body.style.overflow = "auto";
      
       // const top = document.body.style.top;
        //document.body.style.position = 'fixed';
       // document.body.style.top = `-${window.scrollY}px`;
        //window.scrollTo(0, parseInt(scrollY || '0') * -1);
        console.log("modal ent 1");
    } else {
        document.body.style.overflow = "hidden";
        //document.body.style.position = '';
        //document.body.style.top = '';
        console.log("modal ent 3");
    }
}