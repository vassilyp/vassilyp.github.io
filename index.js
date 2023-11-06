var tabLinks = document.getElementsByClassName('tab-links')
var tabContents = document.getElementsByClassName('tab-contents')

function opentab(tabName, el) {
    for (var tabLink of tabLinks) {
        tabLink.classList.remove('active-link');
    }
    for (var tabContent of tabContents) {
        tabContent.classList.remove('active-tab');
    }
    el.classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab');
}


var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}


// Email handling (from https://github.com/jamiewilson/form-to-google-sheets)

const scriptURL = 'https://script.google.com/macros/s/AKfycbxeOesiYSiBWdGDI9UXphbliC6yuaDcFMMEgyntKgjGEVXPL6q0N0pEncc2cyJL3MYROA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Succesfully sent message!";
        setTimeout(() => {
            msg.innerHTML = "";
        }, 5000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})

