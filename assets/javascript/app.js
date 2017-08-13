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
var question5 = {
	question : "Name the world's largest ocean?",
	options : ["Atlantic","Arctic"," Indian","Pacific"],
	answer : "Pacific" 

}
var question6 = {
	question : "What is the diameter of Earth? ",
	options : ["8000 miles","6000 miles"," 9000 miles","7000 miles"],
	answer : "8000 miles" 

}
var question7 = {
	question : "What is the capital city of Spain? ",
	options : ["Seville","Madrid"," Granada","Malaga"],
	answer : "Madrid" 

}

var questions_arr = [];
questions_arr.push(question1);
questions_arr.push(question2);
questions_arr.push(question3);
questions_arr.push(question4);
questions_arr.push(question5);
questions_arr.push(question6);
questions_arr.push(question7);
var currentQIndex;
var attemptAnswers;
var correctAnswers;
var timer;
var intervalId;

 function run() {
 	timer = 30;
 	$("#timer").html("<h2>" + timer + "</h2>")	
      intervalId = setInterval(decrement, 1000);
 }
//  The decrement function.
function decrement() {
      //  Decrease number by one.
      timer--;
      //  Show the number in the #show-number tag.
      $("#timer").html("<h2>" + timer + "</h2>");
      if (timer === 0) {
        //  ...run the stop function.
        clearInterval(intervalId);
        //  Alert the user that time is up.
        timeUp();
      }
    }

function startGame(){

currentQIndex=-1;
attemptAnswers=0;
correctAnswers=0;
var html =  " <div class='row' id='points_row'> "
			+ " <div class='col-md-6' id='timer'>Points</div> "
			+ "</div> "
			+ "	<div class='row' id='question_row'> "
			+ "		<div class='col-md-12' id='question'></div> "
			+ "	</div> "
        	+ "<div class='row'> " 
        	+ "  <div class='col-md-6' ><a href='#' id='option0' class='btn btn-info'>Info</a></div>"
        	+ "   <div class='col-md-6' ><a href='#' id='option1' class='btn btn-info'>Info</a></div>"
            + "</div> "
        	+ "<div class='row'> " 
        	+ "  <div class='col-md-6' ><a href='#' id='option2' class='btn btn-info'>Info</a></div>"
        	+ "   <div class='col-md-6' ><a href='#' id='option3' class='btn btn-info'>Info</a></div>"
            + "</div> "
            + "<div class='row' id='answer'></div>";

$(".quiz").html(html);
display(nextQuestion());

}  
//startGame();
 
function display(qs_display) {

	run();
	// body...
	$("#question").text(qs_display.question);
	console.log(qs_display);
	for(var i = 0; i<qs_display.options.length; i++)
	{
      $("#option"+i).text(qs_display.options[i]);
	}

};


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
	 		/*var html = 'Correct Answer:'.concat(correctAnswers)
	 		.concat(' Incorrect Ans: ').concat(attemptAnswers - correctAnswers)
	 		.concat(' Un answered Question').concat(questions_arr.length- attemptAnswers);*/

	 		 var html = "<div class='col-md-12' id='question'>" +'Correct Answer:'.concat(correctAnswers)+"</div>" 
	 		 +"<div class='col-md-12' id='question'>" +' Incorrect Ans: '.concat(attemptAnswers - correctAnswers)+"</div>" 
	 		 +"<div class='col-md-12' id='question'>" +' Un answered Question'.concat(questions_arr.length- attemptAnswers)+"</div>"
	 		 +"<div class='col-md-12 btn_start_over' id='question'>Start Over</div>"; 


	 					//' Incorrect Ans: ' + attemptAnswers - correctAnswers
	 					//+ ' Un answered Question' + questions_arr.length- attemptAnswers ;
	 		$(".quiz").html(html);
	 		
	 	}

}

$(".quiz").on("click", "div.btn_start_over,div.startbtn", function(){
		startGame();
});
/*$(".startbtn").on("click",function(){

});*/

$(".quiz").on("click", "a.btn-info",function(){
	 	var userSelectedAnswer = $(this).html();
	 	console.log(userSelectedAnswer);
		attemptAnswers++;
	 	if(evaluateAnswer(userSelectedAnswer)){
	 		correctAnswers++;
	 		//display image 
	 		var html = 'correct';
	 		//$("#answer").html(html);
	 		$( "#answer" ).html(html);

	 	}else{
	 		//show currect ans and image
	 		var html = 'your answer was wrong. Correct ans is';
	 		$( "#answer" ).html(html);
	 		//$("#answer").html(html);

	 	}
	 	console.log("currentQIndex:"+currentQIndex);
	 	console.log("attemptAnswers:"+attemptAnswers);
	 	console.log("correctAnswers:"+correctAnswers);
	 	//delay for 5 sec
	 	//display next question
	 	//check if more questions to show
	 	//wait(4000);
	 	//$("#answer").html('');
	 	timeUp();
	 	
	 		
    });

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

function evaluateAnswer(userSelectedAnswer){
	return questions_arr[currentQIndex].answer===userSelectedAnswer;
};

function nextQuestion(){
	currentQIndex++;
	return questions_arr[currentQIndex];
};


});