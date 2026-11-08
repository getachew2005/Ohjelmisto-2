let luvut = [];

for (let i = 0; i < 5; i++) {
    let luku = Number(prompt("Anna luku:"));
    luvut.push(luku);
}

for (let i = 4; i >= 0; i--) {
    console.log(luvut[i]);
}