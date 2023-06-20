let scrollBtn = document.getElementById("scroll-to-top");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        scrollBtn.style.transform = "translate(0)";
    } else {
        scrollBtn.style.transform = "translate(0, 70px)";
    }
}

function scrollTopFunc() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}