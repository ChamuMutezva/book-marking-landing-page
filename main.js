let openClose = Array.from(document.querySelectorAll(".openClose"));
let modal = document.getElementById("modal");
const imageList = ["images/illustration-hero.svg", "images/illustration-features-tab-2.svg", "images/illustration-features-tab-3.svg"];
const headersList = [`Bookmark in one click`, "Intelligent search", "Share your bookmarks"];
const paraList = [`Organize your bookmarks however you like. Our simple drag-and-drop interface
                gives you complete control over how you manage your favourite sites.`,
    `Our powerful search feature will help you find saved sites in no time at all.
                No need to trawl through all of your bookmarks.`,
    `Easily share your bookmarks and collections with others. Create a shareable
    link that you can send at the click of a button. `
];

console.log(openClose);
console.log(modal);

let clickable = Array.from(document.querySelectorAll(".btnFeature"));

for (let selTar of clickable) {
    console.log(selTar.innerHTML);
    selTar.style.borderBottom = "transparent";
    selTar.addEventListener("click", function (evt) {
        clickable.forEach(elem => elem.style.borderBottom = "transparent");
        console.log(evt.target);
        this.style.borderBottom = "1px solid red";
    })
}


for (let opened of openClose) {
    opened.addEventListener("click", function () {
        console.log(this);
        modal.classList.toggle("show");
        openModal();

    })
};


clickable.forEach((elem, index) => {
    const curImage = document.querySelector('.mainImages img');
    const curHeading = document.querySelector('.mainImagesDescr h3');
    const curPara = document.querySelector('.mainImagesDescr p');
    console.log(elem, index);
    elem.addEventListener("click", function () {
        //console.log(this + " i have been clicked. Positioned at " + index);
        curImage.src = imageList[index];
        curHeading.innerHTML = headersList[index];
        curPara.innerHTML = paraList[index];
    })
})



let features = Array.from(document.querySelectorAll(".modalFeatures"));
for (let feature of features) {
    feature.addEventListener("click", function () {
        console.log(modal.classList);

        modal.classList.toggle("show");
        openModal();
        console.log(modal);

        let modalHeight = modal.clientHeight;
        console.log(modalHeight);
        if (modalHeight > 0) {
            document.body.style.overflow = "auto";
        }
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

/*link number one
function oneClickBookmark() {
    let curImage = document.querySelector('.mainImages img');
    let curHeading = document.querySelector('.mainImagesDescr h3');
    let curPara = document.querySelector('.mainImagesDescr p');

    curImage.src = "images/illustration-hero.svg";
    curHeading.innerHTML = `Bookmark in one click`;
    curPara.innerHTML = `Organize your bookmarks however you like. Our simple drag-and-drop interface
                gives you complete control over how you manage your favourite sites. `;
}
let openAltImgLink = document.querySelector(".simpleBookMarkingLink");
openAltImgLink.addEventListener("click", oneClickBookmark);

//link number 2
function speedSearching() {
    let curImage = document.querySelector('.mainImages img');
    let curHeading = document.querySelector('.mainImagesDescr h3');
    let curPara = document.querySelector('.mainImagesDescr p');

    curImage.src = "images/illustration-features-tab-2.svg";
    curHeading.innerHTML = "Intelligent search";
    curPara.innerHTML = `Our powerful search feature will help you find saved sites in no time at all.
                No need to trawl through all of your bookmarks.`;
}
let openLinkSpeedy = document.querySelector(".speedySearchingLink");
openLinkSpeedy.addEventListener("click", speedSearching);

//link number 3
function toggleBookMark() {
    let curImage = document.querySelector('.mainImages img');
    let curHeading = document.querySelector('.mainImagesDescr h3');
    let curPara = document.querySelector('.mainImagesDescr p');

    curImage.src = "images/illustration-features-tab-3.svg";
    curHeading.innerHTML = "Share your bookmarks";
    curPara.innerHTML = `Easily share your bookmarks and collections with others. Create a shareable
    link that you can send at the click of a button. `;
}

let easySharingBkMarks = document.querySelector(".easySharingLink");
easySharingBkMarks.addEventListener("click", toggleBookMark);
*/




