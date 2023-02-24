let visor = document.getElementById("visor");
const btns = document.querySelectorAll('[data-btn]');
const lastOperation = document.querySelector("[data-visor-last-operation]");
const currentOperation = document.querySelector("[data-visor-current-operation]");

class Calculator {
  constructor(lastOperation, currentOperation){
    this.lastOperation = lastOperation;
    this.currentOperation = currentOperation;
    this.currentValue = ""; //armazenar o valor atual clicado
  }
  addToVisor(value){ //dar um set no value, que é o valor do button 
    this.currentvalue = value;
    console.log("Valor da value: " + value)
    console.log("AddToVisor: "+ this.currentValue);//retorna nada
    this.updateCurrentOperation();
  }

  updateCurrentOperation(){ //atualiza a exibição da div
    this.currentOperation.innerText += this.currentvalue;
    console.log("updateCurrentOperation: " + this.currentOperation.innerText);
  }
}
const calculator = new Calculator(lastOperation, currentOperation);


//Mostrar os botões no visor
// function insertButtonsIntoVisor(buttonContent){
//     let content = document.getElementById('visor').innerHTML;
//     document.getElementById('visor').innerHTML = content + buttonContent;
// }

// //Limpar visor
// function clearAllInVisor(){
//     let clearAll = document.querySelector("#clearAll");
//     visor.value = "";
// }

// //Limpar -1 caractere
// function clearLessOne(){
//     let visor = document.getElementById("visor").innerHTML;
//     document.getElementById('visor').innerHTML = visor.substring(0, visor.length -1);
// }

// function soma(){
//     visor.value += visor.value;
//     console.log("Dentro");
// }

btns.forEach((btn) =>{
    btn.addEventListener("click", (event) => {
        const value = event.target.dataset.btn;

        if(value >= 0 || value === "."){
            console.log("botão clicado: "+ value);
            calculator.addToVisor(value);
        }else{

        }
    })
})




