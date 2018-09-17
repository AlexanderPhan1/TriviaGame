var panel = $("#play-area");

$(document).on("click", "#start", function(event){
  game.start();
});

$(document).on("click", "#done", function(event){
  game.done();
});

var questions = [{
	question: "What year did Super Smash Bros started?",
	choices: ["1999", "2001", "2008", "2014"],
	correctAnswer: "1999"

}, {	

	question: "Which character was voiced by the creator of Smash Bros?",
	choices: ["King Dedede", "Marth", "Cloud", "Meta Knight"],
	correctAnswer: "King Dedede"

}, {

	question: "What character was considered in Melee, but didn't make it?",
	choices: ["Pichu", "James Bond", "Mewtwo", "Roy"],
	correctAnswer: "James Bond"

}, {

	question: "Which character was the first third party to join in Brawl?",
	choices: ["Sonic", "Snake", "Cloud", "Sora"],
	correctAnswer: "Snake"

}, {

	question: "Which character is the oldest?",
	choices: ["Mario", "Sonic", "Megaman", "Pacman"],
	correctAnswer: "Pacman"

}];

var game = {
	correct: 0,
	incorrect: 0,
	counter: 60,

  countdown: function() {
  	game.counter--;
  	$("#counter-number").html(game.counter);

  	if (game.counter === 0) {
  		alert("TIME!");
  		game.done();

  	}
  },

  start: function() {
  	timer = setInterval(game.countdown, 1000);
  	$('#subcontainer').prepend('<h2>Time Remaining: <span id="counter-number">60</span> Seconds</h2>');
  	$("#start").remove();

  	for (var i = 0; i < questions.length; i++) {
      panel.append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].choices.length; j++){
        panel.append('<input type="radio" name ="question' + '-' + i + '"value="' + questions[i].choices[j] + '">' + questions[i].choices[j]);
        }
  		}
  		panel.append("<button id='done'>COMPLETE!</button>");
      
  	},

  	done: function() {

  		$.each($("input[name='question-0']:checked"), function() {
  			if ($(this).val() == questions[0].correctAnswer) {
  				console.log(this);
  				  game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-1']:checked"), function() {
  			if ($(this).val() == questions[1].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-2']:checked"), function() {
  			if ($(this).val() == questions[2].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-3']:checked"), function() {
  			if ($(this).val() == questions[3].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-4']:checked"), function() {
  			if ($(this).val() == questions[4].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});

  		this.results();
  	},


  	  results:function() {
  	  	clearInterval(timer);

  	  	$("#subcontainer h2").remove();
  	   panel.html("<h2>GAME!</h2>");
  	   panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
  	   panel.append("<h3>Inncorrect Answers: " + this.incorrect + "</h3>");
  	   panel.append("<h3>Answers that was still blank: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  	  
  	  }

  };
