window.onload = () => {
    let belso = document.getElementById("kulso");
    belso.innerHTML = "";
    belso.classList.add("egymas_melle");
    for (var i = 0; i < 10; i++) {
        let szam = document.createElement("div");
        belso.appendChild(szam);
        szam.innerText = (i + 1);
        szam.classList.add("doboz");
        szam.style.color = 'rgb(${255/10*(10-i)},0,0)'
        
    }
}