$(document).on('ready', function() {




	$("p").mouseover(function(){
	    $("p").css("background-color", "pink");
	});

	$("p").mouseout(function(){
    $("p").css("background-color", "white");
	});

	$("h1").append("!");


	

	$('a').on('click', function () {
       var ask = confirm('Are you sure?');
       if (ask === true) {
       		console.log("TRUE!");     		
       }
       else {
       	// return false;
       	$(this).remove();
       }
       	

    });
	



});

