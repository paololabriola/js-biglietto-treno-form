const form = document.getElementById('data-insert');

const scontoMinorenni = 0.2;
const scontoAnziani = 0.4;
const etaLimiteGiovani = 18;
const etaLimiteAnziani = 65;
const prezzoPerKm = 0.21;
let prezzoBase = 0;

function calcolaPrezzo(km, eta) {

    prezzoBase = km * prezzoPerKm;

    if(eta < etaLimiteGiovani)
        return prezzoBase - (prezzoBase * scontoMinorenni) + "€";        
    else if(eta > etaLimiteGiovani)
        return prezzoBase - (prezzoBase * scontoAnziani) + "€";
    else 
        return prezzoBase + "€";

}

form.addEventListener('submit', addItem);

function addItem(event) {

    event.preventDefault();

    const km = document.getElementById('km-input').value;
    const eta = document.getElementById('eta-input').value;
    const prezzoBiglietto = calcolaPrezzo(km, eta);
    const div = document.getElementById("stampa-prezzo");
    const h3 = document.createElement('h3');

    h3.innerHTML = "Distanza: " + km + " Età: " + eta + " Prezzo: " + prezzoBiglietto;
    div.appendChild(h3);

}