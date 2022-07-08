var cont = 1;
var notas = []
var nome = window.prompt("Digite o nome do aluno")
var soma = 0;
while (cont<=4){
    var nota = parseFloat(window.prompt("Digite a "+cont+"º do aluno"))
    notas.push(nota)
    cont +=1
}
for (var pos in notas){
  soma += notas[pos]
}
if (soma/4 >=7){
  document.write("A média do aluno"+nome+" é de "+soma/4+", portanto o aluno foi Aprovado!<br>")
}else{
  document.write("A média do aluno"+nome+" é de "+soma/4+", portanto o aluno foi Reprovado!<br>")
}

document.write("As notas do aluno foram: "+notas+"<br>")

