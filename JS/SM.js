
function playGame() {
    var symbols = ["🍒", "🍋", "🍇", "🍊", "🔔", "💎"];
    var draft1 = document.getElementById("draft1");
    var draft2 = document.getElementById("draft2");
    var draft3 = document.getElementById("draft3");
    var draft4 = document.getElementById("draft4");

    draft1.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    draft2.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    draft3.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    draft4.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    if (draft1.textContent === draft2.textContent && draft2.textContent === draft3.textContent && draft3.textContent === draft4.textContent) {
        updateMoney(true);
    } else {
        updateMoney(false);
    }
}

function updateMoney(isWinner) {
    var moneyElement = document.getElementById("Money");
    var currentMoney = parseInt(moneyElement.textContent.replace("$", "").trim(), 10);

    if (isWinner) {
        var winnings = [200, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000, 1000000];
        var randomWinning = winnings[Math.floor(Math.random() * winnings.length)];
        currentMoney += randomWinning;
        alert("Congratulations! You won " + randomWinning + "$!");
    } else {
        currentMoney -= 100; // Cost to play the game
    }

    moneyElement.textContent = currentMoney + "$";
}