function validirajFormu(){
  var cenaPsa = document.getElementById("cenaPsa").value;
  console.log(cenaPsa);
  if(cenaPsa>150000){
    alert('Cena psa je prevelika');
    return false;
  }
  alert('Uspesno ste postirali psa, ponude ce vam stizati na email.');
  return true;
}
