window.onload = function () {
    var loade = document.getElementById("loade");
    document.body.style.overflow = "hidden";
    setTimeout(function () {
        loade.style.display = "none";
        document.body.style.overflow = "auto";
    }, 3000);
}