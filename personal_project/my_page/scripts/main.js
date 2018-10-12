$(function() {
	$('#portfolio_section img').on('click', function() {
		$('.enlargeImageModalSource').attr('src', $(this).attr('src'));
		$('#enlargeImageModal').modal('show');
		$('.modal-title').html($(this).attr('alt'));
	});

	$('#contact_form').on('submit', function(e) {
		e.preventDefault();
		alert('Your message has been received! Thank you.')
	})
});
