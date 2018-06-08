var count = 60;
var intervalId;
var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;

$(document).ready(function() {
startCountdown()
    $("#endContainer").hide();




function countDown() {

    count--;

    $('#timerNum').html(count + " Seconds");

    $('#doneButton').on("click", function () {

        count = 0;
        return;

    });

    if (count == -1) {

        timesUp();

        $('#gameContainer').hide();



    }

}

function startCountdown(){
    clearInterval(intervalId);
    intervalId=setInterval(countDown, 1000);

    
}

function timesUp(){

    var Q1 = $('input:radio[name="q1"]:checked').val();
    var Q2 = $('input:radio[name="q2"]:checked').val();
    var Q3 = $('input:radio[name="q3"]:checked').val();
    var Q4 = $('input:radio[name="q4"]:checked').val();
    var Q5 = $('input:radio[name="q5"]:checked').val();

    if(Q1 == undefined){
        unansweredCount++;
    }

    else if(Q1 == "1999"){
        correctCount++;
    
    }

    else{
        wrongCount++;
    }

    if(Q2 == undefined){
        unansweredCount++;
    }

    else if(Q2 == "Los Angeles, CA"){
        correctCount++;
    
    }

    else{
        wrongCount++;
    }

    if(Q3 == undefined){
        unansweredCount++;
    }

    else if(Q3 == "3"){
        correctCount++;
    
    }

    else{
        wrongCount++;
    }

    if(Q4 == undefined){
        unansweredCount++;
    }

    else if(Q4 == "1983"){
        correctCount++;
    
    }

    else{
        wrongCount++;
    }

    if(Q5 == undefined){
        unansweredCount++;
    }

    else if(Q5 == "11"){
        correctCount++;
    
    }

    else{
        wrongCount++;
    }

    $('#correctAnswers').html(correctCount);
    $('#wrongAnswers').html(wrongCount);
    $('#unanswered').html(unansweredCount);

    $("#endContainer").show();

}




    





});

