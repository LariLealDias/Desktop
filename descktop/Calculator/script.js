let visor = document.getElementById("visor");


//Mostrar os botões no visor
function insertButtonsIntoVisor(buttonContent){

    let content = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = content + buttonContent;
}

//Limpar visor
function clearAllInVisor(){
    let clearAll = document.querySelector("#clearAll");
    visor.value = "";
}

//Limpar -1 caractere
function clearLessOne(){
    let visor = document.getElementById("visor").innerHTML;
    document.getElementById('visor').innerHTML = visor.substring(0, visor.length -1);
}

function soma(){
    visor.value += visor.value;
    console.log("Dentro");
}



