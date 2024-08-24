var svetla = document.getElementById('svetlaTemaImg');
var tamna = document.getElementById('tamnaTemaImg');
if(localStorage.getItem("theme")!=null){
  document.body.className=localStorage.getItem("theme");
}
if(localStorage.getItem("KorisnickoIme")!=null){
  var ulogovanDiv = document.getElementsByClassName('KorisnickoIme')[0];
  var ulogovanDivImg = document.getElementsByClassName('ProfilImg')[0];
  ulogovanDiv.style.display = 'block';
  ulogovanDivImg.style.display = 'block';
  document.getElementById('KorisnickoIme').innerText = localStorage.getItem("KorisnickoIme");
}
else {
  var izlogovanDiv = document.getElementsByClassName('NavDugme')[0];
  izlogovanDiv.style.display = 'block';
}
function promeniTemu(){
    var tema = document.body.className;
    if(tema == 'svetlaTema'){
      tema = 'tamnaTema'
      document.body.className = tema;
      svetla.style.display = "inline";
      tamna.style.display = "none";
    }
    else if(tema == 'tamnaTema'){
      tema = 'svetlaTema'
      document.body.className = tema;
      svetla.style.display = "none";
      tamna.style.display = "inline";
    }
    localStorage.setItem("theme",tema);
  }
function redirektujNa(sajt){
  window.location.href  = sajt ;
}
function izlogujSe(){
  localStorage.removeItem('KorisnickoIme');
  redirektujNa('login.html');
}
ucitajCinjenicu();
function ucitajCinjenicu(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var cinjenice = this.responseText.split(/\r?\n/);
          var cinjenica = cinjenice[Math.floor(Math.random() * cinjenice.length)];
          document.getElementById('InteresantnaCinjenica').innerText += ' ' + cinjenica;
      }
  };
  xhttp.open("GET", "cinjenice.txt", true);
  xhttp.send();

}
