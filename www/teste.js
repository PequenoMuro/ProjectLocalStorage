var placaVeiculo
var veiculo

armazenamento = localStorage

localStorage.setItem("ABC-1234","Ryundai Veloster")


localStorage.setItem("DEF-5678","Corsa")

localStorage.setItem("GHI-9101","Golf gti")

function buscar(){

placaVeiculo = document.getElementById('Placa').value

veiculo = localStorage.getItem(placaVeiculo)

document.getElementById('valor').innerHTML = veiculo
}