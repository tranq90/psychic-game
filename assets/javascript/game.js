var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var randomLetter = alphabet[Math.floor(Math.random() * 26)];
console.log(randomLetter + "1");

document.onkeyup = function (event) {
    for (var i = 0; i <= 26; i++) {
        if (event.key == alphabet[i]) {
            $("#wins").html("wins: " + wins);
            $("#losses").html("losses: " + losses);
            $("#guesses-left").html("guesses left: " + guessesLeft);
            $("#guesses-sofar").append(event.key + ", ");
            if (event.key != randomLetter) {
                guessesLeft--;
                if (guessesLeft == 0) {
                    var randomLetter = alphabet[Math.floor(Math.random() * 26)];
                    guessesLeft = 10;
                    losses++
                    console.log(randomLetter + "2");
                    $("#guesses-sofar").html("guesses so far: ");
                }
            } else if (event.key == randomLetter) {
                var randomLetter = alphabet[Math.floor(Math.random() * 26)];
                guessesLeft = 10;
                losses++
                console.log(randomLetter + "2");
                $("#guesses-sofar").html("guesses so far: ");
            }
        }
    }
};
