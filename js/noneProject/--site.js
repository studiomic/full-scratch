
//	GLOBAL NAV FIXED
// $(function () {
// 	$(document).ready(function () {
// 		wsize = $(window).width();


// 	if (wsize > 648) {
// 		// 画面サイズが648以上なら固定NAVを出す
// 		var topNav = $('#globalnav');
// 		$(window).scroll(function () {
// 			if ($(this).scrollTop() > 220) {
// 				//topNav.slideDown('slow');
// 				//topNav.slideDown('fast');
// 				topNav.slideDown();
// 				//secNav.slideDown();
// 			} else {
// 				topNav.slideUp();
// 				//secNav.slideUp();
// 			}
// 		});
// 	}else{
// 		// 画面サイズが648以下未満なら何もしない
// 	}
// });
// });

$(function() {
	wsize = $(window).width();
	if(wsize > 648){
		var topNav = $('#globalnav');
		//スクロールが220に達したらNAV表示
		$(window).scroll(function () {
			if ($(this).scrollTop() > 220) {
				//topNav.slideDown('slow');
				//topNav.slideDown('fast');
				topNav.slideDown();
				//secNav.slideDown();
			} else {
				topNav.slideUp();
				//secNav.slideUp();
			}
		});
	}else{}
});


//	GLOBAL NAV FIXED
$(function() {
	var topNav = $('#top-globalnav');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1400) {
			topNav.slideDown();
		} else {
			topNav.slideUp();
		}
	});
});


//	Header-height
// $(function(){
// 	var headerHight = 115; //height:Header
// 		$('a[href^=#]').click(function(){
// 			var href= $(this).attr("href");
// 			var target = $(href == "#" || href == "" ? 'html' : href);
// 			var position = target.offset().top-headerHight;
// 			$("html, body").animate({scrollTop:position}, 800, "swing");
// 			return false;
// 		});
// });


$(function(){
var headerHight = 115; //ヘッダの高さ
//インページリンク#
	$('a[href^=#]').click(function(){
			var href= $(this).attr("href");
			var target = $(href == "#" || href == "" ? 'body' : href);
			var position = target.offset().top-headerHight; //ヘッダの高さ分位置をずらす
			$("html, body").animate({scrollTop:position}, 800, "swing");
			return false;
	});
//遷移先インページリンク?id=
	var url = $(location).attr('href');
	if (url.indexOf("?id=") == -1) {
			// スムーズスクロール以外の処理（必要なら）
	}else{
		// スムーズスクロールの処理
		var url_sp = url.split("?id=");
		var hash = "#" + url_sp[url_sp.length - 1];
		var target2 = $(hash);
		var position2 = target2.offset().top-headerHight;
		$("html, body").animate({scrollTop:position2}, 800, "swing");
	}
});

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

// TOP-owl-carouse
$(document).ready(function() {
	$("#owl-top").owlCarousel({
		//navigation : true, // Show next and prev buttons
		loop: true,
		autoPlay: true,
		slideSpeed : 6000,
		singleItem:true,
		//paginationSpeed : 1400,
		//rewindSpeed : 1000,
		//stopOnHover:true,
		//lazyFollow : true,
		// lazyEffect : "fade",
		// "singleItem:true" is a shortcut for:
		//items : 1,
		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false
		//lazyLoad : true,
		//lazyFollow : true,
		//lazyEffect : "fade"


	});
});


//	Layout-height - Top Page Gallery
$(function () {
	$(document).ready(function () {
		head = 120;
		nav = 60;
		// mf = 60+45;
		hsize = $(window).height();
		//$("#draw-anime").css("min-height", hsize-head-nav + "px");
		$("#intro").css("min-height", hsize-head-nav + "px");
		$("#top-gallery").css("min-height", hsize-head-nav + "px");
		//$("#draw-anime").css("height", hsize-head-nav + "px");
	});
	$(window).resize(function () {
		hsize = $(window).height();
		$("#intro").css("min-height", hsize-head-nav + "px");
		$("#top-gallery").css("min-height", hsize-head-nav + "px");
		//$("#intro").css("height", hsize-head-nav + "px");
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






