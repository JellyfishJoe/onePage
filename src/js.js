$(document).ready(() => {

	$('#tab-content div:not(:first)').hide();

	$('#tab-nav li').click(function(event){
		event.preventDefault();

		$('#tab-content div').hide();
		$('#tab-nav .current').removeClass('current');
		$(this).addClass('current');

		var clicked = $(this).find('a').attr('href');

		$('#tab-content ' + clicked).show();

		var num = clicked.match(/\d+/)[0];

		console.log(num);

		var lossWidth = (96 * num) + (3 * (num - 1));

		console.log(lossWidth);

		var width = 400 - lossWidth;

		console.log(width);

		$('#tab-content:after').css({
			'border-top':'1px solid black',
			'width': width
		});

	}).eq(0).addClass('current');
});