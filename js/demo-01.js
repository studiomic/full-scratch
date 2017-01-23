
$(document).ready(function(){
	$("#service__1--Desc").css("display", "none");
	$("#service__2--Desc").css("display", "none");
	$("#service__3--Desc").css("display", "none");
	$("#service__4--Desc").css("display", "none");

	$('.service__1 ul').velocity({
		opacity: [0, 0],
	}, {
		delay: 0,
		duration: 0
	});

	$('.service__2 ul').velocity({
		opacity: [0, 0],
	}, {
		delay: 0,
		duration: 0
	});

	$('.service__3 ul').velocity({
		opacity: [0, 0],
	}, {
		delay: 0,
		duration: 0
	});

	$('.service__4 ul').velocity({
		opacity: [0, 0],
	}, {
		delay: 0,
		duration: 0
	});
});


// POINTER.1
$(function(){
	$('.servic__Pointer--1').on('click', function(){
		$(".service__1").show();
		$(".service__2").hide();
		$(".service__3").hide();
		$(".service__4").hide();

		$("#service__1--Desc").css("display", "inline-block");
		$("#service__2--Desc").css("display", "none");
		$("#service__3--Desc").css("display", "none");
		$("#service__4--Desc").css("display", "none");

		$('.service__1 ul').velocity({
			opacity: [1, 0],
		}, {
			delay: 400,
			duration: 1000
		});

		$('#service__1--Desc').velocity({
			opacity: [1, 0],
		}, {
			delay: 0,
			duration: 1500
		});
	});



// POINTER.2
	$('.servic__Pointer--2').on('click', function(){
		$(".service__1").hide();
		$(".service__2").show();
		$(".service__3").hide();
		$(".service__4").hide();

		$("#service__2--Desc").css("display", "inline-block");
		$("#service__1--Desc").css("display", "none");
		$("#service__3--Desc").css("display", "none");
		$("#service__4--Desc").css("display", "none");

		$('.service__2 ul').velocity({
			opacity: [1, 0],
		}, {
			delay: 400,
			duration: 1000
		});


		$('#service__2--Desc').velocity({
			opacity: [1, 0],
		}, {
			delay: 0,
			duration: 1500
		});
	});



// POINTER.3
	$('.servic__Pointer--3').on('click', function(){
		$(".service__1").hide();
		$(".service__2").hide();
		$(".service__3").show();
		$(".service__4").hide();

		$("#service__3--Desc").css("display", "inline-block");
		$("#service__1--Desc").css("display", "none");
		$("#service__2--Desc").css("display", "none");
		$("#service__4--Desc").css("display", "none");

		$('.service__3 ul').velocity({
			opacity: [1, 0],
		}, {
			delay: 400,
			duration: 1000
		});


		$('#service__3--Desc').velocity({
			opacity: [1, 0],
		}, {
			delay: 0,
			duration: 1500
		});
	});

// POINTER.4
	$('.servic__Pointer--4').on('click', function(){
		$(".service__1").hide();
		$(".service__2").hide();
		$(".service__3").hide();
		$(".service__4").show();

		$("#service__4--Desc").css("display", "inline-block");
		$("#service__1--Desc").css("display", "none");
		$("#service__2--Desc").css("display", "none");
		$("#service__3--Desc").css("display", "none");

		$('.service__4 ul').velocity({
			opacity: [1, 0],
		}, {
			delay: 400,
			duration: 1000
		});

		$('#service__4--Desc').velocity({
			opacity: [1, 0],
		}, {
			delay: 0,
			duration: 1500
		});
	});
});


// $(".service__1").velocity("slideUp", { duration: 0 });
// $(".service__2").velocity("slideUp", { duration: 0 });
// $(".service__3").velocity("slideUp", { duration: 0 });
// $(".service__4").velocity("slideDown", { duration: 0 });



		// $(".service__1").velocity("slideUp", { duration: 0 });
		// $(".service__2").velocity("slideUp", { duration: 0 });
		// $(".service__3").velocity("slideDown", { duration: 0 });
		// $(".service__4").velocity("slideUp", { duration: 0 });


		// $(".service__1").velocity("fadeOut", { duration: 0 });
		// $(".service__2").velocity("fadeOut", { duration: 0 });
		// $(".service__4").velocity("fadeOut", { duration: 0 });

