$(document).on('ready', function() {


	// $("p").css("color","blue");

	$( "button.log" ).on( "click", function(){
		console.log("button was clicked");
	});


	$( "button.append" ).click(function(){
		$("p").append("<strong>THIS TEXT WAS APPENDED</strong>");
	});

	$( "button.appendmore" ).click(function(){
		$("p").append("<h1>THIS TEXT WAS APPENDED TOO</h1>");
	});


	$( "button.appendlist" ).click(function(){
		$("p").append("<ul><li> item1 </li> <li> item2 </li><li> item3 </li></ul>");
												
						
	});

		
	$( "a" ).click(function(){
		prompt("do you want to continue?");
	});



});


