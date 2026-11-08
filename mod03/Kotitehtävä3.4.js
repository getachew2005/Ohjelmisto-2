let luvut = [];
let luku;

while (true) {
    luku = Number(prompt("Anna luku (0 lopettaa):"));

    if (luku === 0) {
        break;
    }

    luvut.push(luku);
}

luvut.sort(function(a, b) {
    return b - a;
});

for (let i = 0; i < luvut.length; i++) {
    console.log(luvut[i]);
}