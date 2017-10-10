
$('figure').click(function() {
    var playerChoice   = converter(this.id),
        computerChoice = Math.floor(Math.random() * 3);
    

    $("#result").html(decideWinner(playerChoice,computerChoice));
});

function decideWinner(playerChoice, computerChoice) {

    var stringToPrint,
        dif = computerChoice - playerChoice;

    if (dif ==  2 ||
        dif == -1) {
        stringToPrint = "Player: " + converter(playerChoice) + " | " + "Computer: " + converter(computerChoice) + " | " + "Player WINS!";
    }
    else if (dif == -2 ||
             dif ==  1) {
        stringToPrint = "Player: " + converter(playerChoice) + " | " + "Computer: " + converter(computerChoice) + " | " + "Computer WINS !";
    }

    else
        stringToPrint = "Player: " + converter(playerChoice) + " | " + "Computer: " + converter(computerChoice) + " | " + "Tie !"
    
    return stringToPrint;
}

function converter(choice) {
    const choices = ["rock","paper","scissors"];
    var data;
    if (isNaN(choice)) {
        data = choices.indexOf(choice);     
    }
    else data = choices[choice];

    return data;
}

