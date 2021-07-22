$( document ).ready(function() {

$(".hamburger-icon").click(function () {
	$(".mobile-nav").fadeToggle(100);
});

});

$(document).ready(function() {

lightGallery(document.getElementById('lightgallery'), {
    speed: 500,
    download: false
});
});