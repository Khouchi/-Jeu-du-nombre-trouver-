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
const choiceNumber = ["C'est le juste prix ","C'est moins cher !!","C'est plus cher ","Entrez un chiffre entre 0 et 1000"];

chiffreAleatoir = Math.floor(Math.random() * 1000);
console.log(chiffreAleatoir);

let butondemarer = document.querySelector(".bouton1");
let paragraphSelector2 = document.querySelector(".paragraphe2");
let paragraphSelector1 = document.getElementById("in");

let tentative = 1;

butondemarer.addEventListener("click", displayMessage);


// buttonSelector.addEventListener("click", verification);

// function verification(){
//     let inputUser = inputUserSelector.value;
//     if(){

//     }else{
//         if(inputUser < randNumb){
//             affichage.textContent = "C'est plus !";
//         }else if(inputUser > randNumb){
//             affichage.textContent = "C'est moins";
//         }else {
//             affichage.textContent = "Gagné";
//         }
//     }
 
// }
function displayMessage (){ 
    if (paragraphSelector1.value < 0 || paragraphSelector1.value > 1000 || paragraphSelector1.value == isNaN()){
        paragraphSelector2.textContent = choiceNumber[3];
    }
    else{
        if (paragraphSelector1.value == chiffreAleatoir){
                if (tentative == 1){
                    paragraphSelector2.textContent = choiceNumber[0] + "C'etais votre "+ tentative + " ère tentative";
                    tentative = tentative + 1;
                }
                else{
                    paragraphSelector2.textContent = choiceNumber[0] + "C'etais votre "+ tentative + " em tentatives";
                    tentative = tentative + 1;
                }
        }
        else if (paragraphSelector1.value > chiffreAleatoir){
                if (tentative == 1){
                    paragraphSelector2.textContent = choiceNumber[1] + "C'etais votre "+ tentative + " ère tentative";
                    tentative = tentative + 1;
                }
                else{
                    paragraphSelector2.textContent = choiceNumber[1] + "C'etais votre "+ tentative + " em tentatives";
                    tentative = tentative + 1;
                }
        }
        else if (paragraphSelector1.value < chiffreAleatoir){
                if (tentative == 1){
                    paragraphSelector2.textContent = choiceNumber[2] + "C'etais votre "+ tentative + " ère tentative";
                    tentative = tentative + 1;
                }
                else{
                    paragraphSelector2.textContent = choiceNumber[2] + "C'etais votre "+ tentative + " em tentatives";
                    tentative = tentative + 1;
                }

        }
   }
}