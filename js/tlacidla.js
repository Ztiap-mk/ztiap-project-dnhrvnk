class tlacidla {
    constructor(x1, y1, x2, y2){
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
    move(){}
    draw(){
        ctx.save();
        ctx.beginPath();
        ctx.shadowBlur = 20;
        ctx.shadowColor = "black";
        ctx.rect(this.x1, this.y1, this.x2, this.y2);
        ctx.fillStyle = "#DF9D4F";
        ctx.fill();
        ctx.restore();
    }
}

class tlacidlo1_menu extends tlacidla{
    constructor(){
        super(70, 200, 300, 90);
    }
}

class tlacidlo2_menu extends tlacidla{
    constructor(){
        super(70, 320, 300, 90);
    }
}

class tlacidlo1_prehra extends tlacidla{
    constructor(){
        super(70, 270, 300, 90);
    }
}

class tlacidlo2_prehra extends tlacidla{
    constructor(){
        super(70, 390, 300, 90);
    }
}