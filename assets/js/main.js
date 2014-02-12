if (window.location.hash) {
    $(window.location.hash.replace('#', '.')).toggle(showOrHide);
}