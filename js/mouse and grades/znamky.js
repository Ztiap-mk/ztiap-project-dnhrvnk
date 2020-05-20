class Znamky{
  constructor(id, x2, y2, ktore_y) {
    this.image = document.getElementById(id);
    this.x = Math.floor(Math.random() * (canvas.width - 80)+20);
    this.y = Math.floor(Math.random() * (canvas.height/3) + canvas.height*1.7/3 - 10)
    this.x2 = x2;
    this.y2 = y2;
    this.cas = 0;
    this.ktore_x = 0;
    this.ktore_y = ktore_y;
  }
  
  move(delta){
    var myska = sceny[1][2];
    for(i = 12; i < sceny[1].length; i++){
        var chytenie_znamky = this.x+10 >= myska.actX || this.x+ this.x2+10 <= myska.actX ||    //chytenie známky returne 0, ak nastala
                              this.y+10 >= myska.actY || this.y + this.y2+10 <= myska.actY;     //kolízia medzi znamkou a myškou
        if(!chytenie_znamky){                //ak kolízia nastala
          this.x -= myska.jednotkoveX*12;    //tak ju posunieme na x a y osi
          this.y -= myska.jednotkoveY*12;    //po jednotkovom vektore myšky - v smere akom ju myška chytila
          myska.dole = false;                //a myska sa vráti hore
        }
        if(sceny[1][i].y <= canvas.height/2-10){        //keď je už známka vynesená nad nejakú pomyselnú čiaru
            if(this["image"].id == "bonus"){            //ak to je bonus
              sceny[1][8].bonus();                      //pripočíta sa čas
              sceny[1].splice(sceny[1].length - 1, 1);  //odstráni sa zozonamu
              return;
            }
            sceny[1][4].vypocet_priemeru(sceny[1][i]);    //pripočíta sa k priemeru
            sceny[1][6].zmena_textu();                    //zmena textu počtu chytených známok
            sceny[1].splice(i, 1);                        //známka sa vymaže zo zoznamu
            if(zapnute) body_zvuk.play();                 //spustí sa zvuk
        }
        if(!chytenie_znamky && this["image"].id == "znamkaFX" && !koniec_hry){     //ak sa chytila FX známka
            zrusenie_levelu();                                                     //tak sa zruší hranie levelu
            prave_scena = 2;   
        }
    }

    this.cas += delta;
    if(pocet_levelov == 1) var ako_rychlo = 0.5;
    else if(pocet_levelov == 2) var ako_rychlo = 0.3;   //inicializovanie rýchlosti menenia farby známky
    else var ako_rychlo = 0.1;

    if(this.cas >= ako_rychlo){                     //farba známky sa mení
      this.ktore_x = Math.floor(Math.random()*4)    //podľa toho v akom sme leveli
      this.cas = 0;
    }
  };

  draw(delta) {
    ctx.save()
    ctx.drawImage(this.image, 598*this.ktore_x, 640*this.ktore_y, 598, 640, this.x, this.y, this.x2, this.y2);
    ctx.restore()
  };

  kolizia(){   //funkcia na random generovanie pozície známky - bude sa rekurzívne spúšťať dokým sa budú prekrývať
    var zvuk = sceny[1][1];
    for(i = 12; i < sceny[1].length; i++){
      var obj = sceny[1][i];        //konkrétna známka
      if(obj == this) continue;     //ak je to ten istý objekt, tento objekt sa nemusí kontrolovať
      //testy kolízie returnú 0 ak sa prekryvaju - nechcem aby sa mi prekrývali ani s ikonou zvuku
      var je_kolizia_znamok = this.x >= obj.x + obj.x2 || this.x + this.x2 <= obj.x ||
                              this.y >= obj.y + obj.y2 || this.y + this.y2 <= obj.y;
      var je_kolizia_zvuk = this.x >= zvuk.x + zvuk.velkost || this.x + this.x2 <= zvuk.x ||
                            this.y >= zvuk.y + zvuk.velkost || this.y + this.y2 <= zvuk.y;
      if(!je_kolizia_znamok || !je_kolizia_zvuk){                                      //a ak nastala kolízia
        this.x = Math.floor(Math.random() * (canvas.width - 80)+20);                   //tak sa vygenerujú nové x a y
        this.y = Math.floor(Math.random() * (canvas.height/3) +canvas.height*1.7/3 - 10)
        this.kolizia()     //a skontroluje sa to znova, lebo sa mohli x/y vygenerovať tak, že sa zase prekrývajú
      }
    }
  };
}

class znamkaA extends Znamky{
  constructor() {
    super("znamky", 70, 70, 0);
  }
}

class znamkaB extends Znamky{
  constructor() {
    super("znamky", 70, 70, 1);
  }
}

class znamkaC extends Znamky{
  constructor() {
    super("znamky", 70, 70, 2);
  }
}

class znamkaD extends Znamky {
  constructor() {
    super("znamky",70, 70, 3);
  }
}

class znamkaE extends Znamky{
  constructor() {
    super("znamky", 50, 70, 4);
  }
}

class znamkaFX extends Znamky{
  constructor() {
    super("znamkaFX", 60, 60, 5);
  }
  draw(){
    ctx.save()
    ctx.drawImage(this.image, this.x, this.y, this.x2, this.y2);
    ctx.restore()
  }
}

class bonus extends Znamky{
  constructor() {
    super("bonus", 60, 60, 5);
  }
  draw(){
    ctx.save()
    ctx.drawImage(this.image, this.x, this.y, this.x2, this.y2);
    ctx.restore()
  }
}