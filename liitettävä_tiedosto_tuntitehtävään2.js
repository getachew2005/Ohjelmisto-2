"use strict";
console.log("Helo world")

let teksti = document.querySelector("#result")
teksti.textContent = "Hi World!!!"

document.getElementById("calc").addEventListener("click", () => {
    let priceInput = document.querySelector("#price");
    let qtyInmput = document.querySelector("#qty");
    let promoInput = document.querySelector("#promo");

    const price = parseInt(priceInpur.value);
    const qty = parseInt(qtyInmput.value);

    let total_price = price * qty

    for (let i = 1; i <= qty; i++)

    switch (promoCode) {
        case "ale":
            total_price *= 0.7
            break;
        case "super2026":
            total_price *= 0.5
            break;
    }

    let tekstikappale = document.querySelector("#result");
    tekstikappale.textContent = `Hinta: ${total_rice}`; 



})