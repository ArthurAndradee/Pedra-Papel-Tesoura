const body = document.getElementsByClassName("body")
const computerChoice = document.getElementById("computerchoice")
const playerchoice = document.getElementById("playerchoice")

const winnerName = document.getElementById("winnerName")
const winnerImage = document.getElementById("winnerImg")

function rock() {
    const possibleChoices = ["rock","paper","scissors"]

    const selNumber = Math.floor(Math.random() * 3);
    const randomChoice = possibleChoices[selNumber];
    
    const generateComputerChoice = () => {
        return randomChoice;
    };

    playerchoice.innerHTML = ("Player chose: rock")
    computerChoice.innerHTML = ("Computer chose: " + generateComputerChoice())

    let playerScore

    switch (selNumber) {
        case 0:
            playerScore = ("Tie! Both chose rock")
            winnerImage.src = "https://i.kym-cdn.com/entries/icons/original/000/012/978/cover1.jpg"          
            break;
        case 1:
            playerScore = ("Computer sufocated rock beep boop");
            winnerImage.src = "https://preview.redd.it/lb1iyzt6tl631.jpg?auto=webp&s=fb7ca6ac1c57ba3c62010ee988f8052534085889"
            break;
        case 2:
            playerScore = ("Congratulations! You won");
            winnerImage.src = "https://preview.redd.it/u2d70mfxhlo81.jpg?auto=webp&s=e6917e65619766074edbc51f31a67f44dd86b87a"
    }

    winnerName.innerHTML = (playerScore)
}

function paper() {
    const possibleChoices = ["rock","paper","scissors"]

    const selNumber = Math.floor(Math.random() * 3);
    const randomChoice = possibleChoices[selNumber];
    
    const generateComputerChoice = () => {
        return randomChoice;
    };

    playerchoice.innerHTML = ("Player chose: paper")
    computerChoice.innerHTML = ("Computer chose: " + generateComputerChoice())

    let playerScore

    switch (selNumber) {
        case 1:
            playerScore = ("Tie! Both chose paper")
            winnerImage.src = "https://i.kym-cdn.com/entries/icons/original/000/012/978/cover1.jpg"          
            break;
        case 2:
            playerScore = ("Computer cut paper beep boop");
            winnerImage.src = "https://preview.redd.it/lb1iyzt6tl631.jpg?auto=webp&s=fb7ca6ac1c57ba3c62010ee988f8052534085889"
            break;
        case 0:
            playerScore = ("Congratulations! You won");
            winnerImage.src = "https://preview.redd.it/u2d70mfxhlo81.jpg?auto=webp&s=e6917e65619766074edbc51f31a67f44dd86b87a"
    }

    winnerName.innerHTML = (playerScore)
}

function scissors() {
    const possibleChoices = ["rock","paper","scissors"]

    const selNumber = Math.floor(Math.random() * 3);
    const randomChoice = possibleChoices[selNumber];
    
    const generateComputerChoice = () => {
        return randomChoice;
    };

    playerchoice.innerHTML = ("Player chose: scissors")
    computerChoice.innerHTML = ("Computer chose: " + generateComputerChoice())

    let playerScore

    switch (selNumber) {
        case 2:
            playerScore = ("Tie! Both chose scissors")
            winnerImage.src = "https://i.kym-cdn.com/entries/icons/original/000/012/978/cover1.jpg"          
            break;
        case 0:
            playerScore = ("Computer smashed scissors beep boop");
            winnerImage.src = "https://preview.redd.it/lb1iyzt6tl631.jpg?auto=webp&s=fb7ca6ac1c57ba3c62010ee988f8052534085889"
            break;
        case 1:
            playerScore = ("Congratulations! You won");
            winnerImage.src = "https://preview.redd.it/u2d70mfxhlo81.jpg?auto=webp&s=e6917e65619766074edbc51f31a67f44dd86b87a"
    }

    winnerName.innerHTML = (playerScore)
}