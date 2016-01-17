$(function() {
    $('form').submit(function() {
		
        return turnToTheDarkSide();
    });
});

function turnToTheDarkSide() {
	
	var checked_characters = [];
	var light_side_detected = false;
	$("input[name='character']:checked").each(function(){ 
			console.log($(this).val());
			if($(this).val()=='dark_side') {
				checked_characters.push($(this).val());
			} else {
				light_side_detected = true;
				return;
			}		
		});
	
	if(checked_characters.length > 0 && !light_side_detected) {
		playImperialMarch();
		return false;
	} else {
		return true;
	}
}

function playImperialMarch() {
	var audio = new Audio('imperial_march.mp3');
	audio.play();
}