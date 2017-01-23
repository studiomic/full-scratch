
//	LAYOUT-HEIGHT - TOP PAGE GALLERY
$(function () {
	$(document).ready(function () {
		head = 120;
		minheight = 300;
		enbuttons = 250;
		hsize = $(window).height();
		drawimg = hsize/2;
		$("#top-gallery").css("height", drawimg + "px");//画面の1/2を
		$("#intro").css("min-height", minheight + "px");
		$("#intro").css("height", hsize-head-enbuttons-drawimg + "px");
	});
	$(window).resize(function () {
		hsize = $(window).height();
		$("#top-gallery").css("height", drawimg + "px");
		$("#intro").css("min-height", minheight + "px");
		$("#intro").css("height", hsize-head-drawimg + "px");
	});
});















//	exValidation
// $(function () {
// 	var validation = $("form")
// 		.exValidation({
// 			rules: {
// 				name: "chkName",
// 				// comment "chkrequired",
// 				comment: "chkMessage",
// 				email: "chkMail chkemail chkhankaku",
// 			},
// 			errInsertPos: 'after',
// //			errInsertPos: 'before',
// 			errPosition: 'fixed',
// 		});
// });





// $(function(){
// 	var url = $(location).attr('href');
// 	if (url.indexOf("?id=") == -1) {
// 		// スムーズスクロール以外の処理（必要なら）
// 	}else{
// 		// スムーズスクロールの処理
// 		var url_sp = url.split("?id=");
// 		var hash = '#' + url_sp[url_sp.length - 1];
// 		var tgt = $(hash);
// 		var pos = tgt.offset().top-30;
// 		$("html, body").animate({scrollTop:pos}, 500, "swing");
// 	}
// });

//$("a[href='hoge']")完全一致
//$("a[href!='hoge']")NOT(否定)
//$("a[href＾='hoge']")前方一致
//$("a[href$='hoge']")後方一致
//$("a[href*='hoge']")部分一致






