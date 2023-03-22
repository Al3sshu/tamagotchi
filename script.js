const barravida = document.getElementById("vida")
const botoncomida = document.getElementById("alimentar")
const botonjugar = document.getElementById("jugar")
const botondormir = document.getElementById("dormir")
const botonhigiene = document.getElementById("higiene")

class tamagotchi {
    constructor() {
        this.vida = 100;
        this.hambre = 100;
        this.higiene = 100;
        this.dormir = 100;
        this.jugar = 100;
        this.intervalId = null;
    }


       
    
    update() {
        this.intervalId = setInterval(() => {

            // Esto actualiza la vida
            this.vida = this.vida - 5;
            this.hambre = this.hambre -10;
            this.higiene = this.higiene -15;
            this.dormir = this.dormir -20;
            this.jugar = this.jugar -25;
            
            // Esto cambia la longitud de la barra
            barravida.style.width = this.vida + 'px'
            botoncomida.style.width =this.hambre + "px"
            botondormir.style.witdth = this.dormir + "px"
            botonjugar.style.width = this.jugar + "px"
            botonhigiene.style.width = this.higiene + "px"

            
            // Esto es para saber si hemos perdido
            this.gameOver();
        }, 1000)

    }
  /* segunda  () {
        this.intervalId = setInterval (() => {

            this.hambre = this.hambre -10;
            botoncomida.style.width = this.hambre + "px"
            this.gameOver();
        }, 500) 
    }*/

    /* tercera (){
        this.intervalId = setInterval(() => {
            this.jugar = this.jugar -15
            barrajugar.style.width = this.jugar + "px"
            this.gameOver1 ();
        }, 500);
     }*/

    comida() {
        this.vida = this.vida + 20
        this.dormir = this.dormir + 15
    }
   *
    /* jugar () {
        this.higiene = this.higiene + 10
    }
    higiene() {
        this. = this.higiene + 15
    }
    */

    gameOver() {
        if (this.vida === 0) clearInterval(this.intervalId) 
        if (this.higiene === 0) clearInterval(this.intervalId)
        if( this.dormir === 0) clearInterval (this.intervalId)
        
    } 
    /*
    gameOver1 (){
        if (this.hambre === 0) clearInterval(this.intervalId)
    }
    gameOver2 (){
        if(this.jugar === 0) clearInterval (this.intervalId)
     }*/
     }
     

const primertamagotchi = new tamagotchi()

primertamagotchi.update()

botoncomida.addEventListener("click", () => {
    primertamagotchi.comida();

    
   // primertamagotchi.jugar();//
   // primertamagotchi.dormir();//
    //primertamagotchi.higiene();//
    
}) 
const segundopaso = new tamagotchi()
segundopaso.update()
botondormir.addEventListener ("click", ()=> {
segundopaso.dormir();
})



/*const segundotamagotchi = new tamagotchi

segundotamagotchi.segunda ()

barrajugar.addEventListener("click",() => {
    segundotamagotchi.jugar();

}) */