// $('.service__4').on('click', function(){
// 	$(".service__1").velocity("fadeOut", { duration: 0 });
// 	$(".service__2").velocity("fadeOut", { duration: 0 });
// 	$(".service__3").velocity("fadeOut", { duration: 0 });
// 	$('.service__4 ul').velocity({
// 		opacity: [1, 0],
// 	}, {
// 		delay: 400,
// 		duration: 1000
// 	});
//
// 	$("#service__4--Desc").css("display", "inline-block");
// 	$('#service__4--Desc').velocity({
// 		opacity: [1, 0],
// 	}, {
// 		delay: 0,
// 		duration: 1500
// 	});
// });

// $(".service__1").hide();
// $('.service__2 ul').velocity({
// $(".service__3").velocity("fadeOut", { duration: 0 });
// $(".service__4").velocity("fadeOut", { duration: 0 });



		// $('#service--2').velocity({
		// 	marginRight: -2000,
		// 	//transition.fadeOut,
		// },{
		// 	duration: 2000,
		// 	easing: 'easeInOutQuad'
		// 	easing: 'easeInOutQuad'
		// });

		// $('.demo2').velocity({
		// 	marginRight: -200,
		// },{
		// 	duration: 2000,
		// 	easing: [250, 15]
		// });
		//
		// $('.demo3').velocity({
		// 	marginLeft: 25,
		// },{
		// 	duration: 2000,
		// 	easing: [6]
		// });


// overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
		// .velocity('', {
		// 	stagger: 150,
		// 	delay: 0,
		// 	complete: function() {
		// 		$('.service__1 ul').velocity({
		// 			opacity: [1, 0],
		// 		}, {
		// 			delay: 10,
		// 			duration: 140
		// 		});
		// 		$('.open-overlay').css('pointer-events', 'auto');
		// 	}
		// });


// $(function(){
// 	$('.btn').on('click', function(){
// 		$('.demo').velocity({
// 			marginLeft: 200,
// 		},{
// 			duration: 2000,
// 			easing: 'easeInOutQuad'
// 		});
//
// 		$('.demo2').velocity({
// 			marginLeft: 200,
// 		},{
// 			duration: 2000,
// 			easing: [250, 15]
// 		});
//
// 		$('.demo3').velocity({
// 			marginLeft: 200,
// 		},{
// 			duration: 2000,
// 			easing: [6]
// 		});
//
// 	});
// });
//
//
//$(".service__1 ul").velocity('SlideDown', { duration: 0 });
//$(".service__1 ul").velocity("fadeOut", { duration: 0 ,opacity: 0 });

// $(".service__2 ul").velocity("fadeOut", { duration: 0 });
// $(".service__3 ul").velocity("fadeOut", { duration: 0 });
// $(".service__4 ul").velocity("fadeOut", { duration: 0 });

//$('.service__1 ul').hide();
// $('.service__2 ul').hide();
// $('.service__3 ul').hide();
// $('.service__4 ul').hide();


// $('.service__1 ul').velocity({opacity: 0});
// $('.service__1 ul')
// 	.velocity({
// 	  opacity: '0'
// 	},{
// 	  duration: 0,
// 	  delay: 10
// 	});


		//		var next_preview__1 = $('.service__1 ul');
		//$(".service__1 ul").velocity({ [0,1] });

		//$('.service__1 ul').show();


//		$(".service__1 ul").velocity("fadeOut", { duration: 1500 });


//$(".service__1--ul").css("display: flex;");

//next_preview__1.removeClass('display: none;').addClass('animate-top-bar');

//overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')

// $('.btn').click(function(){
//   animation();
// });
//
// function animation() {
//   $('.btn').hide();
//   $('p')
// 	.show()
// 	.velocity({
// 	  color: '#333333',
// 	  backgroundColor: '#F7CA79',
// 	  backgroundColorAlpha: 0.8,
// 	},{
// 	  duration: 3000,
// 	  delay: 1000
// 	});
// }
