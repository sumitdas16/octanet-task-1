window.onscroll = function() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("nav").addClass("nav-active");
    } else {
        $("nav").removeClass("nav-active");
    }
}