document.getElementById('btn-calc').addEventListener('click', Calcula);

function Calcula() {
  const operador = document.querySelector("#sel-operator").value;
  operando1 = parseFloat(document.querySelector("#elemento1").value);
  operando2 = parseFloat(document.querySelector("#elemento2").value);


  switch (operador){
    case "soma": 
      result = soma();
      break;
    case "subtracao": 
      result = subtracao();
      break;
    case "multiplicacao": 
      result = multiplicacao();
      break;
    case "divisao": 
      result = divisao();
      break; 
  }
  
  const resultFinal= document.querySelector("#span-result");
  if (result==false){
    resultFinal.textContent='Divisão por Zero!';
    console.log('Divisão por Zero!');
  } else {
  resultFinal.textContent='Resultado: ' + Math.round(result*100)/100 ;
  console.log('Resultado: ' + Math.round(result*100)/100);
}
} 

function soma(){
  return operando1 + operando2 ;
}

function subtracao(){
  return operando1 - operando2 ;
}

function multiplicacao(){
  return operando1 * operando2 ;
}

function divisao(){
  if (operando2==0){ //divisão com denominador=0
    alert('Divisão por Zero!');
    return false;
  }
  return operando1 / operando2 ;
}

