$(function() {

	// 	
	$('#portfolio_section img').on('click', function() {
		$('.enlargeImageModalSource').attr('src', $(this).attr('src')); // find the modal body, then, attach src to the src of the clicked image. 
		$('#enlargeImageModal').modal('show'); // show the modal, this modal functin is provided by bootstrap javascript. not native jquery.
		$('.modal-title').html($(this).attr('alt')); // attached the title. 
	});


	// form function
	$('#contact_form').on('submit', function(e) {
		e.preventDefault();
		alert('Your message has been received! Thank you.')
	})
});


/*
things to talk about
1. #portfolio_section , tag, smooth scrolling. 
2. javascript how it works.
3. mobile ready , columns in bootstrap, and @media function.
4. talk about rem vs em. 
	- em , inherit and scale relative to its parent
	- rem , inherit and scale relative to root html 

*/