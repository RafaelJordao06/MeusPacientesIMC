var titulo = document.querySelector(".Titulo");
titulo.textContent = "Sistema de calcular IMC";

var paciente =  document.querySelectorAll(".paciente");

for(var i = 0; i < paciente.length; i++){


    var tdPeso = paciente[i].querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente[i].querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente[i].querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValido = validaAltura(altura);

    if(!pesoEhValido){
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente[i].classList.add("paciente-invalido");

    }

    if(!alturaEhValido){
        console.log("Altura inválido!");
        alturaEhValido = false;
        tdImc.textContent = "Altura inválido!";
        paciente[i].classList.add("paciente-invalido");
    }

    if (alturaEhValido && pesoEhValido){
        var imc = calcularImc(peso, altura);
        tdImc.textContent = imc;
    }

}

function validaPeso(peso){

    if(peso >= 0 && peso < 1000){
        return true;
    }
    return false;
}

function validaAltura(altura){

    if(altura >= 0 && altura < 3.0){
        return true;
    }
    return false;
}


function calcularImc(peso,altura){

    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}
