//　GMAPS.JS OPTION
//function initialize() {
// 	var latlng = new google.maps.LatLng(35.437585, 139.359872);
//$(document).ready(function(){
//
window.onload = function(){
	var styles = [
		{
			featureType: 'all',
			elementType: 'all',
			stylers: [
				{saturation: '-100'},
			]
		},
	];
	var lat = 35.437585;//緯度
	var lng = 139.359872;//経度
	var map = new GMaps({
			el: '#map',
			lat: lat,
			lng: lng,
			scrollwheel: false,
			styles: styles,
			//mapTypeControl: false,
			//mapTypeControl: true,
			zoom: 14,
	});
	map.addMarker({
			lat: lat,
			lng: lng,
			title: "JapanNetLine",
			icon: "img/pin.png",//mapPinImg
			infoWindow: {
					content: '<p><img src="img/logo.png" alt="JNL" width="393" height="91"></p>'
			}
	});
};
