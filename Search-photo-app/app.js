//navbar
const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");

$(window).on('scroll load', function () {

    $('.main_nav').removeClass('show_nav');
});
navToggle.addEventListener('click', function () {
    links.classList.toggle("show_nav");

});

//searchInput
const formDisplay = document.querySelector("#form");
const inputDisplay = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const resultDisplay = document.querySelector(".result");
const photoDisplay = document.querySelector(".photoValue");



runDisplay();
function runDisplay() {
    formDisplay.addEventListener("submit", search);

};

function search(e) {
    let value = inputDisplay.value.trim();
    fetch(`https://api.unsplash.com/search/photos?query=${value}`,
        {
            method: "Get",
            headers: {
                Authorization: "Client-ID gLySirjsPpK5bQKK7zQgcx05rayWdehD_Vc-yppvi4Q"
            }
        }
    ).then(res => res.json()).then((data) => {
        Array.from(data.results).forEach((images) => {
            addToImage(images.urls.small)
        });
    });
    e.preventDefault();
    photoDisplay.innerHTML = `Photos ${value}`;
    Array.from(resultDisplay.children).forEach((child) => { child.remove() });


};

function addToImage(url) {
    const div = document.createElement("div");
    div.className = "card"
    const img = document.createElement("img");
    img.setAttribute("src", url);
    // img.height="400";
    // img.width="400";
    div.append(img);
    resultDisplay.append(div);

};

// scroll

function scrollElement() {
    window.scrollTo(0, 0)
};
