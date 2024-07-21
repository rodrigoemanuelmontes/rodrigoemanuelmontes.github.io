let menuVisible = false;

function showOcultMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}
function select() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectskills() {
    var skills = document.getElementById("skills");
    var distance_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distance_skills >= 300) {
        let skills = document.getElementsByClassName("progress");
        skills[0].classList.add("javascript");
        skills[1].classList.add("htmlcss");
        skills[2].classList.add("photoshop");
        skills[3].classList.add("csharp");
        skills[4].classList.add("sql");
        skills[5].classList.add("comunicacion");
        skills[6].classList.add("trabajoenquipo");
        skills[7].classList.add("dedicacion");
        skills[8].classList.add("creatividad");
        skills[9].classList.add("autodidacta");
    }
}

window.onscroll = function () {
    efectskills();
}