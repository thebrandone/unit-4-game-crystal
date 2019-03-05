$(document).ready(function () {
    //random number from 19-120 to be score you need to get
    var targetNumber = Math.floor(Math.random() * 121) + 19;
    //puts score onto page
    $("#number-to-guess").text(targetNumber);
    //counter that adds up the crystal number clicked
    var scoreCounter = 0;
    //puts score onto page
    $("#score").text(scoreCounter);
    //wins and losses and puts both onto page
    var wins = 0;
    $("#wins").text(wins);
    var losses = 0;
    $("#losses").text(losses);
    //array of the random numbers from 1-12 that each crystal can receive
    var numberOptions = [
        Math.floor(Math.random() * 13) + 1,
        Math.floor(Math.random() * 13) + 1,
        Math.floor(Math.random() * 13) + 1,
        Math.floor(Math.random() * 13) + 1];

    //fucntion to put crystals onto page
    function makeCrystals() {
        for (var i = 0; i < numberOptions.length; i++) {
            var imageCrystal = $("<img>");
            imageCrystal.addClass("crystal-image");
            imageCrystal.attr("src", "assets/images/crystal.jpg");
            imageCrystal.attr("data-crystalvalue", numberOptions[i]);
            $("#crystals").append(imageCrystal);
        }
    }
    //this function resets all the global variables for when the game is done
    function reset() {
        targetNumber = Math.floor(Math.random() * 121) + 19;
        $("#number-to-guess").text(targetNumber);
        scoreCounter = 0;
        $("#score").text(scoreCounter);
        numberOptions = [
            Math.floor(Math.random() * 13) + 1,
            Math.floor(Math.random() * 13) + 1,
            Math.floor(Math.random() * 13) + 1,
            Math.floor(Math.random() * 13) + 1];
        firstGame = false;
        console.log(numberOptions);
        makeCrystals();
    }
    //reset but with a win
    function winner() {
        reset();
        wins++;
        $("#wins").text(wins);
    }
    //reset but with a loss
    function loser () {
        reset();
        losses++;
        $("#losses").text(losses);
    }

    //we call make crystals, putting them onto the page
    makeCrystals();

    //when a crystal is clicked, take the data-crystalvalue and turn it into a number
    //once it's a number, add it to the score
    //check to see if the score is equal to the target score, if it is you win
    //if it's under, keep going. if it's over, you lose
    $(".crystal-image").on("click", function () {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        console.log(crystalValue);
        scoreCounter += crystalValue;
        $("#score").text(scoreCounter);
        if (scoreCounter === targetNumber) {
            winner();
        }

        else if (scoreCounter >= targetNumber) {
            loser();
        }

    });
});