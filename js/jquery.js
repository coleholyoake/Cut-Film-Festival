$( document ).ready(function() {
 
  $('.preview').click(function(){
    	$(this).siblings('.toggle').slideToggle();
	});

  $( "#cross" ).hide();
	$( "#hamburger" ).click(function() {
		$( "#menu ul" ).slideToggle(function() {
		  $( "#hamburger" ).hide();
		  $( "#cross" ).show();
		});
	});

	$( "#cross" ).click(function() {
		$( "#menu ul" ).slideToggle(function() {
			$( "#cross" ).hide();
			$( "#hamburger" ).show();
		});
	});

	$('.column-s h3').click(function(){
    	$(this).siblings('.column-s ul').slideToggle();
	});

	$('.more').on('click', function (e){
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function () {
			window.location.hash = target;
		
		});
	});
});

