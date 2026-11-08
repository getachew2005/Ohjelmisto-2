let luvut = [];
let luku;

while (true) {
    luku = Number(prompt("Anna luku:"));

    if (luvut.includes(luku)) {
        alert("Luku on jo annettu!");
        break;
    }

    luvut.push(luku);
}

luvut.sort(function(a, b) {
    return a - b;
});

for (let i = 0; i < luvut.length; i++) {
    console.log(luvut[i]);
}