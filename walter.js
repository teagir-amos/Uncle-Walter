const fav = document.querySelector("#fav");
fav.addEventListener("click", function (e) {
    alert("added to favourites")
});
const edit = document.querySelector("#edit");
edit.addEventListener('click', function (e) {
    const name = document.querySelector("#Walter");
    let newName = prompt("Enter new Name");
    name.innerHTML = `${newName}`;
    name.style.color = "white"
    name.style.fontSize = "xx-large";
});
const more = document.querySelector("#ellipsis");
const links = document.querySelector("#links");
const norm = document.querySelector('#times');
more.addEventListener('click', function () {
    links.style.display = "flex";
    norm.style.display = "inherit"
});
norm.addEventListener("click", function () {
    links.style.display = "none";
    norm.style.display = "none"
});
const call = document.querySelector("#mobile");
const phone = document.querySelector("#call");
const number = document.querySelector("#number");
call.addEventListener("click", function () {
    alert(`calling: \xa0\xa0\xa0\ ${number.innerHTML}`);
});
phone.addEventListener("click", function () {
    alert(`calling: \xa0\xa0\xa0\ ${number.innerHTML}`);
});
const voiceCall = document.querySelector("#voiceCall");
const more1 = document.querySelector("#options1");
voiceCall.addEventListener("click", function () {
    more1.style.display = "flex";
});
const videoCall = document.querySelector("#videoCall");
const more2 = document.querySelector("#options2");
videoCall.addEventListener("click", function () {
    more2.style.display = "flex";
});
const message = document.querySelector("#message");
const digits = document.querySelector("#digits")
const story = document.querySelector("#story");
message.addEventListener("click", function () {
    story.style.display = "inherit";
});
digits.addEventListener("click", () => {
    story.style.display = "inherit";
    options3.style.display = "none"
});
const send = document.querySelector("#send");
const text = document.querySelector("#text");
send.addEventListener("click", function () {
    const msg = document.getElementById("text").value;
    alert(`Sending... :\xa0\xa0\xa0\ ${msg}.`);
    // \xa0\xa0\xa0\ means adding space, the number of xa0's determines the length of the space.
});
const copy = document.querySelectorAll("#copy");
const copied = document.querySelector("#copied");
copy.forEach(copy => {
    copy.addEventListener("click", function () {
        copied.style.display = "inherit";
    });
});




