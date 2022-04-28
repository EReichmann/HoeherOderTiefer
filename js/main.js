let aktuelleZufallszahl = 50
let Punkte = 0
let neueZufallszahl



function höher() {
 neueZufallszahl = Math.round(Math.random() * 100)
 console.log(neueZufallszahl)
 document.getElementById("hinweis").innerHTML = ""
   if (aktuelleZufallszahl < neueZufallszahl){
       Punkte = Punkte + 1
       document.getElementById("auswertung").innerHTML = "Das war richtig! Dein Score ist: " + Punkte
       aktuelleZufallszahl = neueZufallszahl
       document.getElementById("Zufallszahl").innerHTML = "Das ist deine Zufallszahl: " + aktuelleZufallszahl
   } else{
       document.getElementById("auswertung").innerHTML = "Das war leider falsch :( Du musst wieder neu Anfangen."
       document.getElementById("hinweis").innerHTML = "Deine alte Zahl war " + aktuelleZufallszahl + " und deine neue Zahl war " + neueZufallszahl
       aktuelleZufallszahl = 50
       document.getElementById("Zufallszahl").innerHTML = "Das ist deine Zufallszahl: " + aktuelleZufallszahl
       Punkte = 0
   }
}

function tiefer() {
    neueZufallszahl = Math.round(Math.random() * 100)
    console.log(neueZufallszahl)
    document.getElementById("hinweis").innerHTML = ""
    if (aktuelleZufallszahl > neueZufallszahl){
        Punkte = Punkte + 1
        document.getElementById("auswertung").innerHTML = "Das war richtig! Dein Score ist: " + Punkte
        aktuelleZufallszahl = neueZufallszahl
        document.getElementById("Zufallszahl").innerHTML = "Das ist deine Zufallszahl: " + aktuelleZufallszahl
    } else{
        document.getElementById("auswertung").innerHTML = "Das war leider falsch :( Du musst wieder neu Anfangen."
        aktuelleZufallszahl = 50
        document.getElementById("Zufallszahl").innerHTML = "Das ist deine Zufallszahl: " + aktuelleZufallszahl
        Punkte = 0
    }
}