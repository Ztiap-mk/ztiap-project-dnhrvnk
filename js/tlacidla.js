class tlacidla {
    constructor(x1, y1, x2, y2){
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.akcia = undefined;
    }
    move(){}
    draw(){
        ctx.save();
        ctx.beginPath();
        ctx.shadowBlur = 20;
        ctx.shadowColor = "grey";
        ctx.rect(this.x1, this.y1, this.x2, this.y2);
        ctx.fillStyle = "#DF9D4F";
        ctx.fill();
        ctx.restore();
    }

    onclick(x,y) {
        if (x > this.x1  && x < this.x1 + this.x2 && 
            y > this.y1 && y < this.y1 + this.y2){
            prave_scena = this.akcia
            }
    }
}

class tlacidlo1_menu extends tlacidla{
    constructor(){
        super(70, 200, 300, 90);
        this.akcia = 1
        level_scena.vymaz();
        level_scena.pridaj()
    }
}

class tlacidlo2_menu extends tlacidla{
    constructor(){
        super(70, 320, 300, 90);
        this.akcia = 4
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
        this.akcia = 0;
    }
}
class tlacidlo1_pravidla extends tlacidla{
    constructor(){
        super(120, 450, 350, 90);
        this.akcia = 1;
    }
}

class tlacidlo2_pravidla extends tlacidla{
    constructor(){
        super(520, 450, 350, 90);
        this.akcia = 0;
    }
}