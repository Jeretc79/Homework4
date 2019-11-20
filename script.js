var rightAnswers= ["11","Yes", 12, "All of the above","Yes/No"];



function submitQuiz(that) {
 var form = document.forms;
 var firstQ = that.elements.q1;
 for(var i=0; i <= firstQ.length; i++) {
  if(firstQ[i].checked) {
   // debugger;
    if(firstQ[i].value == rightAnswers[0]){
      alert("right answer!");
    }
  }

 }

 var firstQ = that.elements.q2;
 for(var i=0; i <= firstQ.length; i++) {
  if(firstQ[i].checked) {
   // debugger;
    if(firstQ[i].value == rightAnswers[0]){
      alert("right answer!");
    }
  }
 var firstQ = that.elements.q3;
 for(var i=0; i <= firstQ.length; i++) {
  if(firstQ[i].checked) {
    if(firstQ[i].value == rightAnswers[0]){
      alert("right answer!");
    }
  }
 var firstQ = that.elements.q4;
 for(var i=0; i <= firstQ.length; i++) {
  if(firstQ[i].checked) {
    if(firstQ[i].value == rightAnswers[0]){
      alert("right answer!");
    }
  }
 var firstQ = that.elements.q5;
 for(var i=0; i <= firstQ.length; i++) {
  if(firstQ[i].checked) {
    if(firstQ[i].value == rightAnswers[0]){
      alert("right answer!");
    }
  }
 debugger;
 alert(that);
 //console.log("your score");
}


