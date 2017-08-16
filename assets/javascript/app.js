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

$(".quiz").on("click", "div.btn_start_over,div.startbtn", function(){
		startGame();
});

function startGame(){

	currentQIndex=-1;
	attemptAnswers=0;
	correctAnswers=0;
	display(nextQuestion());
}  

//Displays the provided Question 
function display(qs_display) {

	
	var html =" <div class='row' id='points_row'> "
			+ " <div class='col-md-6' id='timer'></div> "
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
                        + "</div> ";

	$(".quiz").html(html);
	
	$("#question").text(qs_display.question);
	console.log(qs_display);
	for(var i = 0; i<qs_display.options.length; i++)
	{
        $("#option"+i).text(qs_display.options[i]);
	}
	run();
	
};

//Returns Next Question 
function nextQuestion(){
	currentQIndex++;
	return questions_arr[currentQIndex];
};

function run() {
 	timer = 30;
 	$("#timer").html("<h2> Time Remaining : " + timer + " Seconds</h2>")	
    intervalId = setInterval(decrement, 1000);
 };
//  The decrement function.
 function decrement() {
     
      timer--;
      $("#timer").html("<h2> Time Remaining : " + timer + " Seconds</h2>");
      if (timer === 0) {
        //  clear interval.
        clearInterval(intervalId);
       
        var html=
        "<div class='answer'>"
        	 + "<div class='wrongAnswerText'> "
      		    + " Time is out !!<br> Correct answer was: "+questions_arr[currentQIndex].answer
        	 +"</div>"
         	 + "<br><img src='./assets/images/"+questions_arr[currentQIndex].answer+".png' height='300' width='140'> </img>"
                 +"</div>"
		$(".quiz").html(html);
        wait(function(){
			timeUp();
	 	},4);
       }
    };

var wait = function( callback, seconds){
   return window.setTimeout( callback, seconds * 1000 );
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
	 		//Show the Game result
	 		 var html = "<div class='col-md-12' id='question'>" +'Correct Answer:'.concat(correctAnswers)+"</div>" 
	 		 +"<div class='col-md-12' id='question'>" +' Incorrect Ans: '.concat(attemptAnswers - correctAnswers)+"</div>" 
	 		 +"<div class='col-md-12' id='question'>" +' Un answered Question'.concat(questions_arr.length- attemptAnswers)+"</div>"
	 		 +"<div class='col-md-12 btn_start_over' id='question'>Start Over</div>"; 

	 		$(".quiz").html(html);
	 		
	 	}

};

//Get called when user picks a answer
$(".quiz").on("click", "a.btn-info",function(){

		clearInterval(intervalId);
	 	var userSelectedAnswer = $(this).html();
	 	console.log(userSelectedAnswer);
		attemptAnswers++;
	 	if(evaluateAnswer(userSelectedAnswer)){
	 		correctAnswers++;
	 		
	 		var html=
	        "<div class='answer'>"
	        	 + "<div class='correctAnswerText'> "
	      		  	 + " Your answer is Correct: "+questions_arr[currentQIndex].answer
	        	 +"</div>"
	         	 + "<br><img src='./assets/images/"+questions_arr[currentQIndex].answer+".PNG' height='300' width='140'> </img>"
	        +"</div>"
            
     		$(".quiz").html(html);
	 		

	 	}else{
	 		//show currect ans and image
	 		var html=
	        "<div class='answer'>"
	        	 + "<div class='wrongAnswerText'> "
	      		  	 + " Your answer is wrong.<br> Correct answer is : "+questions_arr[currentQIndex].answer
	        	 +"</div>"
	         	 + "<br><img src='./assets/images/"+questions_arr[currentQIndex].answer+".PNG' height='300' width='140'> </img>"
	        +"</div>"

			$(".quiz").html(html);
	 		
	 	}
	 	console.log("currentQIndex:"+currentQIndex);
	 	console.log("attemptAnswers:"+attemptAnswers);
	 	console.log("correctAnswers:"+correctAnswers);
	 	//delay for few sec
	 	//display next question
	 	wait(function(){
			timeUp();
	 	},4);
	 	
	 		
    });
//Returns in the answer selected for the question is correct
function evaluateAnswer(userSelectedAnswer){
	return questions_arr[currentQIndex].answer===userSelectedAnswer;
};

});
