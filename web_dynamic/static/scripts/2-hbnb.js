$(document).ready(function() {
	var selectedAmenities = [];
	$('input[type="checkbox"]').change(function() {
		var amenityId = $(this).attr('id');
		if ($(this).prop('checked')) {
			selectedAmenities.push(amenityId);
		}		
		else {
			selectedAmenities = selectedAmenities.filter(function(id) {
				return id !== amenityId;
				});
}
$('.popover h4').text(selectedAmenities.join(', '));
});
});

$('document').ready(function () {
	const url = 'http://0.0.0.0:5001/api/v1/status/';
	$.get(url, function (res) {
	if (res.status === 'OK') {
		$('#api_status').addClass('available');
    	}
	else {
		$('#api_status').removeClass('available');
    	}
});
});
