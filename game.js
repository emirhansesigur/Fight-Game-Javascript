// movement = volocity || 
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576;
let gravity = 4; // yercekimi degeri


ctx.fillRect(0, 0, canvas.width, canvas.height);

const player = new BasicStrct({ // player nesnesini olusturuyotuz. oyunun baslangicindaki position ve movement degerleri 
    position: {
        x: 0,
        y: 0
    },
    movement: {
        x: 0,
        y: 0
    },
    attackRectangleStartPoint: {
        x: 0,
        y: 0
    }
})

const enemy = new BasicStrct({ // enemy nesnesi olusturuldu
    position: {
        x: 80,
        y: 0
    },
    movement: {
        x: 0,
        y: 0
    },
    attackRectangleStartPoint: {
        x: -50,
        y: 0
    }
})

runGame();


