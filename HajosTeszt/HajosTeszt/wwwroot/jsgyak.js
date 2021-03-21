window.onload = () => {
    let belso = document.getElementById("kulso");
    belso.innerHTML = "";
    belso.classList.add("egymas_melle");
    for (var i = 0; i < 10; i++) {
        let szam = document.createElement("div");
        belso.appendChild(szam);
        szam.innerText = (i + 1);
        szam.classList.add("doboz");
        szam.style.color = `rgb(${255 - (255 / 10 * i)},${255 - (255 / 10 * i)},${255 - (255 / 10 * i)})`

    }

    var faktorialisR = (n) => {
        if (n === 0 || n === 1) {
            return 1;
        }
        else {
            return n * faktorialisR(n - 1);
        }
    }


    for (var sor = 0; sor < 10; sor++) {
        var sorok = document.createElement("div");
        sorok.classList.add("sor");
        document.getElementById("pascal").appendChild(sorok);
        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            var oszlopok = document.createElement("div");
            sorok.appendChild(oszlopok);
            oszlopok.classList.add("elem");
            oszlopok.innerText = faktorialisR(sor) / (faktorialisR(oszlop) * faktorialisR(sor - oszlop));
        }
    }
}