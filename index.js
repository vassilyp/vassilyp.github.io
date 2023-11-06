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