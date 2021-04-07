var num = Math.floor(Math.random() * 10) + 1;
var NbEssais = 0;
function Devine() {
var choisi =document.form1.devine1.value;
NbEssais++;
status = "Nombre d'essais : " + NbEssais;
if (choisi < num) 
document.form1.devine1.value= "Non, le nombre est plus grand.";
if (choisi > num)
document.form1.devine1.value = "Non, le nombre est plus petit.";
if (choisi == num) {
    window.alert("Correct ! Vous avez trouvé en " + NbEssais + "essais.");
    location.reload();
    }
if (NbEssais == 3) {
    window.alert("Désolé, c'est fini. Le nombre correct était : " + num);
    location.reload();
    }
}