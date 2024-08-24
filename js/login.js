
function ulogujSe(){
  var korisnickoIme = document.getElementById('KorisnickoIme').value;
  localStorage.setItem("KorisnickoIme",korisnickoIme);
  window.location.href  = 'index.html' ;
}
function ulogujSeGost(){
  window.location.href  = 'index.html'
}
