var pasContainer = document.getElementsByClassName('PasContainer')[0];
dodajPsa('Luna', 'Dalmatinac', 'Zenski', 12000);
dodajPsa('Pedro', 'Debug Dog', 'Muski', 1500);
dodajPsa('Goku', 'Afganistanski Gonič', 'Muski', 25000);
dodajPsa('Aska', 'Doberman', 'Zenski', 13750);
dodajPsa('Nele', 'Haski', 'Muski', 7500);
dodajPsa('Princeza', 'Pitbul', 'Zenski', 30000);
dodajPsa('Lesi', 'Retriver', 'Zenski', 100000);
function dodajPsa(ime,rasa,pol,cena){
    var pasDiv = document.createElement('div');
    pasDiv.className = 'PasDiv';
    pasContainer.appendChild(pasDiv);

    var pasImg = document.createElement('img');
    var pasImgPut = (ime + '_' + rasa).replace(' ','_').toLowerCase();
    pasImg.src = 'slike/' + pasImgPut + '.jpg';
    pasDiv.appendChild(pasImg);

    var pasDivSrednji = document.createElement('div');
    pasDivSrednji.className = 'PasDivSredina';
    pasDiv.appendChild(pasDivSrednji);

    var pasImePozadine = document.createElement('div');
    pasImePozadine.className = 'PasImePozadina';
    pasDivSrednji.appendChild(pasImePozadine);

    var pasIme = document.createElement('h1');
    pasIme.innerText = ime;
    pasImePozadine.appendChild(pasIme);

    var pasInfo = document.createElement('h2');
    pasInfo.innerText = rasa + ' • ' + pol;
    pasDivSrednji.appendChild(pasInfo);

    var pasDivDonji = document.createElement('div');
    pasDivDonji.className = 'PasDivDole';
    pasDiv.appendChild(pasDivDonji);

    var pasDugme = document.createElement('button');
    pasDugme.innerText = 'Kupi';
    pasDugme.onclick = ()=>alert(`${ime} je dodat${pol == "Zenski" ? 'a' : ''} u korpu`);
    pasDivDonji.appendChild(pasDugme);

    var pasCena = document.createElement('h3');
    pasCena.innerText = cena + ' RSD';
    pasDivDonji.appendChild(pasCena);
}
