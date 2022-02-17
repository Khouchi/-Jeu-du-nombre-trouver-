//Correction commentaire
var num = Math.floor(Math.random() * 1000) + 1; //le +1 n'est pas nécéssaire, ici le math.random ira de 0 a 1000.99 grand max le floor arrondis a l'inférieur
var NbEssais = 0;

function Devine() {
    var choisi = document.form1.devine1.value;
    NbEssais++;
    
    status = "Nombre d'essais : " + NbEssais; // tu n'a pas déclaré status 
    
    if (choisi < num) {
        document.form1.indice.value = "Non, le nombre est plus grand.";
    }
    if (choisi > num){
        document.form1.indice.value = "Non, le nombre est plus petit.";
    }
    if (choisi == num) {
        document.form1.indice.value = "Correct ! Vous avez trouvé en " + NbEssais + "essais.";
        location.reload();
        }
    if (NbEssais == 10) {
        document.form1.indice.value = ("Désolé, c'est fini. Le nombre correct était : " + num);
        location.reload();
    }
}
