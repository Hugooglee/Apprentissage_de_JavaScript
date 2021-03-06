let LaVariable = true;
let UnNombre = 19;

let firstUser = {
    name: "Will Alexander",
    age: 33,
    accountLevel: "normal"
};
let secondUser = {
    name: "Sarah Kate",
    age: 21,
    accountLevel: "premium"
};
let thirdUser = {
    name: "Audrey Simon",
    age: 27,
    accountLevel: "mega-premium"
};

if (LaVariable) { // de base si on ne met rien ça test si c'est vrai
    console.log("c'est vrai !");
} else if (UnNombre > 20) {
    console.log("c'est faux ! mais supérieur à 20");
} else {
    console.log('Ne fais rien !');
}



// == est une égélité si il sont égale 
// === est une égalité mais il faut aussi que le type soit le même


/*  <    inférieur à ;

    <=   inférieur ou égal à ;

    ==   égal à ;

    >=    supérieur ou égal à ;

    >    supérieur à ;

    !=    différent de */
    // pour en vérifier plusieurs à la fois
    // &&  — ET logique — pour vérifier si deux conditions sont toutes les deux vraies ;

    // ||   — OU logique — pour vérifier si au moins une condition est vraie ;
    
    // !   — NON logique — pour vérifier si une condition n'est pas vraie. 

switch (firstUser.accountLevel) {
    case 'normal':
        console.log('You have a normal account!');
        break;
    case 'premium':
        console.log('You have a premium account!');
        break;
    case 'mega-premium':
        console.log('You have a mega premium account!');
        break;
    default:
        console.log('Unknown account type!');
}