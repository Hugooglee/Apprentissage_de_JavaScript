let User1 = 'Hugo';
let User2 = 'Autre';
let User3 = 'Encore1';
let AjoutD = 'Oguh';
let AjoutF = 'Gohu';
let Tableau = [User1,User2,User3];



// Ajoute un élément au début du tableau
Tableau.unshift(AjoutD);

// Ajoute un élément à la fin du tableau
Tableau.push(AjoutF);

// Enlève le dernier élément du tableau
Tableau.pop();

// Renvoie la taille du tableau 
let Nombre = Tableau.length;

console.log(Nombre)
console.log(Tableau);