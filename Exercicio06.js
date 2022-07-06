var peso = parseFloat(window.prompt("Digite seu peso"))
var altura = parseFloat(window.prompt("Digite sua altura"))
var imc = peso/(altura*altura)
if (imc >= 25){
    alert("Seu IMC é de "+imc+", você está acima do peso, procure um médico")
}
if ((imc >18.5)&&(imc <25)){
    alert("Seu IMC é de "+imc+", PARABÉNS!! Você está no peso ideal")
}
if (imc <=18.5){
    alert("Seu IMC é de "+imc+", você está abaixo do peso, procure um médico")
}