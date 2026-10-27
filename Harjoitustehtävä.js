const multiplier = 4.1868;
const k1 = prompt("Anna lounaan energiamäärä (kcal).");
const k2 = prompt("Anna päivällisen energiamäärä (kcal).");

const j1 = multiplier * k1;
const j2 = multiplier * k2;

console.log(`Lounaalla sait ${j1} kJ ja päivällisellä ${j2} kJ.`);