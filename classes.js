class BasicStrct { //Savascilarin temel yapisi: goruntu eklenmeden once savascilar dikdortgen seklindedir.
    constructor({ position, movement, attackRectangleStartPoint }) {
        this.health = 10;
        this.position = position;
        this.movement = movement;
        this.height = 160;
        this.width = 50;
        this.lastKey;
        this.attackBox = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            attackRectangleStartPoint, // attackRectangleStartPoint: attackRectangleStartPoint demek
            width: 100,
            height: 50
        };
        this.isAttacking;
    }

    drawPlayer(color, attackBoxColor) { // drowF= drow Fighter, her .... dongusunde gerekli pozisyonu ekrana yazilir.
        ctx.fillStyle = color;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height) // Savascilar burada verdigimiz boyutlardadir.

        if (this.isAttacking) { // this.isAttacking yazdık dikkat et // odev icin acıklama: eğer isAttacking true olursa calısacak ve atilan yumruklar gorunur hale gelecek
            ctx.fillStyle = attackBoxColor;
            ctx.fillRect(
                this.attackBox.position.x,
                this.attackBox.position.y,
                this.attackBox.width,
                this.attackBox.height) // Attack box cizilir
        }
    }

    update(color, attackBoxColor) { // move Fighter ile savascilarin harekete etmelerini saglariz.
        this.drawPlayer(color, attackBoxColor); // her cagirildiginda pozisyonu yenilenecek

        //vurus icin kullanilan yapiların guncellenmesi icin
        this.attackBox.position.x = this.position.x + this.attackBox.attackRectangleStartPoint.x;
        this.attackBox.position.y = this.position.y;

        this.position.y += this.movement.y;
        this.position.x += this.movement.x;

        if (this.position.y + this.height <= canvas.height) { // zemine geldiyse movement.y'yi 0 a esitle ve dursun "this.position.y " bunu
            this.position.y += gravity; // eger zemine ulasmadiysa gravity uygulamaya devam et.
        }
        else {
            this.movement.y = 0;
        }


        if (this.position.y < - this.height) { // tavandan daha üste gitmemesini saglar.
            this.position.y = - this.height;
        }
        if (this.position.x < 0) { // ekranin solundan disari cikmamasini sağlar
            this.position.x = 0;
        }
        if (this.position.x + this.width > canvas.width) { // ekranin sagindan disari cikmamasini sağlar
            this.position.x = canvas.width - this.width;
        }

    }

    attack() { // saldiri yapmayi saglar
        this.isAttacking = true;
        setTimeout(() => {  // atak tusunu basili tutulursa onu tekrar false degerine bir sure sonra almak icin.
            this.isAttacking = false;
        }, 100)
    }


}

