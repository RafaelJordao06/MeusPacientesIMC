
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    //EXTRAI INFORMAÇÕES DO FORMULARIO
    var paciente = obtemPacienteFormulario(form);
    //MONTA A TR
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    if(erros.length > 0 ){
        exibeMensagensDeErros(erros);

        return;
    }

    //ADICIONA O PACIENTE NA TABELA
    var tabela = document.querySelector("#tabela-pacientes");
    //ADICIONA AS TD DENTRO DA TR
    tabela.appendChild(pacienteTr);

    adicionaPacienteNaTabela(paciente);

    form.reset();
});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErros(erros){
    var ul = document.querySelector("#mensagens-erros");
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}

function obtemPacienteFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value),
    }

    return paciente;
}

function montaTr(paciente)
{
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");  
    
    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.imc, "info-imc");

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){
 
    var erros = [];

    if(paciente.nome.trim().length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if(!validaPeso(paciente.peso)) erros.push("Peso é inválido");

    if(!validaAltura(paciente.altura)) erros.push("Altura é inválido");

    if(paciente.gordura.trim().length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    return erros;
}

