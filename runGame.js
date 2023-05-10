function runGame() { // requestAnimationFrame ile ekrana video benzeri bir goruntu olusturacak sekilde basar.
    window.requestAnimationFrame(runGame);

    document.getElementById("playerHealth").innerHTML = player.health; // kalan saglık sayiları ekrana basilir.
    document.getElementById("enemyHealth").innerHTML = enemy.health;

    ctx.fillStyle = 'black'; // bu satir calisir, bir satir alttaki fillRect siyaha boyanir.
    ctx.fillRect(0, 0, canvas.width, canvas.height); // savascinin hareket ettigini gormek icin position x ve y degerleri ile oynanir. ekleme ya da cikartma sonucu eksi konumunun silinmedi ekrani anlik olarak siyah yapariz


    player.update(); // update icindeki ctx.fillStyle da savascilarin renginin kirmizi olmasini saglar.
    enemy.update();

    player.movement.x = 0; // default olarak 0 degerini veriyoruz. Diger durumlarda degisiyor. Bu satir olmazsa keyup da calismiyor.
    player.movement.y = 0;

    enemy.movement.x = 0;
    enemy.movement.y = 0;


    // player in hareketleri
    if (keys.d.pressed && player.lastKey === 'd') { // d ye basilirken a basilirse lastKey false olacagindan d calisacaktir.
        player.movement.x = 10;
    } else if (keys.a.pressed && player.lastKey === 'a') {
        player.movement.x = -10;
    }
    if(keys.w.pressed){ 
        player.movement.y -= 50;
        setTimeout(() => { 
            keys.w.pressed = false;
        }, 50);
    }

    // enemy nin hareketleri
    if (keys.ArrowRight.pressed) { // d ye basilirken a basilirse lastKey false olacagindan d calisacaktir.
        enemy.movement.x = 10;
    } else if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
        enemy.movement.x = -10;
    }
    if(keys.ArrowUp.pressed){ 
        enemy.movement.y -= 50;
        setTimeout(() => { 
            keys.ArrowUp.pressed = false;
        }, 50);
    }

    // altta yer alan if bologunda saldiri tutsuna basildigi anda birbirine dokunuyorlar mi kontrol ederiz
    // isAttacking true ise saldiri tusuna basilmis anlamina gelir
    if (player.isAttacking &&
        player.attackBox.position.x + player.attackBox.width >= enemy.position.x &&
        player.attackBox.position.x <= enemy.position.x + enemy.width &&
        player.attackBox.position.y + player.attackBox.height >= enemy.position.y &&
        player.attackBox.position.y <= enemy.position.y + enemy.height
    ) {
        player.isAttacking = false; // bir kez vurus yapabilmesi icin false yapariz

        if (!isGameOver) { // eger oyun bitmediyse
            enemy.health--; // enemy nin can degeri azalir. Yani oyun devam ediyordur.
            if (enemy.health === 0) {
                isGameOver = true; // oyun bitti Enemy kaybetti.
            }
        }
    }

    // ENEMY ICIN SALDIRI
    if (enemy.isAttacking &&
        enemy.attackBox.position.x + enemy.attackBox.width >= player.position.x &&
        enemy.attackBox.position.x <= player.position.x + player.width &&
        enemy.attackBox.position.y + enemy.attackBox.height >= player.position.y &&
        enemy.attackBox.position.y <= player.position.y + player.height
    ) {
        enemy.isAttacking = false;

        if (!isGameOver) {
            player.health--;
            if (player.health === 0) {
                isGameOver = true; // oyun bitti Player kaybetti.
            }
        }
    }


    playerOrEnemyWon();
}
