const buttons = $("button");
const gamerName = prompt("Votre nom ?");

for (let i = 0; i < buttons.length; i++){
$(buttons[i]).bind("click", function() {
    var gamer = $(buttons[i]).html();
    var computer = $(buttons[Math.floor(Math.random() * buttons.length)]).html();
    var result;

    if (gamer === computer) {
        result = "Egalité !";
    } else if((gamer === "Pierre" && computer === "Ciseaux") 
            || (gamer === "Feuille" && computer === "Pierre") 
            || (gamer === "Ciseaux" && computer === "Feuille")) {
        result = "Vous avez gagné !";
    } else {
        result = "Vous avez perdu !";
    } $("#result").html(`${gamerName} a choisi : ${gamer}. L'ordinateur a choisi : ${computer}. ${result}`);
});
};