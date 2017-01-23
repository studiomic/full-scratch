
var _ua = (function(u){
	return {
	Tablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1) 
		|| u.indexOf("ipad") != -1
		|| (u.indexOf("android") != -1 && u.indexOf("mobile") == -1)
		|| (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1)
		|| u.indexOf("kindle") != -1
		|| u.indexOf("silk") != -1
		|| u.indexOf("playbook") != -1,
	Mobile:(u.indexOf("windows") != -1 && u.indexOf("phone") != -1)
		|| u.indexOf("iphone") != -1
		|| u.indexOf("ipod") != -1
		|| (u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
		|| (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1)
		|| u.indexOf("blackberry") != -1
	}
})(window.navigator.userAgent.toLowerCase());


if(_ua.Mobile){	//スマートフォン：HAMBURGER-NAV
	document.write('<link href="/wordpress/css/mobile-anime.css" rel="stylesheet">');
	document.write('<link href="/wordpress/css/mobile-nav.css" rel="stylesheet">');
	document.write('<script src="/wordpress/js/jquery.meanmenu.js"></script>');
	document.write('<script src="/wordpress/js/jquery.fs.naver.js"></script>');
	document.write('<script src="/wordpress/js/mobile-hamburger.js"></script>');

}else if(_ua.Tablet){
//モバイル
	// document.write('<link href="/wordpress/css/mobile-anime.css" rel="stylesheet">');
	// document.write('<link href="/wordpress/css/mobile-nav.css" rel="stylesheet">');
	// document.write('<script src="/wordpress/js/jquery.meanmenu.js"></script>');
	// document.write('<script src="/wordpress/js/jquery.fs.naver.js"></script>');
	// document.write('<script src="/wordpress/js/mobile-hamburger.js"></script>');

//PC
	document.write('<link href="/wordpress/css/wide-nav.css" rel="stylesheet">');
	document.write('<script src="/wordpress/js/wide-animation.js"></script>');
	document.write('<script src="/wordpress/js/wide-navigation.js"></script>');

}else{	//PCアクセス
	document.write('<link href="/wordpress/css/wide-nav.css" rel="stylesheet">');
	document.write('<script src="/wordpress/js/wide-animation.js"></script>');
	document.write('<script src="/wordpress/js/wide-navigation.js"></script>');




	// document.write('<link href="css/mobile-nav.css" rel="stylesheet">');
	// document.write('<script src="js/jquery.meanmenu.js"></script>');
	// document.write('<script src="js/jquery.fs.naver.js"></script>');
	// document.write('<script src="js/mobile-animation.js"></script>');
	// document.write('<script src="js/mobile-hamburger.js"></script>');



}


