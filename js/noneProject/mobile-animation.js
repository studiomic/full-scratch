
//	Layout-height - Top Page Gallery
//モバイルアニメーションエリアサイズ
// $(function () {
// 	$(document).ready(function () {
// 		head = 120;
// 		enbuttons = 250;
// 		hsize = $(window).height();
// 		drawimg = hsize/2;
// 		$("#draw-anime").css("height", drawimg + "px");
// 		$("#intro").css("min-height", hsize-head-drawimg + "px");
// 	});
// 	$(window).resize(function () {
// 		hsize = $(window).height();
// 		$("#intro").css("min-height", hsize-head-nav + "px");
// 	});
// });



//	Layout-height - Top Page Gallery
$(function () {
	$(document).ready(function () {
		head = 120;
		enbuttons = 250;
		hsize = $(window).height();
		drawimg = hsize/2;
		//$("#intro").css("min-height", hsize-head-gallerys + "px");//横置き最小値確保
		$("#top-gallery").css("height", drawimg + "px");//画面の1/2を
		$("#intro").css("height", hsize-head-enbuttons-drawimg + "px");




		//$("#draw-anime").css("min-height", hsize-head-nav + "px");
		//$("#top-gallery").css("min-height", hsize-head-drawimg + "px");

//		$("#draw-anime").css("min-height", drawimg + "px");

//最初の値：縦置きしか考慮していない
//		$("#draw-anime").css("height", drawimg + "px");
//		$("#intro").css("min-height", hsize-head-drawimg + "px");



	});
	$(window).resize(function () {
		hsize = $(window).height();
		//$("#intro").css("min-height", hsize-head-gallerys + "px");//横置き最小値確保
		$("#top-gallery").css("height", drawimg + "px");
		$("#intro").css("height", hsize-head-drawimg + "px");
	});
});

