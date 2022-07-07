var cont = 0;
var boa = 0;
var excelente = 0;
var ruim = 0;
while (cont < 4) {
  var ask = window.prompt(
    "O que você acha da série Stranger Things? Digite o Número da opção:[1]Boa, [2]Excelente, [3]Ruim."
  );
if (ask == 1){
    boa += 1;
}else if (ask == 2){
    excelente += 1;
}else{
    ruim += 1;
}
cont += 1;
}
document.write("<h1>Relatório Final<h1/><br>")
document.write(boa+" Pessoas acharam a série Stranger Things boa<br>")
document.write(excelente+" Pessoas acharam a série Stranger Things excelente<br>")
document.write(ruim+" Pessoas acharam a série Stranger Things ruim<br>")
