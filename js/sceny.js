class ScenaMenu {
    constructor(){
        sceny[0].push(new pozadie_menu())
        sceny[0].push(new zvuk_zap())
        sceny[0].push(new tlacidlo1_menu())
        sceny[0].push(new tlacidlo2_menu())
        sceny[0].push(new nazov_hry())
        sceny[0].push(new nazov_hry_tien())
        sceny[0].push(new hraj())
        sceny[0].push(new pravidla())
    }
    move() {}
    draw() {}
}

class ScenaLevel {
    constructor(){
        this.pridaj();
    }

    vymaz() {
        sceny[1] = [];
    }

    pridaj() {
        sceny[1].push(new pozadie_level())
        sceny[1].push(new zvuk_zap())
        sceny[1].push(new myska())
        sceny[1].push(new text_priemer())
        sceny[1].push(new pocitadlo_priemeru())
        sceny[1].push(new znamky())
        sceny[1].push(new pocitadlo_znamok())
        sceny[1].push(new cas())
        sceny[1].push(new casovac())
        sceny[1].push(new level())
        sceny[1].push(new cislo_levelu())
        sceny[1].push(new krizik())
        for (i = 0; i < kolko_znamok; i++){
             sceny[1].push(new znamkaA())
             sceny[1].push(new znamkaB())
             sceny[1].push(new znamkaC())
             sceny[1].push(new znamkaD())
             sceny[1].push(new znamkaE())
        }
        if(pocet_levelov == 3){
            for (i = 0; i < kolko_znamok; i++) sceny[1].push(new znamkaFX())
            for(var j = 12; j < kolko_znamok*6+12; j++) sceny[1][j].kolizia()
        }
        else for(var j = 12; j < kolko_znamok*5+12; j++) sceny[1][j].kolizia()
    }
    move() {}
    draw() {}
}

class ScenaPrehra {
    constructor(){
        sceny[2].push(new pozadie_prehra())
        sceny[2].push(new zvuk_zap())
        sceny[2].push(new tlacidlo1_prehra())
        sceny[2].push(new tlacidlo2_prehra())
        sceny[2].push(new prehral())
        sceny[2].push(new o_rok())
        sceny[2].push(new znova())
        sceny[2].push(new skore_prehra())
        sceny[2].push(new ukonci())
    }
    move(){}
    draw(){}
}

class ScenaVyhra {
    constructor(){
        sceny[3].push(new pozadie_vyhra())
        sceny[3].push(new zvuk_zap())
        sceny[3].push(new tlacidlo1_prehra())
        sceny[3].push(new tlacidlo2_prehra())
        sceny[3].push(new znova())
        sceny[3].push(new ukonci())
        sceny[3].push(new skore_vyhra())
        sceny[3].push(new vyhral())
        sceny[3].push(new semester())
    }

    move(){}
    draw(){}
}

class ScenyPravidla {
    constructor(){
        sceny[4].push(new pozadie_pravidla())
        sceny[4].push(new zvuk_zap())
        sceny[4].push(new tlacidlo1_pravidla())
        sceny[4].push(new tlacidlo2_pravidla())
        sceny[4].push(new pravidla_p())
        sceny[4].push(new hraj_p())
        sceny[4].push(new menu())
        sceny[4].push(new prva_veta())
        sceny[4].push(new druha_vety())
        sceny[4].push(new tretia_vety())
        sceny[4].push(new stvrta_veta())
        sceny[4].push(new piata_veta())
    }
    move(){}
    draw(){}
}

class ScenyMedzilevel {
    constructor(){
        sceny[5].push(new pozadie_medzilevel())
        sceny[5].push(new zvuk_zap())
        sceny[5].push(new medzilevel());
        sceny[5].push(new medzilevel_tien());
    }
    move(){
        sceny[5][2].zmena_textu();
        sceny[5][3].zmena_textu();
    }
    draw(){}
}