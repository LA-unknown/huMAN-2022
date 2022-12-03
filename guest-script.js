function Mens() {
    window.location.assign("index.html");
}
function Longsleeves() {
    window.location.assign("GuestLongsleeves.html");
}
function Suitwithpants() {
    window.location.assign("GuestSuitwithpants.html");
}
function Shoes() {
    window.location.assign("GuestShoes.html");
}
function Watches() {
    window.location.assign("GuestWatches.html");
}
function Necklaces() {
    window.location.assign("GuestNecklaces.html");
}
function Bags() {
    window.location.assign("GuestBags.html");
}

var st;
function show_hide_searhtab() {
    if (st == 1) {
        document.getElementById("searchbar").style.display = "none";
        document.getElementById("barbackground1").style.display = "none";
        return st = 0;
    } else {
        document.getElementById("searchbar").style.display = "block";
        document.getElementById("barbackground1").style.display = "block";
        return st = 1;
    }
}

var login;
function show_hide_logintab() {
    if (st == 1) {
        document.getElementById("loginbar").style.display = "none";
        document.getElementById("barbackground2").style.display = "none";
        return st = 0;
    } else {
        document.getElementById("loginbar").style.display = "block";
        document.getElementById("barbackground2").style.display = "block";
        return st = 1;
    }
}