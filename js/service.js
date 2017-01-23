$(document).ready(function(){

//jQuery(document).ready(function () {
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
