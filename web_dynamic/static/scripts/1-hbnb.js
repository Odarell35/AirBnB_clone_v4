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
