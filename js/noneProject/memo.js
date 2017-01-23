<link href="jquery.fs.naver.css" media="all" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="jquery-1.9.1.min.js"></script>
<script src="jquery.fs.naver.js"></script>
<script type="text/javascript">
$(function(){
	  $("nav").naver({
		animated: true, //メニュー表示に動きを付けるか
		labelClosed: "メニュー", //メニューが閉じている時の見出し
		labelOpen: "閉じる" //メニューが開いている時の見出し
	  });
});
</script>


		// }else if(wsize > 981){//981以上の処理
		// 	var topNav = $('#globalnav');
		// 	window.location.reload();

			//スクロールが220に達したらNAV表示

			// $(window).scroll(function () {
			// 	if ($(this).scrollTop() > 1) {
			// 		topNav.slideDown();
			// 	} else {
			// 		topNav.slideUp();
			// 	}
			// });





		if(wsize > 981){
			// TOP PAGE GALLERY : LAYOUT-HEIGHT (PC and MAC)
			head = 120;
			nav = 60;
			$("#intro").css("min-height", hsize-head-nav + "px");
			$("#top-gallery").css("min-height", hsize-head-nav + "px");



			// GLOBAL NAV FIXED : PC and MAC
			//var topNav = $('#globalnav');
			//スクロールが220に達したらNAV表示
			$(window).scroll(function () {
				if ($(this).scrollTop() > 220) {
					topNav.slideDown();
				} else {
					topNav.slideUp();
				}
			});








// GLOBAL NAV FIXED - on TOP PAGE : PC and MAC
$(function() {
	wsize = $(window).width();
	if(wsize > 981){
		var topNav = $('#top-globalnav');
		//スクロールが1400に達したら固定アンダーNAV表示
		$(window).scroll(function () {
			if ($(this).scrollTop() > 1400) {
				topNav.slideDown();
			} else {
				topNav.slideUp();
			}
		});
		//ReSize-function
		$(window).resize(function () {
			wsize = $(window).width();
			if(wsize > 981){
				$(window).scroll(function () {
					if ($(this).scrollTop() > 1400) {
						topNav.slideDown();
						} else {
							topNav.slideUp();
						}
				//MobileSizeに達したらhide
				}else{
					topNav.hide();
				}
			});
	}else{}
});
