class Infos {
    constructor(InfosNom,InfosPrénom,InfosÂge) {
        this.Nom = InfosNom;
        this.Prénom = InfosPrénom;
        this.Âge = InfosÂge;
    }
}
let InfosUsers = new Infos (
    "Guillet",
    "Hugo",
    15
)

console.log('Vous vous appelez' + " " + InfosUsers.Prénom + ' !');