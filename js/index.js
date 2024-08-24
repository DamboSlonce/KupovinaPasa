const PsiBroj = 6;
var baner = document.getElementsByClassName('BanerContainer')[0];
var trenutniSlajd = 0;
function promeniSlajd(ofset){
  var prosliSlajd = trenutniSlajd;
  var nizSlika = Array.from(baner.children);
  trenutniSlajd += ofset;
  if (trenutniSlajd < 0) { trenutniSlajd = PsiBroj - 1; }
  if (trenutniSlajd >= PsiBroj) { trenutniSlajd = 0;}
  nizSlika[prosliSlajd].style.display = 'none';
  nizSlika[trenutniSlajd].style.display = 'block';
}
