function bordaVermelha(){
    const inputs = document.getElementsByTagName("input")

    Array.from(inputs).map(input => input.classList.add("erro"))

}

function voltar(){
    const inputs = document.getElementsByTagName("input")

    Array.from(inputs).map(input => input.style.borderColor="hsl(0, 0%, 86%)")

    
    const sections = document.getElementsByTagName("section")

    Array.from(sections).map(section => section.innerHTML="<p></p>")

    const p = document.getElementsByTagName("p")

    Array.from(p).map(titulo => titulo.style.color= "hsl(0, 0%, 86%)" )

    

}

function calcularIdade() {
    var dia = document.getElementsByClassName('dia')[0].value;
    var mes = document.getElementsByClassName('mes')[0].value;
    var ano = document.getElementsByClassName('ano')[0].value;

    var dataNascimento = new Date(ano, mes - 1, dia);
    var dataAtual = new Date();

    var anos = dataAtual.getFullYear() - dataNascimento.getFullYear();
    var meses = dataAtual.getMonth() - dataNascimento.getMonth();
    var dias = dataAtual.getDate() - dataNascimento.getDate();

    if (meses < 0 || (meses === 0 && dias < 0)) {
        anos--;
        meses += 12;
    }

    if (dias < 0) {
        meses--;
        var diasNoMes = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 0).getDate();
        dias += diasNoMes;
    }

    document.getElementsByClassName("idade-ano")[0].innerHTML = anos;
    document.getElementsByClassName("idade-mes")[0].innerHTML = meses;
    document.getElementsByClassName("idade-dia")[0].innerHTML = dias;
}



function insiraUmValor(){
    const inputs = document.getElementsByTagName("input")

    Array.from(inputs).map(input => input.classList.add("erro"))

    const sections = document.getElementsByTagName("section")

    Array.from(sections).map(section => section.innerHTML="<p>Insira um valor!</p>")
}

function verificar(){
    const mesElement = document.querySelector(".mes");
    const mes = mesElement.value; 
    const tituloMes = document.querySelector(".titulo-mes");
    const msgErro = document.querySelector(".msg-erro-mes");
    const diaElement = document.querySelector('.dia');
    const dia = diaElement.value
    const tituloDia =  document.querySelector(".titulo-dia");
    const msgErroDia = document.querySelector(".msg-erro-dia");
    const anoElement = document.querySelector(".ano")
    const ano = anoElement.value
    const msgErroano = document.querySelector(".msg-erro-ano")
    const tituloAno = document.querySelector(".titulo-ano")
    var anoAtual = new Date().getFullYear();
    

    if (mes > 12) {
        tituloMes.style.color = "red";
        mesElement.style.borderColor = "red"; 
        msgErro.innerHTML = '<p>Mes Inválido!</p>';
    }else if(mes == "" && dia =="" && ano == ""){
        insiraUmValor()
        
    }else if (mes == 1 && dia > 31){
        tituloDia.style.color = "red";
        diaElement.style.borderColor = "red"; 
        msgErroDia.innerHTML = '<p>Dia Inválido!</p>';
    }else if (mes == 2 && dia > 29){
        tituloDia.style.color = "red";
        diaElement.style.borderColor = "red"; 
        msgErroDia.innerHTML = '<p>Dia Inválido!</p>';
    }else if (mes == 3 && dia > 31){
        tituloDia.style.color = "red";
        diaElement.style.borderColor = "red"; 
        msgErroDia.innerHTML = '<p>Dia Inválido!</p>';
    }else if (mes == 4 && dia > 30){
        tituloDia.style.color = "red";
        diaElement.style.borderColor = "red"; 
        msgErroDia.innerHTML = '<p>Dia Inválido!</p>';
    }else if (mes == 5 && dia > 31){
        tituloDia.style.color = "red";
        diaElement.style.borderColor = "red"; 
        msgErroDia.innerHTML = '<p>Dia Inválido!</p>';
    }else if (mes == 6 && dia > 30){
        tituloDia.style.color = "red";
        diaElement.style.borderColor = "red"; 
        msgErroDia.innerHTML = '<p>Dia Inválido!</p>';
    }else if (mes == 7 && dia > 31){
        tituloDia.style.color = "red";
        diaElement.style.borderColor = "red"; 
        msgErroDia.innerHTML = '<p>Dia Inválido!</p>';
    }else if (mes == 8 && dia > 31){
        tituloDia.style.color = "red";
        diaElement.style.borderColor = "red"; 
        msgErroDia.innerHTML = '<p>Dia Inválido!</p>';
    }else if (mes == 9 && dia > 30){
        tituloDia.style.color = "red";
        diaElement.style.borderColor = "red"; 
        msgErroDia.innerHTML = '<p>Dia Inválido!</p>';
    }else if (mes == 10 && dia > 31){
        tituloDia.style.color = "red";
        diaElement.style.borderColor = "red"; 
        msgErroDia.innerHTML = '<p>Dia Inválido!</p>';
    }else if (mes == 11 && dia > 30){
        tituloDia.style.color = "red";
        diaElement.style.borderColor = "red"; 
        msgErroDia.innerHTML = '<p>Dia Inválido!</p>';
    }else if (mes == 12 && dia > 31){
        tituloDia.style.color = "red";
        diaElement.style.borderColor = "red"; 
        msgErroDia.innerHTML = '<p>Dia Inválido!</p>';
    }else if(ano > anoAtual){
        tituloAno.style.color = "red";
        anoElement.style.borderColor="red";
        msgErroano.innerHTML = "<p>Ano invalido</p>"
    }else if(dia == ""){
        tituloDia.style.color = "red";
        diaElement.style.borderColor = "red"; 
        msgErroDia.innerHTML = '<p>Insira um dia!</p>'
    }else if (mes == ""){
        tituloMes.style.color = "red";
        mesElement.style.borderColor = "red"; 
        msgErro.innerHTML = '<p>Insira um mes!</p>'
    }else if(ano == ""){
        tituloAno.style.color = "red";
        anoElement.style.borderColor="red";
        msgErroano.innerHTML = "<p>Insira um ano</p>"
    }else {
        calcularIdade()
        voltar()
    }
}

document.querySelector(".btn").addEventListener("click", () => {
    verificar()
});


