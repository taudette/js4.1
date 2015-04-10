$(document).on('ready', function() {


	
	

	$("button.bab").click(function(){
		$(".button-wrapper").append("<button class ='pop'>click me to close this stupid thing</button>");
		$(".pop").click(function(){
			$(this).remove();
		});
	
	});


	
		



});

