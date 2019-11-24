var containerDiv = $(".container");
var contentDiv = $(".content");
var startDiv = $(".startDiv");
var highScores = $("#highScores");
var playerName = $(".playerName");
var backToGame = $("#backToGame");
var quesContentDiv = $(".quesContent");
var gameOverDiv = $(".gameOver");
var pTag = $("p");
var h1Tag = $("h1");
var timer = $("#timer");
var startButton = $(".start");
var score = $("#score");
var checkAnsDiv = $(".checkAnswer");
var questionTag = $(".question");
var secondsLeft = 95;

timer.text("Time: " + secondsLeft);
function setTime() {
  var timerInterval = setInterval(function (event) {
    secondsLeft--;
    timer.text("Time: " + secondsLeft);
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      gameOverLost();
      localStorage.setItem("score", secondsLeft);
      return;
    }
  }, 1000);
}
var questionDiv = $("<div>");
var questionTitle = $("<h2>");
var answer1 = $("<button class=‘answer’>");
var answer2 = $("<button class=‘answer’>");
var answer3 = $("<button class=‘answer’>");
var answer4 = $("<button class=‘answer’>");

startButton.on("click", function (event) {
  event.preventDefault();
  setTime();
  questionTitle.text(questions[0].title);
  questionDiv.append(questionTitle);
  answer1.text(questions[0].choices[0]);
  questionDiv.append(answer1);
  questionDiv.append("<br>");
  answer2.text(questions[0].choices[1]);
  questionDiv.append(answer2);
  questionDiv.append("<br>");
  answer3.text(questions[0].choices[2]);
  questionDiv.append(answer3);
  questionDiv.append("<br>");
  answer4.text(questions[0].choices[3]);
  questionDiv.append(answer4);
  questionDiv.append("<br>");
  containerDiv.attr("style", "text-align: left");
  contentDiv.html(questionDiv.html());
  localStorage.setItem("playerName", playerName);
});
var questions = [
  {
    title: "What is the name of the stylesheet that defines the presentation of an HTML of XML document?",
    choices: ["Java", "jQuery", "CSS", "PHP"],
    answer: "CSS"
  },
  {
    title: "What is the value called that defines colors such as the following: #FFFF00?",
    choices: ["RGB Value", "Decimal Value", "Color Value", "Hex Value"],
    answer: "Hex Value"
  },
  {
    title: "What is a Javascript element that represents either TRUE or FALSE?",
    choices: ["Variable", "Event", "Condition", "Boolean"],
    answer: "Boolean"
  },
  {
    title: "Which command is used to push changes to GitHub from terminal?",
    choices: ["git pwd", "git push add", "git init", "git push origin master"],
    answer: "git push origin master"
  },
  {
    title: "Which is the proper div class for a bootstrap element that spans 12 columns on a medium display?",
    choices: ["column-md-12", "column-12-md", "col-md-12", "col-12-md"],
    asnwer: "col-md-12"
  },
  ];

var newDiv = $("<div>");
var newTitle = $("<h2>");
var newanswer1 = $("<button class=‘answer’>");
var newanswer2 = $("<button class=‘answer’>");
var newanswer3 = $("<button class=‘answer’>");
var newanswer4 = $("<button class=‘answer’>");
var checkAns = $("<div class=‘checkAns’>");

containerDiv.append(checkAns);
function gameOverScore() {
  containerDiv.attr("style", "text-align: center");
  var gameOverScoreDiv = $("<div>");
  localStorage.setItem("score", secondsLeft)
  gameOverScoreDiv.html("<h1>" + "Game Over" + "</h1>" + "<p>" + "Score = " + localStorage.getItem("score") + "</p>");
  contentDiv.html(gameOverScoreDiv.html());
};
function gameOverLost() {
  timer.text("Time’s up!");
  containerDiv.attr("style", "text-align: center");
  var gameOverDiv = $("<div>");
  gameOverDiv.html("<h1>" + "Game Over" + "</h1>" + "<p>" + "Score = 0" + "</p>");
  contentDiv.html(gameOverDiv.html());
}
let i=1;
var len = questions.length;
$(contentDiv).on("click", ".answer", function(event) {
    event.preventDefault();
    console.log($(this).html());
    console.log(questions[i-1].answer);
    console.log(i-1);
    if (i >= 29) {
      console.log("end");
      gameOverScore();
      localStorage.setItem("score", secondsLeft);
      return;
    };
    if ($(this).html() === questions[i-1].answer) {
      checkAns.html("<p>Correct!</p>").delay(3000).hide(1);
    } else {
      checkAns.html("<p>Wrong!</p>").delay(3000).hide(1);
      secondsLeft -= 10;
    };
    checkAns.attr("style", "disply: block");
    i++
    checkAns.attr("style", "disply: block");
    newTitle.text(questions[i].title);
    newDiv.html(newTitle);
    newanswer1.text(questions[i].choices[0]);
    newDiv.append(newanswer1);
    newDiv.append("<br>");
    newanswer2.text(questions[i].choices[1]);
    newDiv.append(newanswer2);
    newDiv.append("<br>");
    newanswer3.text(questions[i].choices[2]);
    newDiv.append(newanswer3);
    newDiv.append("<br>");
    newanswer4.text(questions[i].choices[3]);
    newDiv.append(newanswer4);
    newDiv.append("<br>");
    contentDiv.html(newDiv.html());
});
var highScoresDiv = $("<div>");
var scoresOl = $("<ol>");
containerDiv.attr("style", "text-align: center");
scoresOl = ("<li>" + localStorage.getItem("playerName") + ": " + localStorage.getItem("score") + "</li>");
highScoresDiv.html("<h1>" + "High Scores" + "<h1>" + scoresOl);
highScores.on("click", function(event) {
  event.preventDefault();
  contentDiv.html(highScoresDiv.html());
  backToGame.attr("style", "display: block");
});
backToGame.on("click", function(event) {
  event.preventDefault();
  containerDiv.attr("style", "text-align: center");
  contentDiv.html(startDiv.html());
})