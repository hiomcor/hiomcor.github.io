/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    var Nav = document.getElementById("mySidenav")
    if (Nav.style.width != "22vw") {
        document.getElementById("mySidenav").style.width = "22vw";
    }
    else {
        document.getElementById("mySidenav").style.width = "0";
    }
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
