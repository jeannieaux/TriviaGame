
	








var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct=0;

var questions = [
       ["How do you know your pasta is cooked?", "Stare at it", "Throw it out the window", "Throw it on the wall", "C"],
       ["One barrel of wine can produce approximately how many glasses of wine?", "3000","1000","800","B"],
       ["Most European wines are named after:","The owner of the vineyard","Color of the grape","Geographical region", "C"],
       ["In Brazil a popular pizza topping is:", "Peas","Anchovies","Cucumbers","A"],
       ["Why would you use a bain-marie?","Make bread","To slow cook", "To call Marie","B"],
       ["According to the International Wines and Spirits Record (IWSR), in 2013 this country was the largest consumer of red wines:","Russia","China","France","B"],
       ["Peanuts are a type of:","legume","nut","fruit","A"],
       ["Are sweet potatoes and yams the same thing?","Yes","No","They're a combination of the two","B"],



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






