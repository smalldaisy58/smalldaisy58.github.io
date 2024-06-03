
		$(".slider-container").ikSlider({
		  speed: 500
		});
		$(".slider-container").on('changeSlide.ikSlider', function (evt) { console.log(evt.currentSlide); });

		var $preview = $('.preview a');

		function changeActivePreview(i) {
		  $(' ').removeClass('active');
		  $preview.eq(i).addClass('active');
		}

		$preview.on('mousedown', function(e) {
		  e.preventDefault();
		  var index = $(this).index();
		  $('.slider-container').ikSlider(index);
		});

		$('.slider-container').on('changeSlide.ikSlider', function(e) {
		  changeActivePreview(e.currentSlide);
		});

		changeActivePreview(0)

