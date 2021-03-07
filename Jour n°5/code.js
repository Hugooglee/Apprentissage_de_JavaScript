let seatsLeft = 10;
let passengersStillToBoard = 8;

let passengersBoarded = 0;

while (seatsLeft > 0 && passengersStillToBoard > 0) {
    passengersBoarded++; // un passager embarque
    passengersStillToBoard--; // donc il y a un passager de moins à embarquer
    seatsLeft--; // et un siège de moins
}

console.log('il y a ' + passengersBoarded + ' personne embarquée il reste ' + seatsLeft + ' place'); // imprime 8, car il y a 8 passagers pour 10 sièges

let Nombre = 0;

for (let i = 1; i <= 10; i++) {
    console.log(i);
    
}