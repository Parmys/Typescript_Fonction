//contrairement a javascript, TS possede la notion d'énumération similaire au lg C
//Definition: indique les noms des valeurs 
var Couleur;
(function (Couleur) {
    Couleur[Couleur["Rouge"] = 0] = "Rouge";
    Couleur[Couleur["Vert"] = 1] = "Vert";
    Couleur[Couleur["Bleu"] = 2] = "Bleu";
})(Couleur || (Couleur = {}));
;
//Utilisation
var ma_couleur = Couleur.Rouge;
console.log(ma_couleur);
//Définition : une énumération en indiquant précisément les valeurs 
var Taille;
(function (Taille) {
    Taille[Taille["Petit"] = 3] = "Petit";
    Taille[Taille["Moyen"] = 10] = "Moyen";
    Taille[Taille["Grand"] = 11] = "Grand";
})(Taille || (Taille = {}));
;
var ma_taille = Taille.Petit;
console.log(ma_taille);
