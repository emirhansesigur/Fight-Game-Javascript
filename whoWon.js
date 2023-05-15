let gameTime = 60; // oyunu kac saniye surecegini belirler
let isGameOver = false;
let isTimeout = false;
let healthDifference; //+ ise player, - ise enemy, 0 ise berabere


function gameTimeFun() { // oyun bittiyse sure durur.
    if (gameTime >= 0 && !isGameOver) {
        if (gameTime == 0) {
            isTimeout = true;
            isGameOver = true;
        }
        document.getElementById("time").innerHTML = gameTime;
        gameTime--;
        setTimeout(gameTimeFun, 1000);
    }
}
setTimeout(gameTimeFun, 1000);

function playerOrEnemyWon() {
    healthDifference = player.health - enemy.health; // 10 - 0 = 10
    if (isTimeout) { // Sure dolması durumunca
        document.querySelector('#winnerStatus').style.display = 'flex';
        healthDifference = player.health - enemy.health; // 10 - 0 = 10

        // vurus ustunluguyle player
        if (healthDifference > 0) {
            document.querySelector('#winnerStatus').innerHTML = "Zaman Doldu - PLAYER KAZANDI";
        }
        // vurus ustunluguyle e
        else if (healthDifference < 0) {
            document.querySelector('#winnerStatus').innerHTML = "Zaman Doldu - ENEMY KAZANDI";
        }
        // berabere
        else {
            document.querySelector('#winnerStatus').innerHTML = "Zaman Doldu - BERABERE";
        }
    }
    else if (enemy.health == 0) { // 
        document.querySelector('#winnerStatus').style.display = 'flex';
        document.querySelector('#winnerStatus').innerHTML = "PLAYER KAZANDI";
    }
    else if (player.health == 0) { // 
        document.querySelector('#winnerStatus').style.display = 'flex';
        document.querySelector('#winnerStatus').innerHTML = "ENEMY KAZANDI";
    }
}

// sure dolabilir. -> isGameOver => true dur
// vurus ustunluguyle f 
// vurus ustunluguyle e
// berab

// player kazanir 
// enemy kazanir
