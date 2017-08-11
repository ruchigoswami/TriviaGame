$(document).ready(function() {
var question1 = {
	question : "Name the world's biggest island",
	options : ["Asia","Greenland","North America","South America"],
	answer : "Greenland"

}
var question2 = {
	question : "What is the world's longest river? ",
	options : ["Amazon","Neil","Yellow River","Lena River"],
	answer : "Amazon" 

}

var question3 = {
	question : "The World Largest desert is ? ",
	options : ["Thar","Kalahari","Sahara","Sonoran"],
	answer : "Sahara" 

}
var question4 = {
	question : "Who was the first person to walk on the moon? ",
	options : ["John Glenn"," Jim Lowell"," Neil Armstrong","Thomas Paine"],
	answer : "Neil Armstrong" 

}
var question4 = {
	question : "Name the world's largest ocean?",
	options : ["Atlantic","Arctic"," Indian","Pacific"],
	answer : "Pacific" 

}
var question4 = {
	question : "What is the diameter of Earth? ",
	options : ["8000 miles","6000 miles"," 9000 miles","7000 miles"],
	answer : "8000 miles" 

}
var question4 = {
	question : "What is the capital city of Spain? ",
	options : ["Seville","Madrid"," Granada","Malaga"],
	answer : "Madrid" 

}
var point = 0;
var questions_arr = [];
questions_arr.push(question1);
questions_arr.push(question2);
questions_arr.push(question3);
questions_arr.push(question4);
var currentQIndex=-1;
var attemptAnswers=0;
var correctAnswers=0;
var number = 30;
var intervalId;

 function run() {
      intervalId = setInterval(decrement, 1000);
 }

//  The decrement function.
function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#timer").html("<h2>" + number + "</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        clearInterval(intervalId);;

        //  Alert the user that time is up.
        timeUp();
      }
    }

  
 
function display(qs_display) {

	number = 30;
	run();
	// body...
	$("#question").text(qs_display.question);
	console.log(qs_display);
	for(var i = 0; i<qs_display.options.length; i++)
	{
      $("#option"+i).text(qs_display.options[i]);
	}

};
display(nextQuestion());

function timeUp(){
	console.log("timeup:");
	console.log("currentQIndex:"+currentQIndex);
	console.log("attemptAnswers:"+attemptAnswers);
	console.log("correctAnswers:"+correctAnswers);
	//check if more questions to show
	 	if(questions_arr.length-1>currentQIndex){
	 		display(nextQuestion());	
	 	}
	 	else{
	 		//game over
	 		alert("game over");
	 	}

}

$(".btn").on("click",function(){
	 	var userSelectedAnswer = $(this).html();
	 	console.log(userSelectedAnswer);
		attemptAnswers++;
	 	if(evaluateAnswer(userSelectedAnswer)){
	 		correctAnswers++;
	 		//display image 
	 		var html = 'correct';
	 		$("#answer").html(html);

	 	}else{
	 		//show currect ans and image
	 		var html = 'your answer was wrong. Correct ans is';
	 		$("#answer").html(html);

	 	}
	 	console.log("currentQIndex:"+currentQIndex);
	 	console.log("attemptAnswers:"+attemptAnswers);
	 	console.log("correctAnswers:"+correctAnswers);
	 	//delay for 5 sec
	 	//display next question
	 	//check if more questions to show
	 	if(questions_arr.length-1>currentQIndex){
	 		display(nextQuestion());	
	 	}
	 	else{
	 		alert("game over");
	 	}
	 	
	 		
    });

function evaluateAnswer(userSelectedAnswer){
	return questions_arr[currentQIndex].answer===userSelectedAnswer;
};

function nextQuestion(){
	currentQIndex++;
	return questions_arr[currentQIndex];
};


});