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
    this.currentValue = value;
    console.log("Valor da value: " + value)
    console.log("AddToVisor: "+ this.currentValue);//retorna nada
    this.updateScreen();
  }

  updateScreen(
    operationValue = null,
    operation = null,
    current = null,
    last = null
  ){
      
      if(operationValue === null){
          this.currentOperation.innerText += this.currentValue;
          console.log(this.currentOperation.innerText + this.currentValue);
          console.log("UpdateScreen: "+ `${this.currentValue+= this.currentValue}`);
    }else{
            // if(last === 0){
                operationValue = current;
                console.log("operationValue do updateScreen: "+operationValue);
        // }
        this.lastOperation.innerText = `${operationValue} ${operation}`;
        this.currentOperation.innerText = "";
    }
  }

////Last functions
//   updateCurrentOperation(){ //atualiza a exibição da div CurrentOperation
//     this.currentOperation.innerText += this.currentvalue;
//     console.log("updateCurrentOperation: " + this.currentOperation.innerText);
//   }

//   updateLastOperation(){
//     const currentText = this.currentOperation.innerText;
//     this.lastOperation.innerText = currentText ;

//     console.log("updateLastOperation: " + this.lastOperation.innerText )
//   }



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
        const value = event.target.innerText;
        // const value = event.target.dataset.btn;
        if(value >= 0 || value === "."){
            console.log("botão clicado: "+ value);
            calculator.addToVisor(value);
        }else {
            if(value === "=") {
                 const operationValue = currentOperation.innerText;
                const operation = value;
                console.log("operationValue depois que clica no =: "+operationValue)

                calculator.updateScreen(operationValue, operation);
            }
        }
    })
})




