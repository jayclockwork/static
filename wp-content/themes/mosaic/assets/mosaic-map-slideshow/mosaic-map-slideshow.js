(function($){
	var $scriptTag = $('#mosaic-map-slideshow-js'),
		folderPath = $scriptTag.attr('src').replace('mosaic-map-slideshow.js', ''),
		desktopImages = folderPath+'images/desktop',
		mobileImages = folderPath+'images/mobile',
		$slider = $('#mosaic-map-slideshow'),
		slidesCSS = '';

	var slidesData = [
		{
			headline: 'OUR GEOGRAPHIC DIVERSITY',
			copy: '<p>We are strategically positioned to sustainably serve the world’s most promising agricultural areas.</p>'
		},
		{
			headline: 'Mosaic in <br>south america',
			copy: '<p>Mosaic Fertilizantes creates an advantage by eliminating the expense of shipping phosphate fertilizer from Brazil’s ports to its <b>65 million hectares</b> of cropland.</p>'
		},
		{
			headline: 'MOSAIC IN <br />NORTH AMERICA',
			copy: '<p>Our products account for <b>73% and 40%</b> of North America’s phosphate and potash annual production, respectively.</p>'
		},
		{
			headline: 'Mosaic in <br />north america',
			copy: '<p>In Central Florida we have <b>11.7 million tonnes</b> of phosphate production capacity and a supply chain that can effectively reach the rest of the Americas.</p>'
		},
		{
			headline: 'Strategic joint ventures',
			copy: '<p>With 75% ownership, Mosaic is the operating partner of the Miski Mayo phosphate mining company joint venture. Our annual share of phosphate rock is approximately <b>3 million tonnes</b>, which contributes to our overall fertilizer production needs. </p><hr /><p>Our Ma’aden Wa’ad Al Shamal Phosphate Company joint venture in Saudi Arabia offers low-cost phosphate production with <b>strategic proximity</b> to croplands in Asia, including India’s 179 million hectares.</p>'
		}
		// ,
		// {
		// 	headline: 'PRODUCT SHIPMENTS',
		// 	copy: '<p>Mosaic delivers more than <b>18 million tonnes</b> of phosphate and potash products to more than 40 countries, including agricultural giants Brazil, Canada, China, India and the United States.</p>'
		// }
	];

	slidesData.forEach(function(slide, idx) {
		var slideHTML = '';

		slideHTML += '<div class="slide slide--' + idx + '">';
		slideHTML += '<div class="container">';

		slideHTML += '<div class="slide__text">';
		slideHTML += '<h1>' + slide.headline + '</h1>';
		slideHTML += slide.copy;
		slideHTML += '</div>';

		if (idx !== 5) {
			slideHTML += '<ul class="slide__legend">';
			slideHTML += '<li class="has-circle">Potash</li>';
			slideHTML += '<li class="has-circle">Phosphate</li>';
			slideHTML += '<li class="has-circle">Distribution center</li>';
			slideHTML += '<li class="has-circle">Joint venture</li>';
			slideHTML += '<li class="has-circle">office</li>';
			slideHTML += '</ul>';
		} else {
			slideHTML += '<ul class="slide__legend slide__legend--shipments">';
			slideHTML += '<li><b>Shipments to countries</b></li>';
			slideHTML += '<li class="has-circle">Less than 250,000 tonnes</li>';
			slideHTML += '<li class="has-circle">250,000 &mdash; 1m tonnes</li>';
			slideHTML += '<li class="has-circle">More than 1m tonnes</li>';
			slideHTML += '</ul>';
		}

		slideHTML += '</div>';
		slideHTML += '</div>';

		nextIdx = idx + 1;

		slidesCSS += '#mosaic-map-slideshow .slide--' + idx + ' {background-image: url('+desktopImages+'/slide'+nextIdx+'.jpg);}@media (max-width: 768px) {#mosaic-map-slideshow .slide--' + idx + ' {background-image: url('+mobileImages+'/slide'+nextIdx+'.jpg);}}';

		$slider.append(slideHTML);
	});

	$('head').append('<link rel="stylesheet" type="text/css" href="'+folderPath+'/mosaic-map-slideshow.min.css" />');
	$('<style>' + slidesCSS + '</style>').insertBefore("#mosaic-map-slideshow");

	$slider.slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
		speed: 750,
		autoplay: false,
		pauseOnHover: false,
		cssEase: 'ease-out',
		autoplaySpeed: 8000,
		prevArrow: '<div class="slick-arrow slick-prev"></div>',
		nextArrow: '<div class="slick-arrow slick-next"></div>',
	});

	$slider.slick("slickPlay");
	$slider.on('click', function(){
		$slider.slick("slickPause");
	});

})(jQuery);
