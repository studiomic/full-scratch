
//RESPONSIVE LIKE HAMBURGER NAV
$(function() {
	$(document).ready(function() {
		// jQuery('.firstnav nav').meanmenu();

		// $(".second-nav a").on("click", function(e) {
		// 	e.preventDefault();
		// 	e.stopPropagation();
		// });

		$(".second-nav").naver();

		// $(window).one("pronto.load", function() {
		// 	$(".second-nav a").off("click");
		// 	$(".second-nav").naver("destroy");

		// });

	});
});

// $(document).ready(function() {
//   $("nav").naver({
//     labels: {
//       closed: "めにゅーだよ",
//       open: "閉じるよ"
//     },
//     maxWidth: "980px"
//   });
// });




// // FIXEDNAV ANCHOR POSITION - USE SUB NAV -
// $(function(){
// 	var headerHight = 0; // HEADER HIGHT
// //インページリンク#
// 	$('a[href^=#]').click(function(){
// 			var href= $(this).attr("href");
// 			var target = $(href == "#" || href == "" ? 'body' : href);
// 			var position = target.offset().top-headerHight; //ヘッダの高さ分位置をずらす
// 			$("html, body").animate({scrollTop:position}, 800, "swing");
// 			return false;
// 	});
// // OTHER PEGES ANCHOR :遷移先インページリンク?id=
// 	var url = $(location).attr('href');
// 	if (url.indexOf("?id=") == -1) {
// 			// スムーズスクロール以外の処理（必要なら）
// 	}else{
// 		// スムーズスクロールの処理
// 		var url_sp = url.split("?id=");
// 		var hash = "#" + url_sp[url_sp.length - 1];
// 		var target2 = $(hash);
// 		var position2 = target2.offset().top-headerHight;
// 		$("html, body").animate({scrollTop:position2}, 800, "swing");
// 	}
// });


// TOP BUTTON
$(function() {
	var topBtn = $('#pagetop');
	topBtn.hide();
	//スクロールが100に達したらボタン表示
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1800) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
	//スクロールしてトップ
	topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 5000);
		return false;
	});
});

//	LAYOUT-HEIGHT - TOP PAGE GALLERY
$(function () {
	$(document).ready(function () {
		hsize = $(window).height();
		head = 120;
		minheight = 300;
		//minheight = 10;
		enbuttons = 250;
		drawimg = hsize/2;
		$("#mobile-anime").css("margin-bottom", 50 + "px");//9Grid下余白
		$("#mobile-top-gallery").css("min-height", drawimg + "px");
		//$("#mobile-top-gallery").css("height", drawimg + "px");
		$("#mobile-intro").css("min-height", minheight + "px");
		$("#mobile-intro").css("height", hsize-head-enbuttons-drawimg + "px");
	});
	$(window).resize(function () {
		//window.location.reload();
		hsize = $(window).height();
		$("#mobile-anime").css("margin-bottom", 50 + "px");//9Grid下余白
		$("#mobile-top-gallery").css("min-height", drawimg + "px");
		//$("#mobile-top-gallery").css("height", drawimg + "px");


		$("#mobile-intro").css("min-height", minheight + "px");
		$("#mobile-intro").css("height", hsize-head-drawimg + "px");
	});
});

//	HAMBURGER NAV LOGO ANCHOR
$(function() {
	var navLogo = $('header');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 20) {
			navLogo.slideUp();
		} else {
			navLogo.slideDown();
		}
	});
});



