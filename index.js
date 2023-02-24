const body = document.getElementsByClassName("body")
const computerChoice = document.getElementById("computerchoice")

function rock() {
    const possibleChoices = ["rock","paper","scissors"]

    const selNumber = Math.floor(Math.random() * 3);
    const randomChoice = possibleChoices[selNumber];
    
    const generateComputerChoice = () => {
        return randomChoice;
    };

    computerChoice.innerHTML = ("Computer chose: " + generateComputerChoice())
}