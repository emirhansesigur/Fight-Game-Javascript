// movement = volocity || 
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576;
let gravity = 4; // yercekimi degeri


ctx.fillRect(0, 0, canvas.width, canvas.height);

const backgraund = new ImageClass('./bg.jpg')


const player = new BasicStrct({ // player nesnesini olusturuyotuz. oyunun baslangicindaki position ve movement degerleri 
    position: {
        x: 100,
        y: 0
    },
    imgSource: './1.png',
    movement: {
        x: 0,
        y: 0
    },
    attackRectangleStartPoint: {
        x: 100,
        y: 50
    },
    color: 'red',
    attackBoxColor: 'white'
})

const enemy = new BasicStrct({ // enemy nesnesi olusturuldu
    position: {
        x: 700,
        y: 0
    },
    imgSource: './2.png',
    movement: {
        x: 0,
        y: 0
    },
    attackRectangleStartPoint: {
        x: -10,
        y: 50
    },
    color: 'blue',
    attackBoxColor: 'pink'
})

runGame();