
// animation for menu icon btn
const checkbox = document.getElementById("checkbox");
const dropdown = document.querySelector(".dropdown");
checkbox.addEventListener("change", function () {
    if (this.checked) {
        dropdown.style.display = "flex";
    } else {
        dropdown.style.display = "none";
    }
});


// taking text from text box to your quotes box

const addbtn = document.getElementById('addbtn');


const creatediv = document.getElementById('creatediv');
const yourquote = document.getElementById('yourquote');
function inputtextfunc(){
    const inputtext = document.querySelector('textarea').value;
    creatediv.style.display = 'none';
    yourquote.display = "unset";
    yourquote.textContent = '" '+ inputtext + ' "';
}
