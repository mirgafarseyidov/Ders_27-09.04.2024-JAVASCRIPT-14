// const pullar = [500, 200, 100, 50, 20, 10, 5, 1];
// const pulSekiller = [
//     "500.jpg",
//     "200.jpg",
//     "100.jpg",
//     "50.jpg",
//     "20.jpg",
//     "10.jpg",
//     "5.jpg",
//     "1.jpg",
// ];


function calculate() {
    const eded = parseInt(document.getElementById("number").value);
    const pullar = [500, 200, 100, 50, 20, 10, 5, 1];
    const sekiller = [
        "img/1.jpg",
        "img/5.jpg",
        "img/10.jpg",
        "img/20.jpg",
        "img/50.jpg",
        "img/100.jpg",
        "img/200.jpg",
        "img/500.jpg",
    ];
    const Div = document.getElementById("output");
    Div.innerHTML = "";
    let qalan = eded;
    pullar.forEach((deyer, index) => {
        let say = Math.floor(qalan / deyer);
        if (say > 0) {
            let pul = `${say} x ${deyer} manat`;
            let sekilIndex = pullar.length - index - 1;
            let SekilSayisi = Math.min(say, 5);
            for (let i = 0; i < SekilSayisi; i++) {
                Div.innerHTML += `<img src="${sekiller[sekilIndex]}" alt="${deyer} manat" width="50" height="50">`;
            }
            Div.innerHTML += `<h2>${pul}</h2>`;
            qalan %= deyer;
        }

    });
    if (qalan > 0) {
        let qalanpul = `${qalan} eded 1 manat`;
        let qalanSekilSayi = Math.min(qalan, 5);
        for (let i = 0; i < qalanSekilSayi; i++) {
            Div.innerHTML += `<img src="${sekiller[sekiller.length - 1]
                }" alt="1 manat" width="50" height="50">`;
        }
        if (qalan > 5) {
            qalanpul += ` (${qalanSekilSayi} sekil)`;
        }
        Div.innerHTML += `<p>${qalanpul}</p>`;
    }
}
