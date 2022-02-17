var num = Math.floor(Math.random() * 1000) + 1;
var NbEssais = 0;
function Devine() {
var choisi = document.form1.devine1.value;
NbEssais++;
status = "Nombre d'essais : " + NbEssais;
if (choisi < num) 
    document.form1.indice.value = "Non, le nombre est plus grand.";
if (choisi > num)
    document.form1.indice.value = "Non, le nombre est plus petit.";
if (choisi == num) {
    document.form1.indice.value = "Correct ! Vous avez trouvé en " + NbEssais + "essais.";
    location.reload();
    }
if (NbEssais == 10) {
    document.form1.indice.value = ("Désolé, c'est fini. Le nombre correct était : " + num);
    location.reload();
}}