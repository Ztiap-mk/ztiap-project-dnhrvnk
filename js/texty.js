class Text{
    constructor(x, y, text) {
            this.x = x;
            this.y = y;
            this.text = text;
        }

        draw(){
            ctx.save()
            ctx.font = "30px 'Freckle Face'";
            ctx.fillText(this.text, this.x, this.y);
            ctx.restore()
        }
}

class priemer extends Text{
    constructor(){
        super(10, 40, "Priemer: ");
    }
}

class znamky extends Text{
    constructor() {
        super(10, 80, "Známky: ");
    }
}

class cas extends Text{
    constructor() {
        super(canvas.width - 200, 40, "Čas: ");
    }
}

class level extends Text{
    constructor() {
        super(canvas.width - 200, 80, "Level: ");
    }
}