let unCheck = function () {
  let checkboxes = document.querySelectorAll('input[name="or-cek"]:checked');
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = false;
  }
};

let times =  function(data){
  document.getElementById("orderD").classList.remove("vsbl");
   document.getElementById(data).classList.add("nvsbl");
 
}

function sec(data) {
  document.getElementById("orderD").classList.remove("nvsbl");
  document.getElementById("orderD").classList.add("vsbl");
  document.querySelectorAll('input[name="or-cek"]').checked = false;
  let pizza = data.split("--", 2);
  document.getElementById("pizza").innerHTML =
    "Orta Boy " + pizza[0] + " Pizza";
  document.getElementById("pizza-cost").innerHTML = pizza[1];
  document.getElementById("piece-middle").innerHTML = "1";
  let sum = Number(pizza[1]); //tek seçim ve ilk sefer olduğu için += koymadım
  document.getElementById("sum").value = sum;
  document.getElementById("ext-detail-sum").innerHTML = 0;
  document.getElementById("ext-detail").innerHTML = "";
  // exstraCost();
  unCheck();
  const elementt = document.getElementById("orderD");
  elementt.scrollIntoView();
}

function exstraCost() {
  let p_sum = 0; // extra ürün fiyat toplam
  let extCost = ""; // extra ürün işlem
  let extDetail = ""; // extra ürün isim listeleme
  let checkboxes = document.querySelectorAll('input[name="or-cek"]:checked');
  for (let i = 0; i < checkboxes.length; i++) {
    extCost = checkboxes[i].value.split("--", 2);
    // var  p_sum = Number(document.getElementById("sum").value);
    p_sum += Number(extCost[1]);
    i === 0 ? (extDetail = extCost[0]) : (extDetail += "  -- " + extCost[0]);
  }
  let piece = Number(document.getElementById("piece-middle").innerHTML);
  document.getElementById("sum").value =
    piece * (Number(document.getElementById("pizza-cost").innerHTML) + p_sum);
  document.getElementById("ext-detail").innerHTML = extDetail;
  document.getElementById("ext-detail-sum").innerHTML = p_sum;
}

function pieceAdd(a) {
  let cosT = Number(document.getElementById("pizza-cost").innerHTML)
  let pizzaPiece = Number(document.getElementById("piece-middle").innerHTML);
  if (a == "1") {
    if (pizzaPiece > 1 && cosT > 0) {
      pizzaPiece -= 1;
      document.getElementById("piece-middle").innerHTML = pizzaPiece;
      exstraCost();
    }
  } else {
    if (pizzaPiece < 5 && cosT > 0) {
      pizzaPiece += 1;
      document.getElementById("piece-middle").innerHTML = pizzaPiece;
      exstraCost();
    }
  }


}
