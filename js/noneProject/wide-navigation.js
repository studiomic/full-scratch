
// FIXEDNAV ANCHOR POSITION
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
// OTHER PEGES ANCHOR :遷移先インページリンク?id=
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

//	GLOBAL NAV FIXED on INDIVIDUAL PAGE
$(function() {
	var topNav = $('#globalnav');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 220) {
			topNav.slideDown();
		} else {
			topNav.slideUp();
		}
	});
});

//	GLOBAL NAV FIXED on TOP PAGE
$(function() {
	var topNav = $('#top-globalnav');
	//スクロールが1400に達したらNAV表示
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1400) {
			topNav.slideDown();
		} else {
			topNav.slideUp();
		}
	});
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

