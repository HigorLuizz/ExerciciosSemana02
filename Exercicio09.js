var horti = 0;
var lat = 0;
var carnes = 0;
var peixe = 0;
var ave = 0;
var maior = 0;
var nomeMaior;
do{
  var opc = parseInt(window.prompt("Qual produto deseja compra? [1]Hortifruti, [2]Laticínios, [3]Carnes, [4]Peixes, [5]Aves, [6]Fechar pedido."))
  if (opc!=6){
    var qnt = parseInt(window.prompt("Qual a quantidade que deseja comprar desse item?"))
  }
  switch(opc){
    case 1:
      horti+=qnt;
      if (horti > maior){
        maior = horti;
        nomeMaior = "Hortifruti"
      }
      break;
    case 2:
      lat+=qnt;
      if (lat > maior){
        maior = lat;
        nomeMaior = "Laticínios"
      }
      break;
    case 3:
      carnes+=qnt;
      if (carnes > maior){
        maior = carnes;
        nomeMaior = "Carnes"
      }
      break;
    case 4:
      peixe+=qnt;
      if (peixe > maior){
        maior = peixe;
        nomeMaior = "Peixe"
      }
      break;
    case 5:
      ave+=qnt;
      if (ave > maior){
        maior = ave;
        nomeMaior = "Aves"
      }
      break;
  }
}while (opc != "6");
document.write("O produto que você mais comprou foi "+nomeMaior+", com uma quantidade de "+maior+" unidades")

