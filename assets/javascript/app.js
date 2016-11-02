
	

/*var count = 61;
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

function answerSubmit(){
	var correctAnswer = document.getElementById("noodle3")
	if (correctAnswer.checked === true){
		score++;
		alert("Correct. Your answer is now" + score)

	}
}
  
*/


var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct=0;

var questions = [
       ["How do you know your pasta is cooked?", "Stare at it", "Throw it out the window", "Throw it on the wall", "C"],
       ["How old is Sparky?", "11","2","50","B"],
       ["What is Jeannie's favorite color?","Blue", "Purple", "Red", "B"],
  ];

function _(x) {
	return document.getElementById(x);
}  

function renderQuestion(){
	test = _("test");
	if(pos >= questions.length){
		test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct </h2>";
		_("test_status").innerHTML = "Test Completed";
		pos=0;
		correct=0;
		return false;
	}
	_("test_status").innerHTML = "(Question " +(pos+1) +" of " + questions.length +")";
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	test.innerHTML = "<h3>" + question + "</h3>";
    test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
	choices = document.getElementsByName("choices");
	for (var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		    }
		}
		if (choice == questions[pos][4]){
			correct++;
			
		}
	pos++;
	renderQuestion();
}
window.addEventListener("load", renderQuestion, false);






