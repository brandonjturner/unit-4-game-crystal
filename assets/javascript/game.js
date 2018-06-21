// setting up arrays for picking random numbers for computer choice and crystal value
$( document ).ready(function(){
var computerChoice = Math.floor((Math.random() * 100) +20);
var yellowGem = Math.floor(Math.random() * 12);
var blueGem = Math.floor(Math.random() * 12);
var greenGem = Math.floor(Math.random() * 12);
var redGem = Math.floor(Math.random() * 12);
var scoreTally = 0;
// setting up variables for wins and losses to be updated when user wins or losses. 
var wins = 0;
var losses = 0;

function reset () {
computerChoice = Math.floor((Math.random() * 100) +20);
$(".computerChoice").text(computerChoice);
yellowGem = Math.floor(Math.random() * 12);
blueGem = Math.floor(Math.random() * 12);
greenGem = Math.floor(Math.random() * 12);
redGem = Math.floor(Math.random() * 12);
scoreTally = 0;
$(".finalTally").text(scoreTally);

}

$(".computerChoice").text(computerChoice);

function winner () {
    alert("you win " + "computer guess was: " + computerChoice);
    wins++;
    $("#wins").text(wins);
    reset();   
    
}

function loser () {
    alert("you lose " + "computer guess was: " + computerChoice); 
    losses++;
    $("#losses").text(losses);
    reset();
}



$("#yellowBtn").on("click", function() {
   scoreTally = scoreTally + yellowGem;
    $(".finalTally").text(scoreTally);
    if(scoreTally === computerChoice) {
        winner();
       }
        else if (scoreTally > computerChoice) {
            loser();
    }
});

$("#blueBtn").on("click", function(){
    scoreTally = scoreTally + blueGem;
    $(".finalTally").text(scoreTally);
    if(scoreTally === computerChoice) {
        winner();
       }
        else if (scoreTally > computerChoice) {
            loser();
        }
});

$("#greenBtn").on("click", function(){
    scoreTally = scoreTally + greenGem;
    $(".finalTally").text(scoreTally);
    if(scoreTally === computerChoice) {
        winner();
       }
        else if (scoreTally > computerChoice) {
            loser();
        }
});

$("#redBtn").on("click", function(){
    scoreTally = scoreTally + redGem;
    $(".finalTally").text(scoreTally);
    if(scoreTally === computerChoice) {
        winner();
       }
        else if (scoreTally > computerChoice) {
            loser();
        }
});

});