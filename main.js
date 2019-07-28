let openClose = Array.from(document.querySelectorAll(".openClose"));
let modal = document.getElementById("modal");
console.log(openClose);
console.log(modal);

let clickable = Array.from(document.querySelectorAll(".btnFeature"));

for (let selTar of clickable) {
    console.log(selTar.innerHTML);
    selTar.style.borderBottom = "transparent";
    selTar.addEventListener("click", function (evt) {
        clickable.forEach(elem => elem.style.borderBottom = "transparent");
        console.log(evt.target);        
       // if (evt.target) {
            this.style.borderBottom = "1px solid red";
        //} else if (!evt.target) { 
        
   // }
    })
}

/*openClose[1].addEventListener("click", function () {
    if (modal.classList.contains("modalOut")) {
        modal.classList.toggle("modalOut");
    } else {
        modal.classList.toggle("modalOut");
    }
    
})*/

for (let opened of openClose) {
    opened.addEventListener("click", function () {
        console.log(this);
        modal.classList.toggle("show");       
        openModal();
    })
}



let features = Array.from(document.querySelectorAll(".modalFeatures"));
for (let feature of features) {
    feature.addEventListener("click", function () {
        console.log(modal);
        modal.classList.toggle("show");
        openModal();
        console.log(modal);

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

/*


const altenateLinks = Array.from(document.querySelectorAll(".featureLinks"));
//console.log(altenateLinks);
altenateLinks.forEach(elem => {
   
})
*/


function openAltImgSearch() {
    let target1 = document.querySelector('.altenateImg');
    target1.style.marginTop = "10%";
    target1.style.height = "100%";
    target1.style.visibility = "visible";


    let closeTarget1 = document.getElementById('speedySearch');
    closeTarget1.style.marginTop = "0";
    closeTarget1.style.height = "0";
    closeTarget1.style.visibility = "hidden";

    let closeTarget2 = document.getElementById('shareBkMarks');
    closeTarget2.style.marginTop = "0";
    closeTarget2.style.height = "0";
    closeTarget2.style.visibility = "hidden";

}
let openAltImgLink = document.querySelector(".simpleBookMarkingLink");
openAltImgLink.addEventListener("click", openAltImgSearch);

function openSpeedySearch() {
    let target1 = document.getElementById('speedySearch');
    target1.style.marginTop = "10%";
    target1.style.height = "100%";
    target1.style.visibility = "visible";


    let closeTarget1 = document.querySelector('.altenateImg');
    closeTarget1.style.marginTop = "0";
    closeTarget1.style.height = "0";
    closeTarget1.style.visibility = "hidden";

    let closeTarget2 = document.getElementById('shareBkMarks');
    closeTarget2.style.marginTop = "0";
    closeTarget2.style.height = "0";
    closeTarget2.style.visibility = "hidden";

}
let openLinkSpeedy = document.querySelector(".speedySearchingLink");
openLinkSpeedy.addEventListener("click", openSpeedySearch);

function easySharing() {
    let target1 = document.getElementById('shareBkMarks');
    target1.style.marginTop = "10%";
    target1.style.height = "100%";
    target1.style.visibility = "visible";


    let closeTarget1 = document.querySelector('.altenateImg');
    closeTarget1.style.marginTop = "0";
    closeTarget1.style.height = "0";
    closeTarget1.style.visibility = "hidden";

    let closeTarget2 = document.getElementById('speedySearch');
    closeTarget2.style.marginTop = "0";
    closeTarget2.style.height = "0";
    closeTarget2.style.visibility = "hidden";

}
let easySharingBkMarks = document.querySelector(".easySharingLink");
easySharingBkMarks.addEventListener("click", easySharing);
