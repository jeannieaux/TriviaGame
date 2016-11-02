$(document).ready(function () {
	

var count = 61;
var counter= setInterval(timer, 1000);

function timer(){
	count -= 1;
	if (count == 20){
		alert("You have 20 seconds left)")
	}
	else if(count == 0){

		clearInterval(counter);
		alert("Sorry! Time's up!");
	}
     $("#num").html(count);
	}


});




