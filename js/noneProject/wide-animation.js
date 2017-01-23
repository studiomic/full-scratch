

// LAYOUT-HEIGHT - TOP PAGE GALLERY : PC and MAC
$(function () {
	$(document).ready(function () {
		head = 120;
		nav = 60;
		hsize = $(window).height();
		$("#intro").css("min-height", hsize-head-nav + "px");
		$("#top-gallery").css("min-height", hsize-head-nav + "px");
	});
	$(window).resize(function () {
		hsize = $(window).height();
		$("#intro").css("min-height", hsize-head-nav + "px");
		$("#top-gallery").css("min-height", hsize-head-nav + "px");
	});
});

