function spinWheel() {
    var numbers = Array.from({ length: 37 }, (_, i) => i); // Numbers 0 to 36
    var colors = ["grün", "rot", "schwarz"];
    var wheel = document.getElementById("wheel");
    var result = document.getElementById("result");
    var moneyElement = document.getElementById("money");

    // Generate random number and color
    var randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    var randomColor = colors[(randomNumber === 0) ? 0 : (randomNumber % 2 === 0) ? 2 : 1];

    wheel.textContent = randomNumber;
    wheel.style.backgroundColor = (randomColor === "rot") ? "red" : (randomColor === "schwarz") ? "black" : "green";
    wheel.style.color = "white";
    result.textContent = `Ergebnis: ${randomNumber} (${randomColor})`;

    // Update money based on the bet
    var betAmount = parseInt(document.getElementById("betAmount").value, 10);
    var betType = document.getElementById("betType").value;
    var betNumber = parseInt(document.getElementById("betNumber").value, 10);
    var currentMoney = parseInt(moneyElement.textContent.replace("Geld: ", "").replace("$", ""), 10);

    if (checkWin(randomNumber, randomColor, betType, betNumber)) {
        var winnings = calculateWinnings(betAmount, betType);
        currentMoney += winnings;
        alert(`Gewonnen! Sie erhalten ${winnings}$`);
    } else {
        currentMoney -= betAmount;
        alert(`Verloren! Sie verlieren ${betAmount}$`);
    }

    moneyElement.textContent = `Geld: ${currentMoney}$`;
}

function checkWin(randomNumber, randomColor, betType, betNumber) {
    switch (betType) {
        case "red":
            return randomColor === "rot";
        case "black":
            return randomColor === "schwarz";
        case "green":
            return randomColor === "grün";
        case "even":
            return randomNumber !== 0 && randomNumber % 2 === 0;
        case "odd":
            return randomNumber % 2 !== 0;
        case "number":
            return randomNumber === betNumber;
        default:
            return false;
    }
}

function calculateWinnings(betAmount, betType) {
    switch (betType) {
        case "red":
        case "black":
        case "even":
        case "odd":
            return betAmount * 2;
        case "green":
            return betAmount * 14;
        case "number":
            return betAmount * 36;
        default:
            return 0;
    }
}

document.getElementById("betType").addEventListener("change", function () {
    var betType = this.value;
    var betNumberInput = document.getElementById("betNumber");
    if (betType === "number") {
        betNumberInput.style.display = "inline";
    } else {
        betNumberInput.style.display = "none";
    }
});