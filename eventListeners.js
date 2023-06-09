const keys = { // tuslari kontrol etmemizi saglayan
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    w: {
        pressed: false
    },
    ArrowRight: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    },
    ArrowUp: {
        pressed: false
    },
    Space: {
        pressed: false
    },
    ArrowDown: {
        pressed: false
    }
}

window.addEventListener('keydown', (KeyCode) => {
    switch (KeyCode.key) {
        case 'd':
        case 'D':
            keys.d.pressed = true;
            player.lastKey = 'd';
            break;
        case 'a':
        case 'A':
            keys.a.pressed = true;
            player.lastKey = 'a';
            break;
        case 'w':
        case 'W':
            keys.w.pressed = true;
            break;
        case ' ':
            if (!keys.Space.pressed) {
                player.attack();
                keys.Space.pressed = true;
            }
            break;

        // enemy hareketleri    
        case 'ArrowRight':
            keys.ArrowRight.pressed = true;
            enemy.lastKey = 'ArrowRight';
            break;
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true;
            enemy.lastKey = 'ArrowLeft';
            break;
        case 'ArrowUp':
            keys.ArrowUp.pressed = true;
            break;
        case 'ArrowDown':
            if (!keys.ArrowDown.pressed) {
                enemy.attack();
                keys.ArrowDown.pressed = true;
            }
    }
})

window.addEventListener('keyup', (KeyCode) => {
    switch (KeyCode.key) {
        case 'd':
        case 'D':
            keys.d.pressed = false;
            break;
        case 'a':
        case 'A':
            keys.a.pressed = false;
            break;
        case 'w':
        case 'W':
            keys.w.pressed = false;
            // player.movement.y -= 200;
            break;
        case ' ':
            keys.Space.pressed = false;
            break;

        // enemy hareketleri    
        case 'ArrowRight':
            keys.ArrowRight.pressed = false;
            break;
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false;
            break;
        case 'ArrowUp':
            keys.ArrowUp.pressed = false;
            // enemy.movement.y -= 200;
            break;
        case 'ArrowDown':
            keys.ArrowDown.pressed = false;
            break;
    }

})
