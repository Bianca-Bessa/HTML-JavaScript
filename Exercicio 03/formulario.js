function validar(){
    var nome = formuser.nome.value;
    var pontos = formuser.pontos.value;
    var nota = formuser.nota.value;
    var universidade = formuser.universidade.value;
    var empresa = formuser.empresa.value;
    var horario = formuser.horario.value;


    if (nome == ""){
        alert ('Preencha o nome');
        formuser.nome.focus();
        return false;
    }

    if (pontos == ""){
        alert ('Preencha pontos');
        formuser.pontos.focus();
        return false;
    }

    if (nota == ""){
        alert ('Preencha a nota');
        formuser.nota.focus();
        return false;
    }

    if (universidade == ""){
        alert ('Preencha universidade');
        formuser.universidade.focus();
        return false;
    }

    if (empresa == ""){
        alert ('Preencha empresa');
        formuser.empresa.focus();
        return false;
    }

    if (horario == ""){
        alert ('Preencha data');
        formuser.horario.focus();
        return false;
    }
}
